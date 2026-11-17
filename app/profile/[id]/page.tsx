// app/profile/[id]/page.tsx
import Link from "next/link";


type Props = {
  params: Promise<{ id: string }>;
};

// APIから返ってくるデータの型を定義（使う項目だけでOK）
type ApiUser = {
  id: number;
  name: string;
  email: string;
  website: string;
};

export default async function ProfileDetailPage({ params }: Props) {
  const { id } = await params;

  // ★ URLの id を使ってAPIから該当ユーザーのデータを取得！
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: ApiUser = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {user.name} さんの詳細（ID: {id}）
      </h1>
      <p className="text-gray-700">メール：{user.email}</p>
      <p className="text-gray-700 mb-4">Webサイト：{user.website}</p>

      <Link href="/profile" className="text-blue-500 hover:underline">
        ← プロフィール一覧に戻る
      </Link>
    </div>
  );
}