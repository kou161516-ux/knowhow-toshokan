import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | ノウハウ図書館",
  description: "ノウハウ図書館へのお問い合わせページです。",
};

export default function ContactPage() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto">
      <h1>お問い合わせ</h1>

      <p>
        ノウハウ図書館へのお問い合わせは、下記のGoogleフォームよりお送りください。
        記事の誤情報・リンク切れ・掲載依頼などもこちらからお願いします。
      </p>
      <p>
        いただいたお問い合わせには、通常3営業日以内にご返信いたします。内容によってはご返答できない場合があります。
      </p>

      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <p className="text-gray-600 text-sm mb-4">
          ※ お問い合わせフォームは準備中です。<br />
          緊急の場合はサイト下部の運営者情報よりご確認ください。
        </p>
        <a
          href="/about"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          運営者情報を見る
        </a>
      </div>
    </article>
  );
}
