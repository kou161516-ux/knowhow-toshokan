import Link from "next/link";
import { articles, categories } from "@/data/articles";
import SearchBox from "@/components/SearchBox";

type SearchParams = Promise<{ category?: string; q?: string }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const selectedCategory = params.category ?? "";
  const query = (params.q ?? "").trim();
  const queryLower = query.toLowerCase();

  const categoryCounts = categories.reduce<Record<string, number>>((acc, c) => {
    acc[c] = articles.filter((a) => a.category === c).length;
    return acc;
  }, {});

  const filtered = articles.filter((a) => {
    if (selectedCategory && a.category !== selectedCategory) return false;
    if (queryLower) {
      const haystack = `${a.title} ${a.excerpt} ${a.content} ${a.category}`.toLowerCase();
      if (!haystack.includes(queryLower)) return false;
    }
    return true;
  });

  const sortedArticles = [...filtered].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  const buildHref = (overrides: { category?: string | null; q?: string | null }) => {
    const sp = new URLSearchParams();
    const nextCategory =
      overrides.category === undefined ? selectedCategory : overrides.category ?? "";
    const nextQ = overrides.q === undefined ? query : overrides.q ?? "";
    if (nextCategory) sp.set("category", nextCategory);
    if (nextQ) sp.set("q", nextQ);
    const qs = sp.toString();
    return qs ? `/?${qs}` : "/";
  };

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-3">📚 ノウハウ図書館</h1>
        <p className="text-gray-600">
          仕事・お金・健康・育児・防災まで、今日から使えるノウハウを集めた図書館です。
        </p>
      </section>

      <section className="mb-8">
        <SearchBox />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-3">カテゴリから探す</h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href={buildHref({ category: null })}
            className={`text-sm px-3 py-1.5 rounded-full border ${
              selectedCategory === ""
                ? "bg-orange-500 border-orange-500 text-white"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            すべて <span className="opacity-80">({articles.length})</span>
          </Link>
          {categories.map((c) => {
            const active = selectedCategory === c;
            return (
              <Link
                key={c}
                href={buildHref({ category: c })}
                className={`text-sm px-3 py-1.5 rounded-full border ${
                  active
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {c}{" "}
                <span className={active ? "opacity-90" : "text-gray-500"}>
                  ({categoryCounts[c] ?? 0})
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-lg font-bold">
            {query
              ? `「${query}」の検索結果`
              : selectedCategory
              ? selectedCategory
              : "最新の記事"}{" "}
            <span className="text-gray-500 font-normal">({sortedArticles.length}件)</span>
          </h2>
          {(query || selectedCategory) && (
            <Link
              href="/"
              className="text-sm text-orange-600 hover:underline"
            >
              条件をクリア
            </Link>
          )}
        </div>

        {sortedArticles.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500">
            該当する記事が見つかりませんでした。
            <br />
            別のキーワードやカテゴリでお試しください。
          </div>
        ) : (
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
        )}
      </section>
    </div>
  );
}
