"use client";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export default function StarRating({
  rating,
  size = "md",
  interactive = false,
  onChange,
}: StarRatingProps) {
  const sizeClass = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  return (
    <div className={`flex gap-0.5 ${sizeClass}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""} ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => interactive && onChange?.(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
