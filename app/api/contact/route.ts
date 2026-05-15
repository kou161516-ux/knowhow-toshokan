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
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "入力内容が不正です" }, { status: 400 });
  }

  const { name, email, message } = body as {
    name: string;
    email: string;
    message: string;
  };

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
    const err = await res.text();
    console.error("LINE API error:", err);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
