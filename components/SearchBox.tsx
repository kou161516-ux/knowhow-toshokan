"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [value, setValue] = useState(initialQ);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setValue(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      const trimmed = value.trim();
      if (trimmed) {
        params.set("q", trimmed);
      } else {
        params.delete("q");
      }
      const qs = params.toString();
      startTransition(() => {
        router.replace(qs ? `/?${qs}` : "/", { scroll: false });
      });
    }, 250);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="記事を検索（タイトル・本文）"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-white border border-gray-200 rounded-full px-5 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
        {isPending ? "…" : "🔍"}
      </span>
    </div>
  );
}
