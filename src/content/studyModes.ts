import type { RecallCard } from "../types/content";

export type StudyModeId = "all" | "confusions" | "current" | "examNotes" | "oldNew";

export type StudyMode = {
  id: StudyModeId;
  label: string;
  icon: string;
};

export const studyModes: StudyMode[] = [
  { id: "all", label: "Tüm Kartlar", icon: "institution" },
  { id: "confusions", label: "Karıştırılan Bilgiler", icon: "puzzle" },
  { id: "current", label: "Güncel Kurallar", icon: "search" },
  { id: "examNotes", label: "Sınav Notları", icon: "cards" },
  { id: "oldNew", label: "Eski / Yeni Ayrımı", icon: "badge" },
];

export function matchesStudyMode(card: RecallCard, modeId: StudyModeId): boolean {
  switch (modeId) {
    case "all":
      return true;
    case "confusions":
      return Boolean(card.internal.confusionPair?.length);
    case "current":
      return card.internal.ruleStatus === "current" || card.tags.includes("güncel-kural");
    case "examNotes":
      return card.internal.ruleStatus === "exam-note";
    case "oldNew":
      return (
        card.internal.ruleStatus === "old-rule" ||
        card.tags.includes("eski-yeni") ||
        card.tags.includes("eski-kural")
      );
  }
}
