import { companies, getCompanyById, getReviewsByCompanyId } from "@/lib/data";
import CompanyDetail from "./CompanyDetail";

export function generateStaticParams() {
  return companies.map((company) => ({ id: company.id }));
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const company = getCompanyById(id);
  const reviews = getReviewsByCompanyId(id);

  return <CompanyDetail company={company} initialReviews={reviews} id={id} />;
}
