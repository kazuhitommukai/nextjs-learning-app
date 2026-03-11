export default function Loading() {
  return (
    <main className="p-4">
      {/* Tailwind CSSの animate-pulse で、文字をフワフワ点滅させます */}
      <div className="text-xl font-bold text-blue-500 animate-pulse">
        ⏳ データを取得中...（15秒スリープしています）
      </div>
    </main>
  );
}