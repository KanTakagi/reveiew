"use client";

import { useState } from "react";
import { CATEGORIES } from "@/lib/types";
import StarRating from "./StarRating";

interface ReviewFormProps {
  companyId: string;
  onSubmit: (review: {
    authorName: string;
    rating: number;
    title: string;
    content: string;
    category: string;
  }) => void;
}

export default function ReviewForm({ companyId: _companyId, onSubmit }: ReviewFormProps) {
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !rating || !title || !content || !category) return;
    onSubmit({ authorName, rating, title, content, category });
    setAuthorName("");
    setRating(0);
    setTitle("");
    setContent("");
    setCategory("");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
      >
        口コミを投稿する
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-200 p-6 space-y-4"
    >
      <h3 className="text-lg font-bold text-gray-900">口コミを投稿</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          お名前
        </label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="ニックネーム可"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          評価
        </label>
        <StarRating
          rating={rating}
          size="lg"
          interactive
          onChange={setRating}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          カテゴリ
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
          required
        >
          <option value="">選択してください</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          タイトル
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          placeholder="口コミのタイトル"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          口コミ内容
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
          placeholder="リフォームの体験を詳しく教えてください"
          required
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
        >
          投稿する
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
        >
          キャンセル
        </button>
      </div>
    </form>
  );
}
