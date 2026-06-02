type DeckSelectorProps = {
  totalCards: number;
  dueCount: number;
};

const deckItems = [
  { label: "Bellek Kartları", icon: "cards" },
  { label: "Karıştırılan Bilgiler", icon: "puzzle" },
  { label: "Güncel Kurallar", icon: "search" },
  { label: "Eski / Yeni Ayrımı", icon: "badge" },
];

function RailIcon({ name }: { name: string }) {
  return (
    <span className={`rail-icon rail-icon-${name}`} aria-hidden="true">
      <span />
    </span>
  );
}

export function DeckSelector({ totalCards, dueCount }: DeckSelectorProps) {
  const progressWidth = `${Math.max(8, ((totalCards - dueCount) / totalCards) * 100)}%`;

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
        {deckItems.map((item, index) => (
          <button
            className={`rail-button ${index === 0 ? "is-active" : ""}`}
            key={item.label}
            type="button"
          >
            <RailIcon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <button className="settings-button" type="button" aria-label="Ayarlar">
        <span aria-hidden="true">⚙</span>
      </button>
    </aside>
  );
}
