// app/posts/error.tsx
"use client"; // ← エラーコンポーネントは必ず Client Component にします！

import { useEffect } from "react";

// Next.jsから error (エラー情報) と reset (再試行関数) が渡されます
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  // エラーの内容をブラウザのコンソールに出力して確認できるようにします
  useEffect(() => {
    console.error("発生したエラー:", error);
  }, [error]);

  return (
    <main className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
      <h2 className="text-xl font-bold mb-2">🚨 エラーが発生しました！</h2>
      <p className="mb-4">データの取得に失敗しました。時間をおいて再度お試しください。</p>
      
      {/* ユーザーが「もう一度試す」ためのボタン */}
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        もう一度試す
      </button>
    </main>
  );
}