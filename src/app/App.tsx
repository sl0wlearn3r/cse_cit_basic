import { useEffect, useMemo, useState } from "react";
import { DeckSelector } from "../components/DeckSelector";
import { ParliamentScene } from "../components/ParliamentScene";
import { ProgressPanel } from "../components/ProgressPanel";
import { RecallCard } from "../components/RecallCard";
import { ReviewButtons } from "../components/ReviewButtons";
import { starterDeck } from "../content/starterDeck";
import {
  matchesStudyMode,
  studyModes,
  type StudyModeId,
} from "../content/studyModes";
import {
  createInitialProgress,
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
  const allCardIds = useMemo(() => starterDeck.map((card) => card.id), []);
  const [activeMode, setActiveMode] = useState<StudyModeId>("all");
  const [progress, setProgress] = useState<ReviewProgress>(() =>
    loadProgress(allCardIds, todayIso),
  );
  const [isRevealed, setIsRevealed] = useState(false);
  const [feedback, setFeedback] = useState<string>();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const filteredCards = useMemo(
    () => starterDeck.filter((card) => matchesStudyMode(card, activeMode)),
    [activeMode],
  );
  const cardIds = useMemo(() => filteredCards.map((card) => card.id), [filteredCards]);

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

  function handleModeChange(modeId: StudyModeId) {
    setActiveMode(modeId);
    setIsRevealed(false);
    setFeedback(undefined);
  }

  function handleResetProgress() {
    setProgress(createInitialProgress(allCardIds, todayIso));
    setIsRevealed(false);
    setFeedback(undefined);
    setIsSettingsOpen(false);
  }

  const activeModeLabel =
    studyModes.find((mode) => mode.id === activeMode)?.label ?? "Tüm Kartlar";

  return (
    <div className="app-shell">
      <DeckSelector
        activeMode={activeMode}
        totalCards={filteredCards.length}
        dueCount={dueCardIds.length}
        onModeChange={handleModeChange}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

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
        activeModeLabel={activeModeLabel}
        currentCard={currentCard}
        dueCount={dueCardIds.length}
        isRevealed={isRevealed}
        progress={progress}
        totalCards={filteredCards.length}
      />

      {isSettingsOpen ? (
        <div className="settings-backdrop">
          <section
            aria-labelledby="settings-title"
            aria-modal="true"
            className="settings-dialog"
            role="dialog"
          >
            <h2 id="settings-title">Ayarlar</h2>
            <p>
              Tekrar geçmişini temizleyip kartları bugünün sırasına geri al.
            </p>
            <div className="settings-actions">
              <button type="button" onClick={handleResetProgress}>
                İlerlemeyi Sıfırla
              </button>
              <button type="button" onClick={() => setIsSettingsOpen(false)}>
                Kapat
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
