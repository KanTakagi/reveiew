import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🏠</span>
          <span className="text-xl font-bold text-gray-900">
            リフォーム口コミナビ
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            業者を探す
          </Link>
        </nav>
      </div>
    </header>
  );
}
