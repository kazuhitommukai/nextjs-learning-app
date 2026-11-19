import Link from "next/link";
import TodosCard from "@/app/todos/_components/TodosCard";

export default function TodosPage() {
  return (
    <div className="p-6 max-w-md">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">メモ帳（ToDoリスト）</h1>

      {/* メモ帳の本体コンポーネントを1つ配置 */}
      <TodosCard />

      <Link href="/" className="text-blue-500 hover:underline">
        ← トップへ戻る
      </Link>
    </div>
  );
}