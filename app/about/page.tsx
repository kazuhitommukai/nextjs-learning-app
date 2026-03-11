"use client";

export default function AboutPage() {
  return (
    <main>
      <h1>About This Project</h1>
      <p>これはNext.js 15の学習用プロジェクトです。</p>

      <button 
        onClick={() => alert("クリックされました！")} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        クリックしてね
      </button>
    </main>
  );
}