import { describe, expect, it } from "vitest";
import { getNextReviewDate, getSatisfactionDelta } from "./scheduler";

describe("scheduler", () => {
  it("schedules forgotten cards for another review today", () => {
    expect(getNextReviewDate("forgot", "2026-06-03")).toBe("2026-06-03");
  });

  it("schedules hard cards for tomorrow", () => {
    expect(getNextReviewDate("hard", "2026-06-03")).toBe("2026-06-04");
  });

  it("schedules remembered cards three days later", () => {
    expect(getNextReviewDate("remembered", "2026-06-03")).toBe("2026-06-06");
  });

  it("schedules easy cards seven days later", () => {
    expect(getNextReviewDate("easy", "2026-06-03")).toBe("2026-06-10");
  });

  it("maps review ratings to voter satisfaction deltas", () => {
    expect(getSatisfactionDelta("forgot")).toBe(-8);
    expect(getSatisfactionDelta("hard")).toBe(-2);
    expect(getSatisfactionDelta("remembered")).toBe(5);
    expect(getSatisfactionDelta("easy")).toBe(8);
  });
});
