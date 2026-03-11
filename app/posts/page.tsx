// 1. TypeScriptの型定義（PostsAPIから返ってくるデータの形）
type Post = {
  id: number;
  title: string;
  body: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// 2. コンポーネントに `async` をつけるのが最大のポイント！
export default async function PostsPage() {


  // ★ ここで意図的に15秒待機させます！
  await sleep(6000);

  // ★ ここで意図的にエラーを発生させます！
//   throw new Error("意図的なデータベース接続エラー！");

  // 3. サーバー側でデータを fetch する
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts List (Server Fetching)</h1>
      <ul className="space-y-4">
        {/* APIは100件のデータを返すので、見やすいように最初の10件だけ表示します */}
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-4 border rounded shadow-sm">
            <h2 className="font-semibold text-lg capitalize">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}