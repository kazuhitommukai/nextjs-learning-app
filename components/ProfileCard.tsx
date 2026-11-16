"use client";
// components/ProfileCard.tsx

// 1. 受け取るデータの設計図（型）を作る
type ProfileCardProps = {
  userName: string; // 文字列
  age: number;      // 数値
  hobby: string;    // 文字列
};

// 2. 関数の引数で { userName, age, hobby } を受け取る
// （関数の中の const userName = ... はもう不要になります！）
export default function ProfileCard({ userName, age, hobby }: ProfileCardProps) {
  return (
    <div className="p-4 border rounded mb-4">
      <p className="text-gray-600">趣味は、{hobby}です。</p>
      <p className="text-gray-600">名前は{userName}、年齢は{age}歳です。</p>

      <button
        onClick={() => alert("こんにちは、" + userName + "です！")} // ← 2. () => 処理 の形で書く
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        自己紹介ボタン
    </button>
    </div>
  );
}