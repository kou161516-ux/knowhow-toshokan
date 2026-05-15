import { NextRequest, NextResponse } from "next/server";

const LINE_API = "https://api.line.me/v2/bot/message/push";

export async function POST(req: NextRequest) {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const userId = process.env.LINE_USER_ID;

  if (!token || !userId) {
    console.error("LINE env vars missing");
    return NextResponse.json({ error: "設定エラー" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "入力内容が不正です" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "入力内容が不正です" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "メールアドレスの形式が正しくありません" }, { status: 400 });
  }

  const lineMessage = [
    "📬 ノウハウ図書館 お問い合わせ",
    `名前：${name}`,
    `メール：${email}`,
    `内容：${message.slice(0, 200)}`,
  ].join("\n");

  const res = await fetch(LINE_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: userId,
      messages: [{ type: "text", text: lineMessage }],
    }),
  });

  if (!res.ok) {
    console.error("LINE API error - status:", res.status);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
