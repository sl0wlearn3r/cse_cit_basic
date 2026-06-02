import { describe, expect, it } from "vitest";
import type { ReviewProgress } from "../types/review";
import {
  createInitialProgress,
  getDueCards,
  recordReview,
  reviveProgress,
} from "./reviewStore";

const cardIds = ["gensoru", "kanun-hukmunde-kararname", "yurutme"];

describe("reviewStore", () => {
  it("creates fresh progress with all cards due today", () => {
    const progress = createInitialProgress(cardIds, "2026-06-03");

    expect(progress.cardProgress.gensoru.nextReviewDate).toBe("2026-06-03");
    expect(progress.satisfaction).toBe(62);
    expect(progress.streak).toBe(0);
  });

  it("returns only cards due on or before the selected day", () => {
    const progress: ReviewProgress = {
      cardProgress: {
        gensoru: { nextReviewDate: "2026-06-03", reviews: 0 },
        "kanun-hukmunde-kararname": {
          nextReviewDate: "2026-06-04",
          reviews: 1,
        },
        yurutme: { nextReviewDate: "2026-06-02", reviews: 2 },
      },
      satisfaction: 70,
      streak: 1,
      lastReviewedDate: "2026-06-02",
      completedDates: [],
    };

    expect(getDueCards(cardIds, progress, "2026-06-03")).toEqual([
      "gensoru",
      "yurutme",
    ]);
  });

  it("records review scheduling, rating counts, streak, and satisfaction", () => {
    const progress = createInitialProgress(cardIds, "2026-06-03");
    const updated = recordReview(progress, "gensoru", "easy", "2026-06-03");

    expect(updated.cardProgress.gensoru.nextReviewDate).toBe("2026-06-10");
    expect(updated.cardProgress.gensoru.reviews).toBe(1);
    expect(updated.cardProgress.gensoru.lastRating).toBe("easy");
    expect(updated.satisfaction).toBe(70);
    expect(updated.streak).toBe(1);
    expect(updated.lastReviewedDate).toBe("2026-06-03");
  });

  it("revives partial localStorage data without losing new deck cards", () => {
    const revived = reviveProgress(
      {
        cardProgress: {
          gensoru: { nextReviewDate: "2026-06-04", reviews: 1 },
        },
        satisfaction: 90,
      },
      cardIds,
      "2026-06-03",
    );

    expect(revived.cardProgress.gensoru.nextReviewDate).toBe("2026-06-04");
    expect(revived.cardProgress.yurutme.nextReviewDate).toBe("2026-06-03");
    expect(revived.satisfaction).toBe(90);
  });
});
