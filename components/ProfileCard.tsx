
export default function ProfileCard() {
  // 部品の中で使う変数
  const userName = "ジロウ";
  const age = 30;

  return (
    <div className="p-4 border rounded">

            <p className="mt-33 text-gray-600">趣味は、読書と映画観賞です。</p>
            <p className="mt-33 text-gray-600">名前は{userName}、年齢は{age}歳です。</p>

    </div>
  );
}