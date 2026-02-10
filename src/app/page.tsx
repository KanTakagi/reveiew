"use client";

import { useState } from "react";
import { searchCompanies } from "@/lib/data";
import CompanyCard from "@/components/CompanyCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const filteredCompanies = searchCompanies(query, category);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          信頼できるリフォーム業者を見つけよう
        </h1>
        <p className="text-gray-600">
          実際に利用した方の口コミ・評判からあなたにぴったりの業者を比較・検索
        </p>
      </section>

      <SearchBar
        query={query}
        category={category}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
      />

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {filteredCompanies.length}件の業者が見つかりました
        </p>
      </div>

      <div className="mt-4 grid gap-4">
        {filteredCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">条件に合う業者が見つかりませんでした</p>
            <p className="text-sm mt-2">検索条件を変更してお試しください</p>
          </div>
        )}
      </div>
    </div>
  );
}
