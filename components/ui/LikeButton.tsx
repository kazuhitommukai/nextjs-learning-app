"use client";
import { useState } from "react";



export default function LikeButton() {
  // 2. [現在の値, 値を変える関数] = useState(最初の値) をセットで作る
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <button
        onClick={() => setLikes(likes + 1)} // 3. ボタンを押したら「現在の値 + 1」に更新！
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
        >
        ❤️ いいね！ {likes}
      </button>

      <p className="mt-1 text-sm text-gray-700">
        {likes >= 5 ? "🔥 大人気！" : "応援してね"}
      </p>
    </div>
  );
}