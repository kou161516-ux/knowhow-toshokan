export const AFFILIATES = {
  securities: [
    {
      name: "SBI証券",
      desc: "国内最大級のネット証券。NISA・投資信託が充実",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX1",
      label: "無料で口座開設する",
    },
    {
      name: "楽天証券",
      desc: "楽天ポイントで投資できる。使いやすいアプリが人気",
      url: "https://a.r10.to/XXXXXX1",
      label: "無料で口座開設する",
    },
  ],
  kakeibo: [
    {
      name: "マネーフォワード ME",
      desc: "銀行・カードを自動連携。資産管理が一目瞭然",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX2",
      label: "無料で始める",
    },
  ],
  insurance: [
    {
      name: "保険スクエアbang!",
      desc: "最大51社を一括比較。無料で保険のプロに相談できる",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX3",
      label: "無料で一括比較する",
    },
    {
      name: "ほけんの窓口",
      desc: "全国700店舗。何度でも無料で相談できる",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX4",
      label: "近くの店舗を探す",
    },
  ],
  creditcard: [
    {
      name: "楽天カード",
      desc: "年会費永年無料。100円で1ポイント還元率1%",
      url: "https://a.r10.to/XXXXXX2",
      label: "今すぐ申し込む",
    },
    {
      name: "三井住友カード(NL)",
      desc: "対象コンビニ・飲食店で最大7%還元。年会費無料",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX5",
      label: "今すぐ申し込む",
    },
  ],
  electricity: [
    {
      name: "楽天でんき",
      desc: "楽天ポイントが貯まる・使える電気",
      url: "https://a.r10.to/XXXXXX3",
      label: "料金シミュレーションを見る",
    },
    {
      name: "auでんき",
      desc: "auスマホとセットでお得。電気代を節約",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX6",
      label: "料金を確認する",
    },
  ],
  mobile: [
    {
      name: "楽天モバイル",
      desc: "月額最大3,278円。データ無制限で使えるプランあり",
      url: "https://a.r10.to/XXXXXX4",
      label: "料金プランを見る",
    },
    {
      name: "IIJmio",
      desc: "業界最安水準。2GB 740円〜",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX7",
      label: "料金プランを確認する",
    },
  ],
  bousai: [
    {
      name: "驚異の防臭袋 BOS 非常用トイレ Bセット 50回分",
      desc: "元消防職員として家族4人の最低基準。断水72時間を越える備え",
      url: "https://www.amazon.co.jp/dp/B088BKW851?tag=kouminsaiyo-22",
      label: "詳細を見る",
    },
  ],
  education: [
    {
      name: "学資保険 一括比較",
      desc: "最大10社の学資保険を無料比較。子どもの教育費を計画的に",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX8",
      label: "無料で比較する",
    },
  ],
  housing: [
    {
      name: "SUUMO",
      desc: "全国の物件情報。新築・中古・賃貸を探せる",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXXX9",
      label: "物件を探す",
    },
    {
      name: "住宅本舗 住宅ローン比較",
      desc: "最大20社の住宅ローンを一括比較",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXX10",
      label: "金利を比較する",
    },
  ],
  moving: [
    {
      name: "引越し侍",
      desc: "最大10社に一括見積もり。引越し費用を最大60%削減",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXX11",
      label: "無料で一括見積もりする",
    },
    {
      name: "SUUMO引越し",
      desc: "最大11社を一括比較。しつこい勧誘なし",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXX12",
      label: "無料で見積もりする",
    },
  ],
  recycle: [
    {
      name: "メルカリ",
      desc: "不用品をスマホで簡単出品。送料込みで売れやすい",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXX13",
      label: "無料で始める",
    },
    {
      name: "ブランディア（宅配買取）",
      desc: "ブランド品・洋服を自宅から売れる。送料無料",
      url: "https://px.a8.net/svt/ejp?a8mat=XXXXX14",
      label: "無料で査定する",
    },
  ],
};

export type BousaiProductKey =
  | "toilet"
  | "power"
  | "bag"
  | "water"
  | "food"
  | "light";

export type BousaiProduct = {
  key: BousaiProductKey;
  name: string;
  spec: string;
  keywords: string[];
  conclusion: string;
  failure: string;
  finalAdvice: string;
  url: string;
  label: string;
};

