import { Review } from "@/lib/types";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold">
            {review.authorName.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-gray-900">{review.authorName}</p>
            <p className="text-xs text-gray-500">{review.createdAt}</p>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
          {review.category}
        </span>
      </div>
      <div className="mt-3">
        <StarRating rating={review.rating} size="sm" />
      </div>
      <h4 className="font-bold text-gray-900 mt-2">{review.title}</h4>
      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
        {review.content}
      </p>
    </div>
  );
}
