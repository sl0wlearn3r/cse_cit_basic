import { describe, expect, it } from "vitest";
import { starterDeck } from "./starterDeck";
import {
  buildQuestionInteraction,
  isFillBlankAnswerCorrect,
  type QuestionInteraction,
} from "./questionInteractions";

function interactionAt(index: number): QuestionInteraction {
  return buildQuestionInteraction(starterDeck[index], starterDeck, index);
}

describe("questionInteractions", () => {
  it("preserves the 143-card deck while generating varied question styles", () => {
    expect(starterDeck).toHaveLength(143);

    expect(interactionAt(0).type).toBe("multipleChoice");
    expect(interactionAt(1).type).toBe("fillBlank");
    expect(interactionAt(2).type).toBe("placement");
    expect(interactionAt(3).type).toBe("recall");
  });

  it("builds multiple-choice questions with one correct option", () => {
    const interaction = interactionAt(0);

    expect(interaction.type).toBe("multipleChoice");
    if (interaction.type !== "multipleChoice") {
      throw new Error("Expected a multiple-choice interaction");
    }

    expect(interaction.options).toHaveLength(4);
    expect(interaction.options.filter((option) => option.isCorrect)).toHaveLength(1);
    expect(interaction.options.some((option) => option.label.includes("Gensoru"))).toBe(
      true,
    );
  });

  it("checks fill-in-the-blank answers with normalized Turkish text", () => {
    const interaction = interactionAt(1);

    expect(interaction.type).toBe("fillBlank");
    if (interaction.type !== "fillBlank") {
      throw new Error("Expected a fill-blank interaction");
    }

    expect(
      isFillBlankAnswerCorrect(
        "Cumhurbaşkanı yardımcıları ve bakanlar",
        interaction.acceptedAnswers,
      ),
    ).toBe(true);
    expect(isFillBlankAnswerCorrect("Cumhurbaşkanı", interaction.acceptedAnswers)).toBe(
      false,
    );
  });

  it("creates placement questions with matching slots and choices", () => {
    const interaction = interactionAt(2);

    expect(interaction.type).toBe("placement");
    if (interaction.type !== "placement") {
      throw new Error("Expected a placement interaction");
    }

    expect(interaction.slots).toHaveLength(3);
    expect(interaction.choices).toHaveLength(3);
    expect(interaction.slots.map((slot) => slot.correctChoiceId).sort()).toEqual(
      interaction.choices.map((choice) => choice.id).sort(),
    );
  });
});
