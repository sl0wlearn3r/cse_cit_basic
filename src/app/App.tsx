import { useEffect, useMemo, useState } from "react";
import { DeckSelector } from "../components/DeckSelector";
import { ParliamentScene } from "../components/ParliamentScene";
import { ProgressPanel } from "../components/ProgressPanel";
import { RecallCard } from "../components/RecallCard";
import { ReviewButtons } from "../components/ReviewButtons";
import { starterDeck } from "../content/starterDeck";
import {
  getDueCards,
  loadProgress,
  recordReview,
  saveProgress,
} from "../state/reviewStore";
import { getTodayIsoDate } from "../state/scheduler";
import type { ReviewProgress, ReviewRating } from "../types/review";

type AppProps = {
  todayIso?: string;
};

function feedbackFor(rating: ReviewRating): string {
  switch (rating) {
    case "forgot":
      return "Kart bugün yeniden sıraya alındı.";
    case "hard":
      return "Yarın tekrar görünecek.";
    case "remembered":
      return "Üç gün sonra tekrar sorulacak.";
    case "easy":
      return "Yedi gün sonra tekrar kürsüye gelecek.";
  }
}

export default function App({ todayIso = getTodayIsoDate() }: AppProps) {
  const cardIds = useMemo(() => starterDeck.map((card) => card.id), []);
  const [progress, setProgress] = useState<ReviewProgress>(() =>
    loadProgress(cardIds, todayIso),
  );
  const [isRevealed, setIsRevealed] = useState(false);
  const [feedback, setFeedback] = useState<string>();

  const dueCardIds = useMemo(
    () => getDueCards(cardIds, progress, todayIso),
    [cardIds, progress, todayIso],
  );
  const currentCard = starterDeck.find((card) => card.id === dueCardIds[0]);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  function handleReveal() {
    setIsRevealed(true);
    setFeedback(undefined);
  }

  function handleRate(rating: ReviewRating) {
    if (!currentCard) {
      return;
    }

    const updated = recordReview(progress, currentCard.id, rating, todayIso);
    setProgress(updated);
    setFeedback(feedbackFor(rating));
    setIsRevealed(false);
  }

  return (
    <div className="app-shell">
      <DeckSelector totalCards={starterDeck.length} dueCount={dueCardIds.length} />

      <main className="study-stage">
        <ParliamentScene />
        <div className="recall-stack">
          <RecallCard
            card={currentCard}
            feedback={feedback}
            isRevealed={isRevealed}
            onReveal={handleReveal}
          />
          {currentCard && isRevealed ? <ReviewButtons onRate={handleRate} /> : null}
        </div>
      </main>

      <ProgressPanel
        currentCard={currentCard}
        dueCount={dueCardIds.length}
        isRevealed={isRevealed}
        progress={progress}
        totalCards={starterDeck.length}
      />
    </div>
  );
}
