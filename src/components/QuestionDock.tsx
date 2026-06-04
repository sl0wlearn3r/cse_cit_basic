import { useEffect, useState, type FormEvent } from "react";
import {
  isFillBlankAnswerCorrect,
  type InteractionResult,
  type PlacementInteraction,
  type QuestionInteraction,
} from "../content/questionInteractions";
import type { ReviewRating } from "../types/review";
import { ReviewButtons } from "./ReviewButtons";

type QuestionDockProps = {
  question: QuestionInteraction;
  result?: InteractionResult;
  onAnswer: (result: InteractionResult) => void;
  onRate: (rating: ReviewRating) => void;
};

function resultForChoice(label: string, isCorrect: boolean): InteractionResult {
  return {
    isCorrect,
    message: isCorrect ? "Doğru cevap." : "Tekrar bakalım.",
    submittedAnswer: label,
  };
}

function PlacementControls({
  question,
  onAnswer,
}: {
  question: PlacementInteraction;
  onAnswer: (result: InteractionResult) => void;
}) {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string>();
  const [placements, setPlacements] = useState<Record<string, string>>({});

  useEffect(() => {
    setSelectedChoiceId(undefined);
    setPlacements({});
  }, [question.id]);

  const allSlotsFilled = question.slots.every((slot) => placements[slot.id]);

  function placeInSlot(slotId: string) {
    if (!selectedChoiceId) {
      return;
    }

    setPlacements((current) => {
      const withoutDuplicate = Object.fromEntries(
        Object.entries(current).filter(([, choiceId]) => choiceId !== selectedChoiceId),
      );
      return {
        ...withoutDuplicate,
        [slotId]: selectedChoiceId,
      };
    });
    setSelectedChoiceId(undefined);
  }

  function checkPlacement() {
    const isCorrect = question.slots.every(
      (slot) => placements[slot.id] === slot.correctChoiceId,
    );
    onAnswer({
      isCorrect,
      message: isCorrect ? "Doğru yerleştirme." : "Yerleştirmeyi gözden geçir.",
      submittedAnswer: question.slots
        .map((slot) => `${slot.label}: ${placements[slot.id] ?? "-"}`)
        .join(" | "),
    });
  }

  return (
    <div className="placement-workspace">
      <div className="placement-choices" aria-label="Yerleştirilecek bilgiler">
        {question.choices.map((choice) => (
          <button
            aria-pressed={choice.id === selectedChoiceId}
            className={`placement-choice ${choice.id === selectedChoiceId ? "is-selected" : ""}`}
            key={choice.id}
            type="button"
            onClick={() => setSelectedChoiceId(choice.id)}
          >
            {choice.label}
          </button>
        ))}
      </div>
      <div className="placement-slots">
        {question.slots.map((slot) => {
          const placedChoice = question.choices.find(
            (choice) => choice.id === placements[slot.id],
          );
          return (
            <button
              className="placement-slot"
              key={slot.id}
              type="button"
              onClick={() => placeInSlot(slot.id)}
            >
              <span>{slot.label}</span>
              <strong>{placedChoice?.label ?? "Bilgi seç"}</strong>
            </button>
          );
        })}
      </div>
      <button
        className="question-action check-action"
        disabled={!allSlotsFilled}
        type="button"
        onClick={checkPlacement}
      >
        Kontrol Et
      </button>
    </div>
  );
}

export function QuestionDock({ question, result, onAnswer, onRate }: QuestionDockProps) {
  const [fillAnswer, setFillAnswer] = useState("");

  useEffect(() => {
    setFillAnswer("");
  }, [question.id]);

  if (result) {
    return <ReviewButtons onRate={onRate} />;
  }

  if (question.type === "multipleChoice") {
    return (
      <div
        className="review-dock question-dock question-dock-choice"
        aria-label="Çoktan seçmeli seçenekleri"
      >
        {question.options.map((option) => (
          <button
            className="question-action choice-action"
            key={option.id}
            type="button"
            onClick={() => onAnswer(resultForChoice(option.label, option.isCorrect))}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }

  if (question.type === "fillBlank") {
    const fillQuestion = question;

    function submitFillBlank(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const isCorrect = isFillBlankAnswerCorrect(fillAnswer, fillQuestion.acceptedAnswers);
      onAnswer({
        isCorrect,
        message: isCorrect ? "Doğru cevap." : "Tekrar bakalım.",
        submittedAnswer: fillAnswer,
      });
    }

    return (
      <form
        className="review-dock question-dock question-dock-fill"
        aria-label="Boşluk doldurma"
        onSubmit={submitFillBlank}
      >
        <label className="fill-input-wrap">
          <span>Boşluk yanıtı</span>
          <input
            aria-label="Boşluk yanıtı"
            value={fillAnswer}
            placeholder={fillQuestion.placeholder}
            onChange={(event) => setFillAnswer(event.target.value)}
          />
        </label>
        <button className="question-action check-action" disabled={!fillAnswer.trim()} type="submit">
          Kontrol Et
        </button>
      </form>
    );
  }

  if (question.type === "placement") {
    return (
      <div
        className="review-dock question-dock question-dock-placement"
        aria-label="Yerleştirme alanı"
      >
        <PlacementControls question={question} onAnswer={onAnswer} />
      </div>
    );
  }

  return (
    <div className="review-dock question-dock question-dock-recall">
      <button
        className="question-action reveal-action"
        type="button"
        onClick={() =>
          onAnswer({
            isCorrect: true,
            message: "Yanıt gösterildi.",
            submittedAnswer: "Cevabı göster",
          })
        }
      >
        Cevabı Göster
      </button>
    </div>
  );
}
