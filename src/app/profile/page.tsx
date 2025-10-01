"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/auth/sign_in");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/"); 
  };

  if (loading) {
    return <p className="text-center mt-10">Жүктеліп жатыр...</p>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 text-white px-6">
      <h1 className="text-3xl font-bold mb-4">👤 Профиль</h1>
      {user && (
        <div className="bg-white text-blue-900 rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
          <p className="text-lg font-semibold mb-2">📧 {user.email}</p>
          <p className="text-sm text-gray-600 mb-6">UID: {user.uid}</p>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-600 transition font-semibold w-full"
          >
            🔒 Шығу
          </button>
        </div>
      )}
    </main>
  );
}
