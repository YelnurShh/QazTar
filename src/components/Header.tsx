"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // 🧭 иконкалар

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* ✅ Logo */}
        <h1 className="text-2xl font-bold">🇰🇿 QAZTAR</h1>

        {/* ✅ Desktop навигация */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:underline">
            🏠 Басты бет
          </Link>
          <Link href="/topics" className="hover:underline">
            📚 Тақырыптар
          </Link>
          <Link href="/quiz" className="hover:underline">
            📝 Тест
          </Link>
          <Link href="/profile" className="hover:underline">
            👤 Профиль
          </Link>
        </nav>

        {/* ✅ Mobile menu icon */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-blue-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Навигацияны ашу"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile навигация (ашылатын меню) */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-4 bg-blue-700">
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            🏠 Басты бет
          </Link>
          <Link
            href="/topics"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            📚 Тақырыптар
          </Link>
          <Link
            href="/quiz"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            📝 Тест
          </Link>
          <Link
            href="/profile"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            👤 Профиль
          </Link>
        </nav>
      )}
    </header>
  );
}
