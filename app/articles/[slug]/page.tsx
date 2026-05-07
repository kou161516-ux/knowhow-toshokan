import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { CATEGORY_AFFILIATE_MAP, detectBousaiProduct } from "@/lib/affiliates";
import {
  AffiliateBox,
  BousaiRecommendBox,
  MySiteBox,
} from "@/components/AffiliateBox";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "記事が見つかりません" };
  return {
    title: `${article.title} | ノウハウ図書館`,
    description: article.excerpt,
  };
}

function splitContentForInsertion(content: string) {
  const sections = content.split(/\n\n(?=## )/);
  if (sections.length <= 2) return { first: content, second: "" };
  const insertAt = Math.max(1, Math.floor(sections.length / 3));
  return {
    first: sections.slice(0, insertAt).join("\n\n"),
    second: sections.slice(insertAt).join("\n\n"),
  };
}

function renderMarkdown(md: string) {
  const blocks = md.split(/\n\n+/);
  return blocks.map((b, i) => {
    if (b.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-xl font-bold text-gray-900 mt-8 mb-3 border-l-4 border-orange-500 pl-3"
        >
          {b.replace(/^##\s+/, "")}
        </h2>
      );
    }
    return (
      <p key={i} className="text-gray-700 leading-relaxed my-4 whitespace-pre-wrap">
        {b}
      </p>
    );
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const isBousai = article.category === "防災・安全";
  const careerCategories = ["仕事効率化", "学習"];
  const isCareer = careerCategories.includes(article.category);

  const affKeys = isBousai ? [] : CATEGORY_AFFILIATE_MAP[article.category] || [];
  const { first, second } = splitContentForInsertion(article.content);

  const bousaiProduct = isBousai
    ? detectBousaiProduct({
        title: article.title,
        slug: article.slug,
        content: article.content,
      })
    : null;

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-10">
      <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
        ← 一覧に戻る
      </Link>
      <p className="text-xs text-orange-600 font-bold mt-4">{article.category}</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
        {article.title}
      </h1>
      <p className="text-xs text-gray-400 mb-6">
        {article.publishedAt} ・ {article.readTime}
      </p>
      <p className="text-gray-700 leading-relaxed bg-gray-50 border-l-4 border-gray-300 pl-4 py-3 mb-6">
        {article.excerpt}
      </p>

      {bousaiProduct && (
        <BousaiRecommendBox product={bousaiProduct} placement="conclusion" />
      )}

      <div className="prose-content">{renderMarkdown(first)}</div>

      {bousaiProduct && (
        <BousaiRecommendBox product={bousaiProduct} placement="failure" />
      )}
      {!bousaiProduct && affKeys.length > 0 && <AffiliateBox keys={affKeys} />}

      {second && <div className="prose-content">{renderMarkdown(second)}</div>}

      {bousaiProduct && (
        <BousaiRecommendBox product={bousaiProduct} placement="final" />
      )}
      {!bousaiProduct && affKeys.length > 0 && <AffiliateBox keys={affKeys} />}

      {isBousai && <MySiteBox category="bousai" />}
      {isCareer && <MySiteBox category="career" />}
    </article>
  );
}
