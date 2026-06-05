import { useEffect, useMemo, useState } from "react";
import { DeckSelector } from "../components/DeckSelector";
import { ProgressPanel } from "../components/ProgressPanel";
import { QuestionDock } from "../components/QuestionDock";
import { RecallCard } from "../components/RecallCard";
import {
  buildQuestionInteraction,
  type InteractionResult,
  type QuestionInteraction,
} from "../content/questionInteractions";
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

type PracticeMode = "recall" | "mixed";

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

function buildRecallInteraction(card: (typeof starterDeck)[number]): QuestionInteraction {
  return {
    id: `${card.id}:strict-recall`,
    cardId: card.id,
    label: "Hatırlama",
    prompt: card.customerFacing.prompt,
    instruction: "Cevabı zihninde söyle, sonra göster.",
    answer: card.customerFacing.answer,
    explanation: card.customerFacing.explanation,
    type: "recall",
  };
}

export default function App({ todayIso = getTodayIsoDate() }: AppProps) {
  const allCardIds = useMemo(() => starterDeck.map((card) => card.id), []);
  const [activeMode, setActiveMode] = useState<StudyModeId>("all");
  const [practiceMode, setPracticeMode] = useState<PracticeMode>("recall");
  const [progress, setProgress] = useState<ReviewProgress>(() =>
    loadProgress(allCardIds, todayIso),
  );
  const [interactionResult, setInteractionResult] = useState<InteractionResult>();
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
  const currentCardIndex = currentCard
    ? starterDeck.findIndex((card) => card.id === currentCard.id)
    : -1;
  const currentQuestion =
    currentCard && currentCardIndex >= 0
      ? practiceMode === "mixed"
        ? buildQuestionInteraction(currentCard, starterDeck, currentCardIndex)
        : buildRecallInteraction(currentCard)
      : undefined;
  const isRevealed = Boolean(interactionResult);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  useEffect(() => {
    setInteractionResult(undefined);
    setFeedback(undefined);
  }, [currentCard?.id]);

  function handleAnswer(result: InteractionResult) {
    setInteractionResult(result);
    setFeedback(undefined);
  }

  function handleRate(rating: ReviewRating) {
    if (!currentCard) {
      return;
    }

    const updated = recordReview(progress, currentCard.id, rating, todayIso);
    setProgress(updated);
    setFeedback(feedbackFor(rating));
    setInteractionResult(undefined);
  }

  function handleModeChange(modeId: StudyModeId) {
    setActiveMode(modeId);
    setInteractionResult(undefined);
    setFeedback(undefined);
  }

  function handlePracticeModeChange(mode: PracticeMode) {
    setPracticeMode(mode);
    setInteractionResult(undefined);
    setFeedback(undefined);
  }

  function handleResetProgress() {
    setProgress(createInitialProgress(allCardIds, todayIso));
    setInteractionResult(undefined);
    setFeedback(undefined);
    setIsSettingsOpen(false);
  }

  const activeModeLabel =
    studyModes.find((mode) => mode.id === activeMode)?.label ?? "Tüm Kartlar";
  const completedCount = Math.max(0, filteredCards.length - dueCardIds.length);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-block">
          <span>KPSS Vatandaşlık</span>
          <h1>Hafıza Meclisi</h1>
        </div>
        <div className="session-ledger" aria-label="Günlük çalışma özeti">
          <span>{activeModeLabel}</span>
          <strong>
            {completedCount}/{filteredCards.length}
          </strong>
          <span>kart</span>
        </div>
      </header>

      <DeckSelector
        activeMode={activeMode}
        totalCards={filteredCards.length}
        dueCount={dueCardIds.length}
        onModeChange={handleModeChange}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <section className="practice-switch" aria-label="Pratik modu">
        <button
          aria-pressed={practiceMode === "recall"}
          className={practiceMode === "recall" ? "is-active" : ""}
          type="button"
          onClick={() => handlePracticeModeChange("recall")}
        >
          Sade Hatırlama
        </button>
        <button
          aria-pressed={practiceMode === "mixed"}
          className={practiceMode === "mixed" ? "is-active" : ""}
          type="button"
          onClick={() => handlePracticeModeChange("mixed")}
        >
          Karma Pratik
        </button>
      </section>

      <main className="study-stage">
        <div className="recall-stack">
          <RecallCard
            card={currentCard}
            feedback={feedback}
            question={currentQuestion}
            result={interactionResult}
          />
          {currentCard && currentQuestion ? (
            <QuestionDock
              question={currentQuestion}
              result={interactionResult}
              onAnswer={handleAnswer}
              onRate={handleRate}
            />
          ) : null}
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
