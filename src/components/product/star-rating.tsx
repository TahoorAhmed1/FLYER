import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  reviewCount: number;
}

export function StarRating({
  rating,
  maxRating = 5,
  reviewCount,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">{reviewCount} reviews</span>
    </div>
  );
}
