import Link from "next/link";
import { articles, categories } from "@/data/articles";

export default function Home() {
  const sortedArticles = [...articles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  return (
    <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-3">📚 ノウハウ図書館</h1>
        <p className="text-gray-600">
          仕事・お金・健康・育児・防災まで、今日から使えるノウハウを集めた図書館です。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-3">カテゴリから探す</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/?category=${encodeURIComponent(c)}`}
              className="text-sm bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-100"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">最新の記事 ({articles.length}件)</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {sortedArticles.map((a) => (
            <li
              key={a.id}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <Link href={`/articles/${a.slug}`} className="block">
                <p className="text-xs text-orange-600 font-bold mb-1">{a.category}</p>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{a.excerpt}</p>
                <p className="text-xs text-gray-400 mt-3">
                  {a.publishedAt} ・ {a.readTime}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
