import type { RecallCard } from "../types/content";

export type QuestionInteractionType =
  | "multipleChoice"
  | "fillBlank"
  | "placement"
  | "recall";

export type ChoiceOption = {
  id: string;
  label: string;
  isCorrect: boolean;
};

export type PlacementChoice = {
  id: string;
  label: string;
};

export type PlacementSlot = {
  id: string;
  label: string;
  correctChoiceId: string;
};

type BaseInteraction = {
  id: string;
  cardId: string;
  label: string;
  prompt: string;
  instruction: string;
  answer: string;
  explanation: string;
};

export type MultipleChoiceInteraction = BaseInteraction & {
  type: "multipleChoice";
  options: ChoiceOption[];
};

export type FillBlankInteraction = BaseInteraction & {
  type: "fillBlank";
  acceptedAnswers: string[];
  placeholder: string;
};

export type PlacementInteraction = BaseInteraction & {
  type: "placement";
  choices: PlacementChoice[];
  slots: PlacementSlot[];
};

export type RecallInteraction = BaseInteraction & {
  type: "recall";
};

export type QuestionInteraction =
  | MultipleChoiceInteraction
  | FillBlankInteraction
  | PlacementInteraction
  | RecallInteraction;

export type InteractionResult = {
  isCorrect: boolean;
  message: string;
  submittedAnswer: string;
};

const interactionOrder: QuestionInteractionType[] = [
  "multipleChoice",
  "fillBlank",
  "placement",
  "recall",
];

function compactAnswer(answer: string, maxLength = 96): string {
  const compacted = answer
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^(Hayır|Evet)\.\s*/u, "");

  if (compacted.length <= maxLength) {
    return compacted;
  }

  const sentenceBreak = compacted.indexOf(".", 28);
  if (sentenceBreak > 0 && sentenceBreak <= maxLength) {
    return compacted.slice(0, sentenceBreak + 1);
  }

  return `${compacted.slice(0, Math.max(12, maxLength - 3)).trim()}...`;
}

function normalizeForComparison(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function isFillBlankAnswerCorrect(
  submittedAnswer: string,
  acceptedAnswers: string[],
): boolean {
  const normalizedSubmitted = normalizeForComparison(submittedAnswer);

  if (!normalizedSubmitted) {
    return false;
  }

  return acceptedAnswers.some((answer) => {
    const normalizedAnswer = normalizeForComparison(answer);
    return normalizedSubmitted === normalizedAnswer || normalizedSubmitted.includes(normalizedAnswer);
  });
}

function nextDeckCards(
  card: RecallCard,
  deck: RecallCard[],
  count: number,
): RecallCard[] {
  const startIndex = Math.max(0, deck.findIndex((candidate) => candidate.id === card.id));
  const cards: RecallCard[] = [];

  for (let offset = 1; cards.length < count && offset < deck.length; offset += 1) {
    const candidate = deck[(startIndex + offset) % deck.length];
    if (candidate.id !== card.id) {
      cards.push(candidate);
    }
  }

  return cards;
}

function baseInteraction(
  card: RecallCard,
  type: QuestionInteractionType,
  label: string,
  instruction: string,
  prompt = card.customerFacing.prompt,
): BaseInteraction {
  return {
    id: `${card.id}:${type}`,
    cardId: card.id,
    label,
    prompt,
    instruction,
    answer: card.customerFacing.answer,
    explanation: card.customerFacing.explanation,
  };
}

function generatedPrompt(card: RecallCard): string {
  return `${card.topic} başlığında doğru bilgi hangisidir?`;
}

function buildMultipleChoice(card: RecallCard, deck: RecallCard[]): MultipleChoiceInteraction {
  const distractors = nextDeckCards(card, deck, 3).map((candidate, index) => ({
    id: `choice-${index + 1}`,
    label: compactAnswer(candidate.customerFacing.answer),
    isCorrect: false,
  }));

  return {
    ...baseInteraction(
      card,
      "multipleChoice",
      "Çoktan Seçmeli",
      "Doğru seçeneği işaretle.",
      generatedPrompt(card),
    ),
    type: "multipleChoice",
    options: [
      {
        id: "choice-correct",
        label: compactAnswer(card.customerFacing.answer),
        isCorrect: true,
      },
      ...distractors,
    ],
  };
}

function buildFillBlank(card: RecallCard): FillBlankInteraction {
  const target =
    card.internal.confusionPair?.[card.internal.confusionPair.length - 1] ??
    compactAnswer(card.customerFacing.answer);

  return {
    ...baseInteraction(
      card,
      "fillBlank",
      "Boşluk Doldur",
      "Anahtar ifadeyi yaz ve kontrol et.",
      `${card.topic} başlığındaki anahtar cevabı tamamla.`,
    ),
    type: "fillBlank",
    acceptedAnswers: [target, compactAnswer(card.customerFacing.answer)],
    placeholder: "Cevabı buraya yaz",
  };
}

function buildPlacement(card: RecallCard, deck: RecallCard[]): PlacementInteraction {
  const sourceCards = [card, ...nextDeckCards(card, deck, 2)];
  const pairs = sourceCards.map((sourceCard, index) => {
    const choiceId = `placement-choice-${index + 1}`;
    return {
      choice: {
        id: choiceId,
        label: compactAnswer(sourceCard.customerFacing.answer, 36),
      },
      slot: {
        id: `placement-slot-${index + 1}`,
        label: sourceCard.topic,
        correctChoiceId: choiceId,
      },
    };
  });

  return {
    ...baseInteraction(
      card,
      "placement",
      "Yerleştirme",
      "Bilgileri doğru başlıkların altına yerleştir.",
      "Başlıkları doğru bilgilerle eşleştir.",
    ),
    type: "placement",
    choices: [pairs[1].choice, pairs[2].choice, pairs[0].choice],
    slots: pairs.map((pair) => pair.slot),
  };
}

function buildRecall(card: RecallCard): RecallInteraction {
  return {
    ...baseInteraction(card, "recall", "Hatırlama", "Cevabı zihninde söyle, sonra göster."),
    type: "recall",
  };
}

export function buildQuestionInteraction(
  card: RecallCard,
  deck: RecallCard[],
  cardIndex: number,
  requestedType?: QuestionInteractionType,
): QuestionInteraction {
  const type = requestedType ?? interactionOrder[cardIndex % interactionOrder.length];

  switch (type) {
    case "multipleChoice":
      return buildMultipleChoice(card, deck);
    case "fillBlank":
      return buildFillBlank(card);
    case "placement":
      return buildPlacement(card, deck);
    case "recall":
      return buildRecall(card);
  }
}
