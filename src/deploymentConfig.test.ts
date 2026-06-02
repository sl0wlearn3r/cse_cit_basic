// @vitest-environment node

import { describe, expect, it } from "vitest";

import viteConfig from "../vite.config";

describe("Vite deployment config", () => {
  it("serves production assets from the GitHub Pages project path", () => {
    expect(viteConfig).toMatchObject({
      base: "/cse_cit_basic/",
    });
  });
});