export const BOUSAI_PRODUCTS: Record<BousaiProductKey, BousaiProduct> = {
  toilet: {
    key: "toilet",
    name: "驚異の防臭袋 BOS 非常用トイレ Bセット 50回分",
    spec: "凝固剤＋防臭袋50回分／家族4人で約2〜3日分",
    keywords: [
      "断水",
      "トイレ",
      "簡易トイレ",
      "下水",
      "排泄",
      "在宅避難",
      "マンション防災",
    ],
    conclusion:
      "元消防職員として、断水で最初に困るのはトイレです。まずは家族4人で2〜3日分にあたる50回分以上を1セット用意してください。",
    failure:
      "実際に多かった失敗は、10〜20回分を買って『足りなかった』という後悔。1人1日5〜7回×日数で計算すると、想像より早く底をつきます。",
    finalAdvice:
      "迷ったら、まずこの50回分を1セット。これだけで断水72時間の最大の不安が消えます。",
    url: "https://www.amazon.co.jp/dp/B088BKW851?tag=kouminsaiyo-22",
    label: "Amazonで詳細を見る",
  },
  power: {
    key: "power",
    name: "Jackery ポータブル電源 708（708Wh）",
    spec: "708Wh／冷蔵庫(150W)約4時間＋スマホ60回充電目安",
    keywords: [
      "停電",
      "電源",
      "ポータブル電源",
      "ブレーカー",
      "通電",
      "雪害",
      "凍結",
      "豪雪",
    ],
    conclusion:
      "家庭用なら『冷蔵庫＋スマホ』が最低限動く容量を優先してください。500Wh以下では冷蔵庫を維持できず、食料が傷み始めます。",
    failure:
      "実際に多かった失敗は、200〜300Whの軽量モデルを買って冷蔵庫が動かず後悔するケース。スマホだけならモバイルバッテリーで足ります。",
    finalAdvice:
      "迷ったら708Whクラスを1台。冷蔵庫が半日動けば、停電の不安はほとんど消えます。",
    url: "https://www.amazon.co.jp/dp/B093V5VJ6N?tag=kouminsaiyo-22",
    label: "Amazonで詳細を見る",
  },
  bag: {
    key: "bag",
    name: "山善 避難用アイテム30点セット 防災リュック YBG-30R",
    spec: "30品目／単品で買い揃えるより1万円以上お得",
    keywords: [
      "防災リュック",
      "必需品",
      "持ち出し",
      "一人暮らしの防災",
      "防災訓練",
      "ハザードマップ",
      "避難場所",
      "地震",
      "火災",
      "家具の固定",
      "オフィス防災",
      "帰宅困難",
      "津波",
      "竜巻",
      "突風",
      "ペット",
      "高齢者",
      "防災ヘルメット",
    ],
    conclusion:
      "元消防職員として、最初の1セットは『中身が選定済みの完成品』を買うのが結局いちばん早いです。揃えるのに迷う時間で、実装が止まるからです。",
    failure:
      "実際に多かった失敗は、1品ずつ買い集めて結局未完成のまま被災するケース。完成品をベースに、足りない物だけ後で足すのが現実的です。",
    finalAdvice:
      "迷ったらこの30点セットを家族人数分。届いた日から備えが完了します。",
    url: "https://www.amazon.co.jp/dp/B07D28ZXP3?tag=kouminsaiyo-22",
    label: "Amazonで詳細を見る",
  },
  water: {
    key: "water",
    name: "アイリスオーヤマ 長期保存水 2L×6本（5年保存）",
    spec: "1人1日3L×3日×家族人数の最小基準",
    keywords: [
      "水",
      "保存水",
      "ローリングストック",
      "備蓄",
      "在宅避難",
    ],
    conclusion:
      "1人1日3L×3日が最小基準です。家族4人なら2L×18本が最低ライン。3箱まとめ買いで備蓄完了です。",
    failure:
      "実際に多かった失敗は、5年保存水を買い込んで賞味期限を切らすケース。普段飲める2L水のローリングストックの方が、結局続きます。",
    finalAdvice:
      "迷ったらまず2L×6本×3箱を1セット。普段飲みながら回せば、備蓄が習慣になります。",
    url: "https://www.amazon.co.jp/dp/B09F6KG6VQ?tag=kouminsaiyo-22",
    label: "Amazonで詳細を見る",
  },
  food: {
    key: "food",
    name: "尾西食品 アルファ米 12種類全部セット（5年保存）",
    spec: "12食／水でも戻る／お湯で15分・水で60分",
    keywords: [
      "非常食",
      "食料",
      "アルファ米",
      "備蓄食",
      "保存食",
    ],
    conclusion:
      "非常食は『水でも戻る』が最重要です。停電下ではお湯が沸かせない時間帯が必ず発生します。",
    failure:
      "実際に多かった失敗は、レトルトばかり買って加熱できず冷たいまま食べるケース。子どもが食べないこともあります。",
    finalAdvice:
      "迷ったら尾西のアルファ米12種を家族人数×3日分。味の選択肢があるだけで、被災時の精神的負担が大きく違います。",
    url: "https://www.amazon.co.jp/dp/B06XZM1RGH?tag=kouminsaiyo-22",
    label: "Amazonで詳細を見る",
  },
  light: {
    key: "light",
    name: "GENTOS LEDランタン EX-109D（両手が空くタイプ・1000ルーメン）",
    spec: "明るさ1000lm／連続点灯約8時間／吊り下げ・自立両対応",
    keywords: [
      "ライト",
      "ランタン",
      "明かり",
      "懐中電灯",
      "防災ラジオ",
      "情報",
    ],
    conclusion:
      "停電時は『両手が空くランタン』が最優先です。懐中電灯では作業も子どものケアもできません。",
    failure:
      "実際に多かった失敗は、100均ライトで凌ごうとして電池切れと暗さで動けなくなるケース。最低500ルーメン以上を選んでください。",
    finalAdvice:
      "迷ったらGENTOSの1000ルーメン1台を寝室・リビング・玄関の3箇所に分散配置。停電直後の動線が確保できます。",
    url: "https://www.amazon.co.jp/dp/B0C6N1SHP1?tag=kouminsaiyo-22",
    label: "Amazonで詳細を見る",
  },
};

