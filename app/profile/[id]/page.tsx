// app/profile/[id]/page.tsx
import Link from "next/link";

// 1. Next.jsから渡される params の型定義（フォルダ名が [id] なので { id: string }）
type Props = {
  params: Promise<{ id: string }>;
};

// 2. async をつけた関数にして、await params で id を取り出す
export default async function ProfileDetailPage({ params }: Props) {
  const { id } = await params; // URLが /profile/1 なら、id には "1" が入る！

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        ユーザーID：{id} の詳細ページです
      </h1>
      <Link href="/profile" className="text-blue-500 hover:underline">
        ← プロフィール一覧に戻る
      </Link>
    </div>
  );
}