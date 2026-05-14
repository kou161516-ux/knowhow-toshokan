import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "運営者情報 | ノウハウ図書館",
  description: "ノウハウ図書館の運営者情報です。",
};

export default function AboutPage() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto">
      <h1>運営者情報</h1>

      <table>
        <tbody>
          <tr>
            <th>サイト名</th>
            <td>ノウハウ図書館</td>
          </tr>
          <tr>
            <th>運営者</th>
            <td>吉野沙織</td>
          </tr>
          <tr>
            <th>サイトURL</th>
            <td>https://knowhow-toshokan.vercel.app</td>
          </tr>
          <tr>
            <th>お問い合わせ</th>
            <td><a href="/contact">お問い合わせフォーム</a></td>
          </tr>
        </tbody>
      </table>

      <h2>サイトについて</h2>
      <p>
        「ノウハウ図書館」は、仕事効率化・お金・健康・育児・防災など、暮らしに役立つノウハウを集めた情報サイトです。
        今日から使える具体的な手順・知識をわかりやすく紹介することをコンセプトとしています。
      </p>

      <h2>広告・アフィリエイトについて</h2>
      <p>
        当サイトはAmazonアソシエイト・プログラムの参加者です。また、A8.net・楽天アフィリエイト等のアフィリエイトプログラムにも参加しています。
        アフィリエイト広告を含む記事には「※本記事にはプロモーションが含まれています」と明示しています。
      </p>
      <p>
        広告収入はサイトの運営・コンテンツ制作費用に充てています。広告掲載の有無が記事の内容・評価に影響することはありません。
      </p>
    </article>
  );
}
