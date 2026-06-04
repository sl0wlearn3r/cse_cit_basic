import { describe, expect, it } from "vitest";
import { starterDeck } from "./starterDeck";

describe("starterDeck", () => {
  it("contains a large set of focused recall cards", () => {
    expect(starterDeck).toHaveLength(143);
    expect(new Set(starterDeck.map((card) => card.id)).size).toBe(
      starterDeck.length,
    );
  });

  it("marks every card for curriculum review before publishing", () => {
    expect(
      starterDeck.every((card) => card.internal.needsReviewBeforePublish),
    ).toBe(true);
  });

  it("keeps customer-facing Turkish recall fields populated", () => {
    for (const card of starterDeck) {
      expect(card.customerFacing.prompt.length).toBeGreaterThan(20);
      expect(card.customerFacing.answer.length).toBeGreaterThan(10);
      expect(card.customerFacing.explanation.length).toBeGreaterThan(20);
      expect(card.customerFacing.mnemonic.length).toBeGreaterThan(20);
    }
  });
});
