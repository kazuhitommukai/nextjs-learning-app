export default function ProfilePage() {

  const userName = "タロウ";
  const age = 25;

    return (
        <div className="p-6 bg-white border rounded-xl shadow-md max-w-md">
            <h1 className="text-2xl font-bold text-blue-600 mb-2">Profile</h1>
            <p className="mt-33 text-gray-600">趣味は、読書と映画観賞です。</p>
            <p className="mt-33 text-gray-600">名前は{userName}、年齢は{age}歳です。</p>
        </div>
    );
}