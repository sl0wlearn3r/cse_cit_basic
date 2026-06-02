import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { reviewStorageKey } from "../state/reviewStore";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    window.localStorage.removeItem(reviewStorageKey);
  });

  it("starts on the recall game with hidden answer state", () => {
    render(<App todayIso="2026-06-03" />);

    expect(screen.getByText("Bugünkü Tekrar")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cevabı Göster" })).toBeInTheDocument();
    expect(screen.queryByText("Unuttum")).not.toBeInTheDocument();
  });

  it("reveals answer details and records a review rating", () => {
    render(<App todayIso="2026-06-03" />);

    fireEvent.click(screen.getByRole("button", { name: "Cevabı Göster" }));

    expect(screen.getByText("Anımsama İpucu")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Çok Kolay" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Çok Kolay" }));

    const saved = window.localStorage.getItem(reviewStorageKey);
    expect(saved).toContain("\"lastRating\":\"easy\"");
  });
});
