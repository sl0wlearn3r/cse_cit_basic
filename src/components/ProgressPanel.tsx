import type { ReviewProgress } from "../types/review";
import { MnemonicPanel } from "./MnemonicPanel";
import type { RecallCard } from "../types/content";

type ProgressPanelProps = {
  progress: ReviewProgress;
  dueCount: number;
  totalCards: number;
  currentCard?: RecallCard;
  isRevealed: boolean;
};

function ratingTotal(progress: ReviewProgress): number {
  const counts = progress.ratingCounts;
  if (!counts) {
    return 0;
  }

  return counts.forgot + counts.hard + counts.remembered + counts.easy;
}

export function ProgressPanel({
  progress,
  dueCount,
  totalCards,
  currentCard,
  isRevealed,
}: ProgressPanelProps) {
  const satisfaction = Math.round(progress.satisfaction);
  const completed = Math.max(0, totalCards - dueCount);

  return (
    <aside className="status-rail" aria-label="İlerleme">
      <section className="stat-block trophy-block">
        <div className="stat-icon trophy" aria-hidden="true">🏆</div>
        <div className="thin-meter">
          <span style={{ width: `${Math.min(100, ratingTotal(progress) * 8)}%` }} />
        </div>
      </section>

      <section className="clock-block" aria-label="Tekrar zamanı">
        <div className="clock-face" aria-hidden="true">
          <span className="clock-hand hour" />
          <span className="clock-hand minute" />
        </div>
        <div className="progress-line">
          <span style={{ width: `${Math.max(10, (completed / totalCards) * 100)}%` }} />
        </div>
        <h2>Tekrar Zamanı</h2>
        <p>{dueCount > 0 ? `${dueCount} kart sırada` : "Bugünlük tamamlandı"}</p>
      </section>

      <MnemonicPanel card={currentCard} isRevealed={isRevealed} />

      <section className="streak-block">
        <div className="streak-head">
          <span className="stat-icon flame" aria-hidden="true">●</span>
          <strong>{progress.streak}</strong>
          <span>gün seri</span>
        </div>
        <div className="streak-bars" aria-hidden="true">
          {Array.from({ length: 7 }, (_, index) => (
            <span
              className={index < Math.min(7, progress.streak) ? "is-lit" : ""}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className="satisfaction-block">
        <div className="gauge" aria-hidden="true">
          <span style={{ transform: `rotate(${satisfaction * 1.8 - 90}deg)` }} />
        </div>
        <h2>Seçmen Memnuniyeti</h2>
        <div className="progress-line">
          <span style={{ width: `${satisfaction}%` }} />
        </div>
        <strong>{satisfaction}%</strong>
      </section>
    </aside>
  );
}
