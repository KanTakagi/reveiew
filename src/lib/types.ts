export interface Review {
  id: string;
  companyId: string;
  authorName: string;
  rating: number;
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  categories: string[];
  averageRating: number;
  reviewCount: number;
  imageUrl: string;
}

export const CATEGORIES = [
  "キッチン",
  "バスルーム",
  "トイレ",
  "リビング",
  "外壁・屋根",
  "フローリング",
  "オール電化",
  "増築・改築",
] as const;

export const AREAS = [
  "東京都",
  "神奈川県",
  "千葉県",
  "埼玉県",
  "大阪府",
  "京都府",
  "兵庫県",
  "愛知県",
  "福岡県",
] as const;
