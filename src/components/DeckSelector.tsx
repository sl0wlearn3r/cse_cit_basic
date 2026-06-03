import { studyModes, type StudyModeId } from "../content/studyModes";

type DeckSelectorProps = {
  activeMode: StudyModeId;
  totalCards: number;
  dueCount: number;
  onModeChange: (modeId: StudyModeId) => void;
  onOpenSettings: () => void;
};

function RailIcon({ name }: { name: string }) {
  return (
    <span className={`rail-icon rail-icon-${name}`} aria-hidden="true">
      <span />
    </span>
  );
}

export function DeckSelector({
  activeMode,
  totalCards,
  dueCount,
  onModeChange,
  onOpenSettings,
}: DeckSelectorProps) {
  const safeTotalCards = Math.max(1, totalCards);
  const progressWidth = `${Math.max(8, ((totalCards - dueCount) / safeTotalCards) * 100)}%`;

  return (
    <aside className="deck-rail" aria-label="Kart seçenekleri">
      <div className="profile-token" aria-hidden="true">
        <span className="profile-head" />
        <span className="profile-body" />
      </div>
      <div className="mini-meter" aria-label={`${totalCards - dueCount} kart ilerleme`}>
        <span style={{ width: progressWidth }} />
      </div>
      <nav className="deck-nav">
        {studyModes.map((item) => (
          <button
            aria-pressed={item.id === activeMode}
            className={`rail-button ${item.id === activeMode ? "is-active" : ""}`}
            key={item.label}
            type="button"
            onClick={() => onModeChange(item.id)}
          >
            <RailIcon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <button
        className="settings-button"
        type="button"
        aria-label="Ayarlar"
        onClick={onOpenSettings}
      >
        <span aria-hidden="true">⚙</span>
      </button>
    </aside>
  );
}
