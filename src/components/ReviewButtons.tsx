import type { ReviewRating } from "../types/review";

type ReviewButtonsProps = {
  disabled?: boolean;
  onRate: (rating: ReviewRating) => void;
};

const ratings: Array<{
  rating: ReviewRating;
  label: string;
  className: string;
}> = [
  { rating: "forgot", label: "Unuttum", className: "forgot" },
  { rating: "hard", label: "Zordu", className: "hard" },
  { rating: "remembered", label: "Hatırladım", className: "remembered" },
  { rating: "easy", label: "Çok Kolay", className: "easy" },
];

export function ReviewButtons({ disabled = false, onRate }: ReviewButtonsProps) {
  return (
    <div className="review-dock" aria-label="Hatırlama değerlendirmesi">
      {ratings.map((item) => (
        <button
          className={`review-button ${item.className}`}
          disabled={disabled}
          key={item.rating}
          type="button"
          onClick={() => onRate(item.rating)}
        >
          <span aria-hidden="true" />
          {item.label}
        </button>
      ))}
    </div>
  );
}
