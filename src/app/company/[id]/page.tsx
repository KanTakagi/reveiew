"use client";

import { use, useState } from "react";
import { getCompanyById, getReviewsByCompanyId } from "@/lib/data";
import { Review } from "@/lib/types";
import StarRating from "@/components/StarRating";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import Link from "next/link";

export default function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const company = getCompanyById(id);
  const initialReviews = getReviewsByCompanyId(id);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  if (!company) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          業者が見つかりません
        </h1>
        <Link href="/" className="text-blue-600 hover:underline">
          トップページに戻る
        </Link>
      </div>
    );
  }

  const handleReviewSubmit = (reviewData: {
    authorName: string;
    rating: number;
    title: string;
    content: string;
    category: string;
  }) => {
    const newReview: Review = {
      id: `r-new-${Date.now()}`,
      companyId: id,
      ...reviewData,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setReviews([newReview, ...reviews]);
  };

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-blue-600 hover:underline mb-6"
      >
        ← 業者一覧に戻る
      </Link>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-3xl font-bold shrink-0">
            {company.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">
              {company.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <StarRating rating={Math.round(avgRating)} />
              <span className="text-lg font-medium text-gray-700">
                {avgRating.toFixed(1)}
              </span>
              <span className="text-gray-500">({reviews.length}件の口コミ)</span>
            </div>
            <p className="text-gray-600 mt-3">{company.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {company.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              住所
            </p>
            <p className="text-sm text-gray-900 mt-1">{company.address}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              電話番号
            </p>
            <p className="text-sm text-gray-900 mt-1">{company.phone}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              ウェブサイト
            </p>
            <p className="text-sm text-blue-600 mt-1">{company.website}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <ReviewForm companyId={id} onSubmit={handleReviewSubmit} />
      </div>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          口コミ一覧 ({reviews.length}件)
        </h2>
        <div className="grid gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}
