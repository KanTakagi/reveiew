import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "リフォーム口コミナビ | リフォーム業者の口コミ・評判サイト",
  description:
    "リフォーム業者の口コミや評判を比較できるサイトです。キッチン、バスルーム、外壁塗装など、リフォームの種類から業者を検索できます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased bg-gray-50">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
