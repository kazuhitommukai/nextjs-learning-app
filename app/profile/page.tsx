import Link from "next/link";
import ProfileCard from "@/components/ProfileCard"; // 1. 部品を読み込む

export default function ProfilePage() {
    return (
        <div className="p-6 bg-white border rounded-xl shadow-md max-w-md">
            <h1 className="text-2xl font-bold text-blue-600 mb-2">Profile</h1>            
            <ProfileCard />
            <ProfileCard />
            <Link href="/">トップへ戻る</Link>
        </div>        
    );
}