"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";

const topics = [
  { id: "kazakh-khanate", title: "Қазақ хандығының құрылуы" },
  { id: "abulkhair-khan", title: "Әбілқайыр хандығы" },
  { id: "kazakh-rus", title: "Қазақ–Ресей қарым-қатынастары" },
  { id: "alash", title: "Алаш қозғалысы" },
  { id: "independence", title: "Қазақстанның тәуелсіздігі" },
];

export default function TopicsPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await fetch(
        `https://kk.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ extract: "Ақпарат табылмады." });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Тарихи тақырыптар
      </h1>

      {/* 🔹 Статикалық тақырыптар */}
      <div className="grid gap-4 max-w-2xl mx-auto mb-8">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={`/topics/${topic.id}`}
            className="block bg-white text-blue-700 font-semibold p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-100 transition duration-200"
          >
            {topic.title}
          </Link>
        ))}
      </div>

      {/* 🔹 Іздеу жолағы */}
      <form
        onSubmit={handleSearch}
        className="max-w-2xl mx-auto mb-6 flex gap-2"
      >
              <input
        type="text"
        placeholder="Кез келген тарихи тақырыпты іздеңіз..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-lg text-white border-2 border-white placeholder-white caret-white"
            />

        <button
  type="submit"
  className="flex items-center gap-2 px-4 py-2 bg-white text-blue-700 font-bold rounded-lg shadow hover:bg-blue-100"
>
  <Search size={18} />
  Іздеу
</button>
      </form>

      {/* 🔹 Нәтиже */}
      {result && (
        <div className="max-w-2xl mx-auto bg-white text-black p-4 rounded-lg shadow">
          {result.thumbnail && (
            <img
              src={result.thumbnail.source}
              alt={result.title}
              className="mb-4 rounded"
            />
          )}
          <h2 className="text-xl font-bold mb-2">{result.title}</h2>
          <p className="mb-2">{result.extract}</p>
          {result.content_urls?.desktop?.page && (
            <a
              href={result.content_urls.desktop.page}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Wikipedia бетіне өту
            </a>
          )}
        </div>
      )}
    </main>
  );
}
