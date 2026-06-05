import type { ReviewProgress } from "../types/review";
import { MnemonicPanel } from "./MnemonicPanel";
import type { RecallCard } from "../types/content";

type ProgressPanelProps = {
  activeModeLabel: string;
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
  activeModeLabel,
  progress,
  dueCount,
  totalCards,
  currentCard,
  isRevealed,
}: ProgressPanelProps) {
  const satisfaction = Math.round(progress.satisfaction);
  const completed = Math.max(0, totalCards - dueCount);
  const safeTotalCards = Math.max(1, totalCards);

  return (
    <aside className="status-rail" aria-label="İlerleme">
      <div className="status-grid">
        <section className="stat-block">
          <span className="stat-label">Mod</span>
          <strong>{activeModeLabel}</strong>
          <div className="thin-meter">
            <span style={{ width: `${Math.min(100, ratingTotal(progress) * 8)}%` }} />
          </div>
        </section>

        <section className="stat-block" aria-label="Tekrar zamanı">
          <span className="stat-label">Tekrar Zamanı</span>
          <strong>{dueCount > 0 ? `${dueCount} kart` : "Tamamlandı"}</strong>
          <div className="progress-line">
            <span style={{ width: `${Math.max(10, (completed / safeTotalCards) * 100)}%` }} />
          </div>
        </section>

        <section className="stat-block">
          <span className="stat-label">Gün Seri</span>
          <strong>{progress.streak}</strong>
          <p>Bugünkü ilerleme korunur.</p>
        </section>

        <section className="stat-block">
          <span className="stat-label">Seçmen Memnuniyeti</span>
          <strong>{satisfaction}%</strong>
          <div className="progress-line">
            <span style={{ width: `${satisfaction}%` }} />
          </div>
        </section>

        <div className="mnemonic-shell">
          <MnemonicPanel card={currentCard} isRevealed={isRevealed} />
        </div>
      </div>
    </aside>
  );
}
