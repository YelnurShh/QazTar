"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Лого */}
        <h1 className="text-2xl font-bold">🇰🇿 QAZTAR</h1>

        {/* 🧭 Навигация — ПК үшін */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:underline">Басты бет</Link>
          <Link href="/topics" className="hover:underline">Тақырыптар</Link>
          <Link href="/quiz" className="hover:underline">Тест</Link>
          <Link href="/profile" className="hover:underline">Профиль</Link>
        </nav>

        {/* 📱 Мобиль мәзірді ашу/жабу батырмасы */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-blue-700 transition text-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Навигацияны ашу"
        >
          {menuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* 📱 Мобиль мәзір */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-blue-700 py-4 space-y-3">
          <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>
            Басты бет
          </Link>
          <Link href="/topics" className="hover:underline" onClick={() => setMenuOpen(false)}>
            Тақырыптар
          </Link>
          <Link href="/quiz" className="hover:underline" onClick={() => setMenuOpen(false)}>
            Тест
          </Link>
          <Link href="/profile" className="hover:underline" onClick={() => setMenuOpen(false)}>
            Профиль
          </Link>
        </nav>
      )}
    </header>
  );
}
