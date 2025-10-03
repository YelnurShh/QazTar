"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">🇰🇿 QAZTAR</h1>

        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">🏠 Басты бет</Link>
          <Link href="/topics" className="hover:underline">📚 Тақырыптар</Link>
          <Link href="/quiz" className="hover:underline">📝 Тест</Link>
          <Link href="/profile" className="hover:underline">👤 Профиль</Link>
        </nav>
      </div>
    </header>
  );
}
