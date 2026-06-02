export type ReviewRating = "forgot" | "hard" | "remembered" | "easy";

export type CardReviewProgress = {
  nextReviewDate: string;
  reviews: number;
  lastRating?: ReviewRating;
  lastReviewedDate?: string;
};

export type RatingCounts = Record<ReviewRating, number>;

export type ReviewProgress = {
  cardProgress: Record<string, CardReviewProgress>;
  satisfaction: number;
  streak: number;
  lastReviewedDate?: string;
  completedDates: string[];
  ratingCounts?: RatingCounts;
};
