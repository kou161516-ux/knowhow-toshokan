export type Article = {
  id: string;
  title: string;
  category: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
};

import { articlesBatch2 } from "./articles-batch2";
import { articlesBatchA } from "./articles-batch-a";
import { articlesBatchB } from "./articles-batch-b";
import { articlesBatchC } from "./articles-batch-c";
import { articlesBatchD } from "./articles-batch-d";
import { articlesRibleCity } from "./articles-riblecity";
import { articlesBatchE } from "./articles-batch-e";
import { articlesBatchF } from "./articles-batch-f";
import { articlesBatchG } from "./articles-batch-g";
import { articlesBatchH } from "./articles-batch-h";
import { articlesBatchI } from "./articles-batch-i";
import { articlesBatchJ } from "./articles-batch-j";
import { articlesBatchK } from "./articles-batch-k";
import { articlesBatchL } from "./articles-batch-l";

export const articles: Article[] = [
  ...articlesBatch2,
  ...articlesBatchA,
  ...articlesBatchB,
  ...articlesBatchC,
  ...articlesBatchD,
  ...articlesRibleCity,
  ...articlesBatchE,
  ...articlesBatchF,
  ...articlesBatchG,
  ...articlesBatchH,
  ...articlesBatchI,
  ...articlesBatchJ,
  ...articlesBatchK,
  ...articlesBatchL,
];

export const allArticles = articles;

export const categories = [
  "仕事効率化",
  "お金の知識",
  "健康管理",
  "料理",
  "住まい・掃除",
  "育児・家族",
  "学習",
  "デジタル活用",
  "人間関係",
  "防災・安全",
  "お金の基本・節約",
  "副業・収入増",
  "投資入門",
  "節税・確定申告",
  "マインド・習慣",
];
