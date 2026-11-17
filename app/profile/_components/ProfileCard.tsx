"use client";
// components/ProfileCard.tsx
import LikeButton from "@/components/ui/LikeButton";
import { useState } from "react";

// 1. 受け取るデータの設計図（型）を作る
type ProfileCardProps = {
  userName: string; // 文字列
  age: number;      // 数値
  hobby: string;    // 文字列
};

// 2. 関数の引数で { userName, age, hobby } を受け取る
// （関数の中の const userName = ... はもう不要になります！）
export default function ProfileCard({ userName, age, hobby }: ProfileCardProps) {
  const [text, setText] = useState("");                   // 入力中の文字
  const [messages, setMessages] = useState<string[]>([]); // 追加されたメモ一覧（配列）

  // ボタンを押したときの処理
  const handleAdd = () => {
    if (text === "") return;          // 空文字のときは何もしない
    setMessages([...messages, text]); // 今までの配列の末尾に text を追加！
    setText("");                      // 入力欄を空っぽに戻す
  };

  return (
    <div className="p-4 border rounded mb-4">
      <p className="text-gray-600">趣味は、{hobby}です。</p>
      <p className="text-gray-600">名前は{userName}、年齢は{age}歳です。</p>
      <LikeButton />

      <div className="mt-3 flex gap-2">
        <input
          type="text"
          value={text}                               // 入力中のStateを表示
          onChange={(e) => setText(e.target.value)}  // 1文字打つたびにtextを更新
          placeholder="メッセージを入力..."
          className="border p-1 rounded"
        />
        <button
          onClick={handleAdd}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          追加
        </button>
      </div>

      {/* 追加されたメモ一覧を表示 */}
      <ul className="mt-2 list-disc list-inside text-gray-700">
        {messages.map((msg, index) => (
          <li key={index}>メモ：{msg}</li>
        ))}
      </ul>
    </div>
  );
}