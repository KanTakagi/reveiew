import { Company, Review } from "./types";

export const companies: Company[] = [
  {
    id: "1",
    name: "リフォームスタジオ東京",
    description:
      "東京都内を中心に、キッチン・バスルームのリフォームを得意とする会社です。お客様の理想の住まいを実現するために、丁寧なヒアリングと高品質な施工をお約束します。",
    address: "東京都新宿区西新宿1-1-1",
    phone: "03-1234-5678",
    website: "https://example.com",
    categories: ["キッチン", "バスルーム", "トイレ"],
    averageRating: 4.5,
    reviewCount: 28,
    imageUrl: "",
  },
  {
    id: "2",
    name: "ホームメイク横浜",
    description:
      "横浜エリアで20年以上の実績。外壁・屋根塗装からフルリフォームまで幅広く対応。地域密着型のサービスで安心をお届けします。",
    address: "神奈川県横浜市中区本町2-2-2",
    phone: "045-2345-6789",
    website: "https://example.com",
    categories: ["外壁・屋根", "リビング", "フローリング"],
    averageRating: 4.2,
    reviewCount: 35,
    imageUrl: "",
  },
  {
    id: "3",
    name: "さくらリフォーム",
    description:
      "大阪を拠点に関西全域で対応。水回りリフォームの専門家として、最新設備の導入から配管工事まで一貫して対応いたします。",
    address: "大阪府大阪市北区梅田3-3-3",
    phone: "06-3456-7890",
    website: "https://example.com",
    categories: ["キッチン", "バスルーム", "トイレ", "オール電化"],
    averageRating: 4.7,
    reviewCount: 42,
    imageUrl: "",
  },
  {
    id: "4",
    name: "グリーンハウス名古屋",
    description:
      "名古屋市内で省エネリフォームを推進。オール電化や断熱リフォームなど、環境にやさしい住まいづくりをご提案します。",
    address: "愛知県名古屋市中区栄4-4-4",
    phone: "052-4567-8901",
    website: "https://example.com",
    categories: ["オール電化", "外壁・屋根", "増築・改築"],
    averageRating: 4.0,
    reviewCount: 19,
    imageUrl: "",
  },
  {
    id: "5",
    name: "リノベーション工房 福岡",
    description:
      "福岡県を中心に九州エリアで展開。マンション・戸建ての大規模リノベーションが得意。デザイン性と機能性を両立した空間を創造します。",
    address: "福岡県福岡市博多区博多駅前5-5-5",
    phone: "092-5678-9012",
    website: "https://example.com",
    categories: ["リビング", "キッチン", "フローリング", "増築・改築"],
    averageRating: 4.8,
    reviewCount: 51,
    imageUrl: "",
  },
  {
    id: "6",
    name: "匠リフォーム埼玉",
    description:
      "埼玉県全域で戸建てリフォームを手がける老舗企業。職人の技術力に定評があり、細部までこだわった施工が自慢です。",
    address: "埼玉県さいたま市大宮区桜木町6-6-6",
    phone: "048-6789-0123",
    website: "https://example.com",
    categories: ["キッチン", "バスルーム", "フローリング", "外壁・屋根"],
    averageRating: 4.3,
    reviewCount: 33,
    imageUrl: "",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    companyId: "1",
    authorName: "田中太郎",
    rating: 5,
    title: "キッチンリフォームが素晴らしかった",
    content:
      "古くなったキッチンを最新のシステムキッチンに交換していただきました。担当者の方がとても親切で、こちらの要望を丁寧に聞いてくれました。施工も予定通りに完了し、仕上がりにも大満足です。",
    category: "キッチン",
    createdAt: "2025-12-15",
  },
  {
    id: "r2",
    companyId: "1",
    authorName: "鈴木花子",
    rating: 4,
    title: "バスルームがきれいになりました",
    content:
      "築30年の浴室をユニットバスに変更しました。工期は1週間ほどでしたが、毎日進捗を報告してくれて安心できました。少し予算オーバーになりましたが、品質を考えると満足です。",
    category: "バスルーム",
    createdAt: "2025-11-20",
  },
  {
    id: "r3",
    companyId: "1",
    authorName: "佐藤健",
    rating: 5,
    title: "トイレのリフォームで快適に",
    content:
      "和式トイレから洋式トイレへの変更をお願いしました。最新のウォシュレット付きで、家族全員が快適に使えるようになりました。アフターサポートも充実しています。",
    category: "トイレ",
    createdAt: "2025-10-05",
  },
  {
    id: "r4",
    companyId: "2",
    authorName: "山田一郎",
    rating: 4,
    title: "外壁塗装がきれいに仕上がった",
    content:
      "外壁の色あせが気になっていたので塗装をお願いしました。色の提案もセンスがよく、近所の方からも褒められました。足場の設置から撤去まで丁寧に対応してくれました。",
    category: "外壁・屋根",
    createdAt: "2025-12-01",
  },
  {
    id: "r5",
    companyId: "2",
    authorName: "伊藤美咲",
    rating: 5,
    title: "リビングが見違えるほど明るくなった",
    content:
      "壁紙の張り替えと照明の変更をしていただきました。プロのアドバイスで選んだ壁紙がとても素敵で、部屋全体が明るくなりました。費用もリーズナブルで大満足です。",
    category: "リビング",
    createdAt: "2025-09-18",
  },
  {
    id: "r6",
    companyId: "2",
    authorName: "渡辺大輔",
    rating: 3,
    title: "フローリングの張り替え",
    content:
      "フローリングの張り替えをお願いしました。仕上がり自体は悪くないのですが、工期が予定より3日延びたのが残念でした。連絡も少し遅かった印象です。",
    category: "フローリング",
    createdAt: "2025-08-22",
  },
  {
    id: "r7",
    companyId: "3",
    authorName: "高橋優子",
    rating: 5,
    title: "水回り全体をリフォーム",
    content:
      "キッチン、バスルーム、トイレの水回り全体をまとめてリフォームしていただきました。パッケージ価格で個別に頼むより大幅にお得でした。施工品質も非常に高く、大満足です。",
    category: "キッチン",
    createdAt: "2025-12-20",
  },
  {
    id: "r8",
    companyId: "3",
    authorName: "中村翔",
    rating: 5,
    title: "オール電化で光熱費が大幅削減",
    content:
      "ガスからオール電化への切り替えをお願いしました。IHクッキングヒーターとエコキュートの導入で、毎月の光熱費が3割ほど下がりました。説明も丁寧で安心できました。",
    category: "オール電化",
    createdAt: "2025-11-10",
  },
  {
    id: "r9",
    companyId: "4",
    authorName: "小林真理",
    rating: 4,
    title: "断熱リフォームで冬が快適に",
    content:
      "窓の二重サッシ化と壁の断熱材追加をお願いしました。工事後の冬は暖房の効きが格段に良くなり、結露も減りました。エコポイントの申請もサポートしてくれました。",
    category: "外壁・屋根",
    createdAt: "2025-12-08",
  },
  {
    id: "r10",
    companyId: "4",
    authorName: "加藤裕太",
    rating: 4,
    title: "増築で子供部屋を確保",
    content:
      "子供の成長に合わせて2階に部屋を増築しました。構造計算からしっかりやっていただき、安心して任せられました。完成後の住み心地も良好です。",
    category: "増築・改築",
    createdAt: "2025-10-25",
  },
  {
    id: "r11",
    companyId: "5",
    authorName: "松本さやか",
    rating: 5,
    title: "マンションフルリノベーションが最高",
    content:
      "築40年の中古マンションをフルリノベーションしていただきました。デザイナーさんのセンスが素晴らしく、まるで新築のような仕上がりです。友人を招くのが楽しみになりました。",
    category: "リビング",
    createdAt: "2025-12-25",
  },
  {
    id: "r12",
    companyId: "5",
    authorName: "吉田拓也",
    rating: 5,
    title: "対面キッチンへの変更が大正解",
    content:
      "壁付けキッチンから対面キッチンへの変更をお願いしました。間取りの変更を含む大がかりな工事でしたが、プロのアドバイスのおかげで理想通りの空間になりました。",
    category: "キッチン",
    createdAt: "2025-11-30",
  },
  {
    id: "r13",
    companyId: "5",
    authorName: "木村愛",
    rating: 4,
    title: "無垢材フローリングで温かみのある部屋に",
    content:
      "合板からオーク無垢材のフローリングに張り替えていただきました。足触りが全然違います。メンテナンス方法も丁寧に教えていただき、長く大切に使いたいと思います。",
    category: "フローリング",
    createdAt: "2025-09-05",
  },
  {
    id: "r14",
    companyId: "6",
    authorName: "斎藤雅人",
    rating: 4,
    title: "職人さんの腕が確か",
    content:
      "キッチンの天板交換とバックスプラッシュのタイル張りをお願いしました。職人さんの技術力が高く、タイルの目地も美しく仕上がりました。少し時間はかかりましたが、丁寧な仕事に満足です。",
    category: "キッチン",
    createdAt: "2025-12-10",
  },
  {
    id: "r15",
    companyId: "6",
    authorName: "井上恵",
    rating: 5,
    title: "屋根の葺き替えで安心",
    content:
      "台風で一部破損した屋根の葺き替えをお願いしました。迅速に対応していただき、保険申請のアドバイスもいただけて助かりました。新しい屋根は耐久性も高く、安心です。",
    category: "外壁・屋根",
    createdAt: "2025-10-18",
  },
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getReviewsByCompanyId(companyId: string): Review[] {
  return reviews.filter((r) => r.companyId === companyId);
}

export function searchCompanies(query: string, category?: string): Company[] {
  let result = companies;
  if (category) {
    result = result.filter((c) => c.categories.includes(category));
  }
  if (query) {
    const q = query.toLowerCase();
    result = result.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q)
    );
  }
  return result;
}
