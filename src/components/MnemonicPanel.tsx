import type { RecallCard } from "../types/content";

type MnemonicPanelProps = {
  card?: RecallCard;
  isRevealed: boolean;
};

export function MnemonicPanel({ card, isRevealed }: MnemonicPanelProps) {
  return (
    <section className={`mnemonic-panel ${isRevealed ? "is-awake" : ""}`}>
      {isRevealed && card ? (
        <div className="mnemonic-copy">
          <h2>Anımsama İpucu</h2>
          <p>{card.customerFacing.mnemonic}</p>
        </div>
      ) : (
        <div className="mnemonic-copy">
          <h2>Bellek Kartları</h2>
          <p>Kart açılınca ipucu canlanır.</p>
        </div>
      )}
    </section>
  );
}
