"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "config-error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        const data = await res.json().catch(() => ({}));
        if (data?.error === "設定エラー") {
          setStatus("config-error");
        } else {
          setStatus("error");
        }
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <article className="prose prose-gray max-w-3xl mx-auto">
      <h1>お問い合わせ</h1>
      <p>
        記事の誤情報・リンク切れ・掲載依頼などはこちらからお送りください。
        通常3営業日以内にご返信いたします。
      </p>

      {status === "done" ? (
        <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <p className="text-green-700 font-bold">送信が完了しました</p>
          <p className="text-gray-600 text-sm mt-2">お問い合わせありがとうございます。</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="not-prose space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {status === "error" && (
            <p className="text-red-600 text-sm">送信に失敗しました。時間をおいて再度お試しください。</p>
          )}
          {status === "config-error" && (
            <p className="text-red-600 text-sm">現在お問い合わせフォームは使用できません。後日お試しください。</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            {status === "sending" ? "送信中..." : "送信する"}
          </button>
        </form>
      )}
    </article>
  );
}
