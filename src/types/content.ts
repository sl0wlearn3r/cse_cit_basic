export type RuleStatus = "current" | "old-rule" | "exam-note";

export type SourceType = "constitution" | "law" | "curriculum" | "manual";

export type RecallCard = {
  id: string;
  deckId: string;
  topic: string;
  tags: string[];
  customerFacing: {
    prompt: string;
    answer: string;
    explanation: string;
    mnemonic: string;
  };
  internal: {
    confusionPair?: string[];
    ruleStatus: RuleStatus;
    sourceType: SourceType;
    needsReviewBeforePublish: boolean;
  };
};
