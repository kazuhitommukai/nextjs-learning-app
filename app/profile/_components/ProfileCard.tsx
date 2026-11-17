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
  const [memo, setMemo] = useState("");

  return (
    <div className="p-4 border rounded mb-4">
      <p className="text-gray-600">趣味は、{hobby}です。</p>
      <p className="text-gray-600">名前は{userName}、年齢は{age}歳です。</p>
      <LikeButton />
      <input
        type="text"
        value={memo}                               // Stateの値を表示
        onChange={(e) => setMemo(e.target.value)}  // 1文字打つたびにStateを更新！
        placeholder="メッセージを入力..."
        className="border p-1 rounded"
      />
      <p>メモ：{memo}</p>
    </div>
  );
}