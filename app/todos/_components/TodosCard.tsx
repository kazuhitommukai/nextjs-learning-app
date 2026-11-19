"use client";
import { useState } from "react";

export default function TodosCard() {
  const [text, setText] = useState("");                   // 入力中の文字
  const [messages, setMessages] = useState<string[]>([]); // 追加されたメモ一覧（配列）

  // ボタンを押したときの処理
  const handleAdd = () => {
    if (text === "") return;          // 空文字のときは何もしない
    setMessages([...messages, text]); // 今までの配列の末尾に text を追加！
    setText("");                      // 入力欄を空っぽに戻す
  };

  return (
    <div className="p-4 bg-white border rounded-xl shadow-sm mb-4">
      {/* 1. 入力欄と追加ボタン */}
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="メモやタスクを入力..."
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          追加
        </button>
      </div>

      {/* 2. 条件分岐：0件のときと、1件以上あるときで表示を切り替え */}
      {messages.length === 0 ? (
        <p className="mt-4 text-sm text-gray-400">まだメモはありません</p>
      ) : (
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}