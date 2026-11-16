import Link from "next/link";
import ProfileCard from "@/app/profile/_components/ProfileCard"; // 1. 部品を読み込む

export default function ProfilePage() {


  const users = [
    { id: 1, userName: "タロウ", age: 25, hobby: "読書" },
    { id: 2, userName: "ジロウ", age: 30, hobby: "映画鑑賞" },
    { id: 3, userName: "サブロウ", age: 22, hobby: "キャンプ" },
  ];

  return (
    <div>
      {/* 2. 配列.map((1つ分のデータ) => ( 表示するタグ )) で繰り返す */}
      {users.map((user) => (
        <ProfileCard
          key={user.id}           // ★重要：繰り返しの一番外側には必ず一意な key をつける！
          userName={user.userName}
          age={user.age}
          hobby={user.hobby}
        />
      ))}
    </div>
  );
}