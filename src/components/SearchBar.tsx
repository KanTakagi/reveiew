"use client";

import { CATEGORIES } from "@/lib/types";

interface SearchBarProps {
  query: string;
  category: string;
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function SearchBar({
  query,
  category,
  onQueryChange,
  onCategoryChange,
}: SearchBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            placeholder="業者名・エリアで検索..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        <div>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full sm:w-48 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
          >
            <option value="">すべてのカテゴリ</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
