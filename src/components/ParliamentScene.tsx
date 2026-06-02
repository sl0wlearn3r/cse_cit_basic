const seatRows = [
  { count: 15, className: "row-back" },
  { count: 13, className: "row-mid" },
  { count: 11, className: "row-front" },
];

export function ParliamentScene() {
  return (
    <div className="parliament-scene" aria-hidden="true">
      <div className="upper-gallery">
        <span className="gold-rail" />
        <span className="wall-screen" />
        <span className="pillar pillar-left" />
        <span className="pillar pillar-right" />
        <span className="door door-left" />
        <span className="door door-right" />
      </div>
      <div className="speaker-desk">
        <span />
      </div>
      <div className="seat-bowl">
        {seatRows.map((row) => (
          <div className={`seat-row ${row.className}`} key={row.className}>
            {Array.from({ length: row.count }, (_, index) => (
              <span className="seat" key={index} />
            ))}
          </div>
        ))}
      </div>
      <div className="official-character">
        <span className="hair" />
        <span className="face" />
        <span className="neck" />
        <span className="torso" />
        <span className="tie" />
        <span className="tablet" />
        <span className="leg leg-left" />
        <span className="leg leg-right" />
      </div>
      <div className="podium">
        <span className="mic" />
      </div>
    </div>
  );
}
