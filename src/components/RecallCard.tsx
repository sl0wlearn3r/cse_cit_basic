import type { RecallCard as RecallCardType } from "../types/content";
import type {
  InteractionResult,
  QuestionInteraction,
} from "../content/questionInteractions";

type RecallCardProps = {
  card?: RecallCardType;
  question?: QuestionInteraction;
  result?: InteractionResult;
  feedback?: string;
};

export function RecallCard({
  card,
  question,
  result,
  feedback,
}: RecallCardProps) {
  if (!card) {
    return (
      <section className="recall-card completed-card">
        <div className="card-ribbon" aria-hidden="true">★</div>
        <div className="card-header">
          <span className="question-chip">✓</span>
          <div>
            <p>Bugünkü Tekrar</p>
            <h1>Bugünlük tamamlandı</h1>
          </div>
        </div>
        <div className="prompt-panel">
          <p>Meclis ajandası bugün için temiz.</p>
        </div>
        <div className="answer-panel is-visible">
          <strong>Tekrar Zamanı</strong>
          <p>Yeni kartlar zamanı gelince tekrar sıraya alınır.</p>
        </div>
      </section>
    );
  }

  const isRevealed = Boolean(result);
  const questionClass = question ? `question-${question.type}` : "";

  return (
    <section className={`recall-card ${questionClass} ${isRevealed ? "is-revealed" : ""}`}>
      <div className="card-ribbon" aria-hidden="true">★</div>
      <div className="card-header">
        <span className="question-chip">?</span>
        <div>
          <p>Bugünkü Tekrar</p>
          {question ? <span className="question-type-pill">{question.label}</span> : null}
          <h1>{card.topic}</h1>
        </div>
      </div>

      <div className="prompt-panel">
        <p>{question?.prompt ?? card.customerFacing.prompt}</p>
      </div>

      <div className={`answer-panel ${isRevealed ? "is-visible" : ""}`}>
        {result ? (
          <>
            <strong>{result.message}</strong>
            <p className="answer-summary">{card.customerFacing.answer}</p>
            <p>{card.customerFacing.explanation}</p>
          </>
        ) : (
          <span>{question?.instruction ?? "Yanıt gizli"}</span>
        )}
      </div>

      {isRevealed ? (
        <p className="feedback-line" role="status">
          {feedback ?? "Hatırlama düzeyini seç."}
        </p>
      ) : null}
    </section>
  );
}
