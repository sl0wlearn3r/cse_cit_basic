import type { ReviewRating } from "../types/review";

const ratingDelays: Record<ReviewRating, number> = {
  forgot: 0,
  hard: 1,
  remembered: 3,
  easy: 7,
};

const satisfactionDeltas: Record<ReviewRating, number> = {
  forgot: -8,
  hard: -2,
  remembered: 5,
  easy: 8,
};

export function addDaysToIsoDate(isoDate: string, days: number): string {
  const date = new Date(`${isoDate}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function getNextReviewDate(
  rating: ReviewRating,
  todayIso: string,
): string {
  return addDaysToIsoDate(todayIso, ratingDelays[rating]);
}

export function getSatisfactionDelta(rating: ReviewRating): number {
  return satisfactionDeltas[rating];
}

export function getTodayIsoDate(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
