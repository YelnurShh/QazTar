"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 text-white px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        🇰🇿 QAZTAR
      </h1>
      <p className="text-lg text-center text-blue-100 mb-8">
        Қазақстан тарихын заманауи әдіспен үйрен!
      </p>

      <div className="flex gap-4">
        {user ? (
          <Link
            href="/profile"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition"
          >
            Профильге өту
          </Link>
        ) : (
          <>
            <Link
              href="/auth/signin"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition"
            >
              Кіру
            </Link>
            <Link
              href="/auth/signup"
              className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
            >
              Тіркелу
            </Link>
          </>
        )}
      </div>

      <section className="bg-white text-blue-800 rounded-2xl shadow-lg mt-16 max-w-xl w-full p-8">
        <h2 className="text-2xl font-bold mb-3">📜 Бүгінгі тарихи факт</h2>
        <p className="text-lg">
          1465 жылы Қазақ хандығы құрылды. Бұл қазақ мемлекеттілігінің бастауы
          болды.
        </p>
      </section>
    </main>
  );
}
