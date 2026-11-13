export default function ProfilePage() {

  const userName = "タロウ";
  const age = 25;

    return (
        <div>
            <h1>Profile</h1>
            <p>趣味は、読書と映画観賞です。</p>
            <p>名前は{userName}、年齢は{age}歳です。</p>
        </div>
    );
}