export function detectBousaiProduct(input: {
  title: string;
  slug: string;
  content: string;
}): BousaiProduct {
  const text = `${input.title} ${input.slug} ${input.content}`;
  let best: { product: BousaiProduct; score: number } | null = null;
  for (const product of Object.values(BOUSAI_PRODUCTS)) {
    let score = 0;
    for (const kw of product.keywords) {
      if (text.includes(kw)) score += 1;
      if (input.title.includes(kw)) score += 2;
    }
    if (score > 0 && (!best || score > best.score)) best = { product, score };
  }
  return best?.product ?? BOUSAI_PRODUCTS.bag;
}

export const MY_SITES = [
  {
    name: "消防学校ナビ",
    desc: "消防学校の入試・訓練・生活を徹底解説",
    url: "https://shobo-gakko-navi.vercel.app/",
    category: "bousai",
  },
  {
    name: "災害史ナビ",
    desc: "日本の災害の歴史から防災を学ぶ",
    url: "https://saigaishi-navi.vercel.app/",
    category: "bousai",
  },
  {
    name: "警察学校ナビ",
    desc: "警察学校の入試・訓練を解説",
    url: "https://keisatsu-gakko-navi.vercel.app/",
    category: "career",
  },
  {
    name: "海上保安学校ナビ",
    desc: "海上保安学校への道を徹底ガイド",
    url: "https://kaijo-gakko-navi.vercel.app/",
    category: "career",
  },
  {
    name: "消防・防災情報サイト",
    desc: "家庭でできる防災対策を詳しく解説",
    url: "https://www.syouboubousai.com",
    category: "bousai",
  },
];

export const CATEGORY_AFFILIATE_MAP: Record<string, (keyof typeof AFFILIATES)[]> = {
  "投資・資産運用": ["securities", "kakeibo"],
  "節税・確定申告": ["securities", "insurance", "kakeibo"],
  "副業・フリーランス": ["kakeibo", "creditcard", "mobile"],
  "お金の習慣": ["kakeibo", "creditcard", "electricity", "mobile"],
  "ライフスタイル最適化": ["electricity", "mobile", "recycle", "moving"],
  "節約・家計管理": ["kakeibo", "creditcard", "electricity", "mobile", "insurance"],
  "住まい・引越し": ["housing", "moving", "electricity"],
  "教育・子育て": ["education", "securities"],
  "防災・安全": ["bousai"],
  "保険": ["insurance"],
  "仕事効率化": ["mobile", "kakeibo"],
  "お金の知識": ["kakeibo", "creditcard", "securities", "insurance"],
  "住まい・掃除": ["recycle", "electricity"],
  "育児・家族": ["education", "kakeibo"],
  "デジタル活用": ["mobile"],
  "お金の基本・節約": ["kakeibo", "creditcard", "electricity", "mobile", "insurance"],
  "副業・収入増": ["kakeibo", "creditcard", "mobile"],
  "投資入門": ["securities", "kakeibo"],
  "マインド・習慣": ["kakeibo"],
};
