import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ノウハウ図書館 | 暮らし・仕事・お金の知恵",
  description:
    "仕事効率化・お金・健康・育児・防災まで、暮らしに役立つノウハウを集めた図書館。今日から使える具体的な手順を紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              📚 ノウハウ図書館
            </Link>
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">
                記事一覧
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-gray-200 bg-white mt-16">
          <div className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} ノウハウ図書館
          </div>
        </footer>
      </body>
    </html>
  );
}
