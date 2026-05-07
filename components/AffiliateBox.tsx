import { AFFILIATES, MY_SITES, type BousaiProduct } from "@/lib/affiliates";

type AffiliateKey = keyof typeof AFFILIATES;

type BousaiPlacement = "conclusion" | "failure" | "final";

const PLACEMENT_LABEL: Record<BousaiPlacement, string> = {
  conclusion: "まず結論",
  failure: "実際に多かった失敗",
  final: "迷ったらこれ",
};

export function BousaiRecommendBox({
  product,
  placement,
}: {
  product: BousaiProduct;
  placement: BousaiPlacement;
}) {
  const body =
    placement === "conclusion"
      ? product.conclusion
      : placement === "failure"
        ? product.failure
        : product.finalAdvice;
  return (
    <div className="my-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
      <p className="text-xs text-amber-700 font-bold mb-3">
        🛡 {PLACEMENT_LABEL[placement]}（元消防職員・防災士の判断）
      </p>
      <p className="text-gray-800 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
        {body}
      </p>
      <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100">
        <p className="font-bold text-gray-900 text-sm mb-1">{product.name}</p>
        <p className="text-gray-500 text-xs mb-3">{product.spec}</p>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
        >
          {product.label}
        </a>
      </div>
      <p className="text-xs text-gray-400 mt-3">
        ※本記事にはプロモーションが含まれています
      </p>
    </div>
  );
}

export function AffiliateBox({ keys }: { keys: AffiliateKey[] }) {
  const items = keys.flatMap((k) => AFFILIATES[k] || []);
  if (items.length === 0) return null;
  return (
    <div className="my-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
      <p className="text-xs text-amber-700 font-bold mb-3">📢 おすすめサービス</p>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 bg-white rounded-lg p-3 shadow-sm"
          >
            <div>
              <p className="font-bold text-gray-800 text-sm">{item.name}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-2">※本記事にはプロモーションが含まれています</p>
    </div>
  );
}

export function MySiteBox({ category }: { category?: string }) {
  const sites = category
    ? MY_SITES.filter((s) => s.category === category)
    : MY_SITES.slice(0, 2);
  if (sites.length === 0) return null;
  return (
    <div className="my-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
      <p className="text-xs text-blue-700 font-bold mb-2">🔗 関連サイト</p>
      <div className="space-y-2">
        {sites.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 text-sm"
          >
            <span>→</span>
            <span className="font-medium">{s.name}</span>
            <span className="text-gray-500 text-xs">— {s.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
