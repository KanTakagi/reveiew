import Link from "next/link";
import { Company } from "@/lib/types";
import StarRating from "./StarRating";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link href={`/company/${company.id}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-blue-200 transition-all duration-200">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl font-bold shrink-0">
            {company.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              {company.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <StarRating rating={Math.round(company.averageRating)} size="sm" />
              <span className="text-sm font-medium text-gray-700">
                {company.averageRating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">
                ({company.reviewCount}件)
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{company.address}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {company.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {company.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
