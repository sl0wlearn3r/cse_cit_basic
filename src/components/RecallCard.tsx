import type { RecallCard as RecallCardType } from "../types/content";

type RecallCardProps = {
  card?: RecallCardType;
  isRevealed: boolean;
  feedback?: string;
  onReveal: () => void;
};

export function RecallCard({
  card,
  isRevealed,
  feedback,
  onReveal,
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

  return (
    <section className={`recall-card ${isRevealed ? "is-revealed" : ""}`}>
      <div className="card-ribbon" aria-hidden="true">★</div>
      <div className="card-header">
        <span className="question-chip">?</span>
        <div>
          <p>Bugünkü Tekrar</p>
          <h1>{card.topic}</h1>
        </div>
      </div>

      <div className="prompt-panel">
        <p>{card.customerFacing.prompt}</p>
      </div>

      <div className={`answer-panel ${isRevealed ? "is-visible" : ""}`}>
        {isRevealed ? (
          <>
            <strong>{card.customerFacing.answer}</strong>
            <p>{card.customerFacing.explanation}</p>
          </>
        ) : (
          <span>Yanıt gizli</span>
        )}
      </div>

      {isRevealed ? (
        <p className="feedback-line" role="status">
          {feedback ?? "Hatırlama düzeyini seç."}
        </p>
      ) : (
        <button className="reveal-button" type="button" onClick={onReveal}>
          Cevabı Göster
        </button>
      )}
    </section>
  );
}
