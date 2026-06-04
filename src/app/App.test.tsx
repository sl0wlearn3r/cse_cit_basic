import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { reviewStorageKey } from "../state/reviewStore";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    window.localStorage.removeItem(reviewStorageKey);
  });

  it("starts on an interactive multiple-choice card", () => {
    render(<App todayIso="2026-06-03" />);

    expect(screen.getByText("Bugünkü Tekrar")).toBeInTheDocument();
    expect(screen.getByText("Çoktan Seçmeli")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Gensoru/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Cevabı Göster" })).not.toBeInTheDocument();
    expect(screen.queryByText("Unuttum")).not.toBeInTheDocument();
  });

  it("reveals answer details from a choice and records a review rating", () => {
    render(<App todayIso="2026-06-03" />);

    fireEvent.click(screen.getByRole("button", { name: /Gensoru/ }));

    expect(screen.getByText("Anımsama İpucu")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Çok Kolay" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Çok Kolay" }));

    const saved = window.localStorage.getItem(reviewStorageKey);
    expect(saved).toContain("\"lastRating\":\"easy\"");
  });

  it("moves to a fill-in-the-blank card after rating the first card", () => {
    render(<App todayIso="2026-06-03" />);

    fireEvent.click(screen.getByRole("button", { name: /Gensoru/ }));
    fireEvent.click(screen.getByRole("button", { name: "Çok Kolay" }));

    expect(screen.getByText("Boşluk Doldur")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Boşluk yanıtı"), {
      target: { value: "Cumhurbaşkanı yardımcıları ve bakanlar" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Kontrol Et" }));

    expect(screen.getByText("Doğru cevap.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Hatırladım" })).toBeInTheDocument();
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

    fireEvent.click(screen.getByRole("button", { name: /Gensoru/ }));
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
