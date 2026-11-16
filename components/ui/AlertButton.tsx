"use client"; // ボタンだけをClient Componentにする

export default function AlertButton() {
  return (
    <button 
      onClick={() => alert("部品化されたボタンです！")} 
      className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      クリックしてね
    </button>
  );
}