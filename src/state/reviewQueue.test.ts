import { describe, expect, it } from "vitest";
import { advanceSessionQueueAfterReview } from "./reviewQueue";

describe("reviewQueue", () => {
  it("requeues a still-due forgotten card after a few other due cards", () => {
    const nextQueue = advanceSessionQueueAfterReview(
      ["card-1", "card-2", "card-3", "card-4", "card-5"],
      "card-1",
      ["card-1", "card-2", "card-3", "card-4", "card-5"],
    );

    expect(nextQueue).toEqual(["card-2", "card-3", "card-4", "card-1", "card-5"]);
  });

  it("removes a reviewed card when it is no longer due today", () => {
    const nextQueue = advanceSessionQueueAfterReview(
      ["card-1", "card-2", "card-3"],
      "card-1",
      ["card-2", "card-3"],
    );

    expect(nextQueue).toEqual(["card-2", "card-3"]);
  });
});
