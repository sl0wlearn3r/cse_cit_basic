import { addDaysToIsoDate, getNextReviewDate, getSatisfactionDelta } from "./scheduler";
import type {
  CardReviewProgress,
  RatingCounts,
  ReviewProgress,
  ReviewRating,
} from "../types/review";

export const reviewStorageKey = "kpss-hafiza-meclisi-progress-v1";

const initialSatisfaction = 62;

const emptyRatingCounts: RatingCounts = {
  forgot: 0,
  hard: 0,
  remembered: 0,
  easy: 0,
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeRatingCounts(raw: unknown): RatingCounts {
  if (!isRecord(raw)) {
    return { ...emptyRatingCounts };
  }

  return {
    forgot: Number(raw.forgot ?? 0),
    hard: Number(raw.hard ?? 0),
    remembered: Number(raw.remembered ?? 0),
    easy: Number(raw.easy ?? 0),
  };
}

function normalizeCardProgress(
  raw: unknown,
  todayIso: string,
): CardReviewProgress {
  if (!isRecord(raw)) {
    return { nextReviewDate: todayIso, reviews: 0 };
  }

  return {
    nextReviewDate:
      typeof raw.nextReviewDate === "string" ? raw.nextReviewDate : todayIso,
    reviews: typeof raw.reviews === "number" ? raw.reviews : 0,
    lastRating:
      raw.lastRating === "forgot" ||
      raw.lastRating === "hard" ||
      raw.lastRating === "remembered" ||
      raw.lastRating === "easy"
        ? raw.lastRating
        : undefined,
    lastReviewedDate:
      typeof raw.lastReviewedDate === "string" ? raw.lastReviewedDate : undefined,
  };
}

export function createInitialProgress(
  cardIds: string[],
  todayIso: string,
): ReviewProgress {
  return {
    cardProgress: Object.fromEntries(
      cardIds.map((cardId) => [
        cardId,
        { nextReviewDate: todayIso, reviews: 0 } satisfies CardReviewProgress,
      ]),
    ),
    satisfaction: initialSatisfaction,
    streak: 0,
    completedDates: [],
    ratingCounts: { ...emptyRatingCounts },
  };
}

export function reviveProgress(
  raw: unknown,
  cardIds: string[],
  todayIso: string,
): ReviewProgress {
  if (!isRecord(raw)) {
    return createInitialProgress(cardIds, todayIso);
  }

  const rawCards = isRecord(raw.cardProgress) ? raw.cardProgress : {};
  const cardProgress = Object.fromEntries(
    cardIds.map((cardId) => [
      cardId,
      normalizeCardProgress(rawCards[cardId], todayIso),
    ]),
  );

  return {
    cardProgress,
    satisfaction:
      typeof raw.satisfaction === "number"
        ? clamp(raw.satisfaction, 0, 100)
        : initialSatisfaction,
    streak: typeof raw.streak === "number" ? Math.max(0, raw.streak) : 0,
    lastReviewedDate:
      typeof raw.lastReviewedDate === "string" ? raw.lastReviewedDate : undefined,
    completedDates: Array.isArray(raw.completedDates)
      ? raw.completedDates.filter((date): date is string => typeof date === "string")
      : [],
    ratingCounts: normalizeRatingCounts(raw.ratingCounts),
  };
}

export function getDueCards(
  cardIds: string[],
  progress: ReviewProgress,
  todayIso: string,
): string[] {
  return cardIds.filter((cardId) => {
    const cardProgress = progress.cardProgress[cardId];
    return !cardProgress || cardProgress.nextReviewDate <= todayIso;
  });
}

function nextStreak(progress: ReviewProgress, todayIso: string): number {
  if (!progress.lastReviewedDate) {
    return 1;
  }

  if (progress.lastReviewedDate === todayIso) {
    return Math.max(1, progress.streak);
  }

  return progress.lastReviewedDate === addDaysToIsoDate(todayIso, -1)
    ? progress.streak + 1
    : 1;
}

export function recordReview(
  progress: ReviewProgress,
  cardId: string,
  rating: ReviewRating,
  todayIso: string,
): ReviewProgress {
  const current = progress.cardProgress[cardId] ?? {
    nextReviewDate: todayIso,
    reviews: 0,
  };
  const ratingCounts = progress.ratingCounts ?? emptyRatingCounts;

  return {
    ...progress,
    cardProgress: {
      ...progress.cardProgress,
      [cardId]: {
        nextReviewDate: getNextReviewDate(rating, todayIso),
        reviews: current.reviews + 1,
        lastRating: rating,
        lastReviewedDate: todayIso,
      },
    },
    satisfaction: clamp(
      progress.satisfaction + getSatisfactionDelta(rating),
      0,
      100,
    ),
    streak: nextStreak(progress, todayIso),
    lastReviewedDate: todayIso,
    ratingCounts: {
      ...ratingCounts,
      [rating]: ratingCounts[rating] + 1,
    },
  };
}

export function loadProgress(cardIds: string[], todayIso: string): ReviewProgress {
  const serialized = window.localStorage.getItem(reviewStorageKey);
  if (!serialized) {
    return createInitialProgress(cardIds, todayIso);
  }

  try {
    return reviveProgress(JSON.parse(serialized), cardIds, todayIso);
  } catch {
    return createInitialProgress(cardIds, todayIso);
  }
}

export function saveProgress(progress: ReviewProgress): void {
  window.localStorage.setItem(reviewStorageKey, JSON.stringify(progress));
}
