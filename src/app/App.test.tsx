import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { reviewStorageKey } from "../state/reviewStore";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    window.localStorage.removeItem(reviewStorageKey);
  });

  it("starts in strict recall mode with the answer hidden", () => {
    render(<App todayIso="2026-06-03" />);

    expect(screen.getByText("Bugünkü Tekrar")).toBeInTheDocument();
    expect(screen.getByText("Hatırlama")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cevabı Göster" })).toBeInTheDocument();
    expect(screen.queryByText("Çoktan Seçmeli")).not.toBeInTheDocument();
    expect(screen.queryByText("Unuttum")).not.toBeInTheDocument();
  });

  it("reveals answer details from strict recall and records a review rating", () => {
    render(<App todayIso="2026-06-03" />);

    fireEvent.click(screen.getByRole("button", { name: "Cevabı Göster" }));

    expect(screen.getByText("Anımsama İpucu")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Çok Kolay" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Çok Kolay" }));

    const saved = window.localStorage.getItem(reviewStorageKey);
    expect(saved).toContain("\"lastRating\":\"easy\"");
  });

  it("uses mixed practice only after the learner opts in", () => {
    render(<App todayIso="2026-06-03" />);

    fireEvent.click(screen.getByRole("button", { name: "Karma Pratik" }));

    expect(screen.getByText("Çoktan Seçmeli")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Gensoru/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Cevabı Göster" })).not.toBeInTheDocument();
  });

  it("filters the due queue from the left rail mode buttons", () => {
    render(<App todayIso="2026-06-03" />);

    fireEvent.click(screen.getByRole("button", { name: "Eski / Yeni Ayrımı" }));

    expect(
      screen.getByRole("heading", { name: "KHK ve kararname ayrımı" }),
    ).toBeInTheDocument();
  });

  it("opens settings and resets stored review progress", () => {
    render(<App todayIso="2026-06-03" />);

    fireEvent.click(screen.getByRole("button", { name: "Cevabı Göster" }));
    fireEvent.click(screen.getByRole("button", { name: "Çok Kolay" }));
    expect(window.localStorage.getItem(reviewStorageKey)).toContain(
      "\"lastRating\":\"easy\"",
    );

    fireEvent.click(screen.getByRole("button", { name: "Ayarlar" }));
    fireEvent.click(screen.getByRole("button", { name: "İlerlemeyi Sıfırla" }));

    expect(window.localStorage.getItem(reviewStorageKey)).not.toContain(
      "\"lastRating\":\"easy\"",
    );
  });
});
