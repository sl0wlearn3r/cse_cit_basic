// @vitest-environment node

import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("GitHub Pages workflow", () => {
  it("deploys pushes from the current implementation branch", () => {
    const workflow = readFileSync(
      ".github/workflows/publish-gh-pages.yml",
      "utf8",
    );

    expect(workflow).toContain("      - codex/mobile-adjustments");
    expect(workflow).toContain("      - codex/practice-mode-quality");
    expect(workflow).toContain("      - codex/third-implementation");
  });
});
