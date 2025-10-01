"use client";

import Link from "next/link";

const topics = [
  { id: "kazakh-khanate", title: "Қазақ хандығының құрылуы" },
  { id: "abulkhair-khan", title: "Әбілқайыр хандығы" },
  { id: "kazakh-rus", title: "Қазақ–Ресей қарым-қатынастары" },
  { id: "alash", title: "Алаш қозғалысы" },
  { id: "independence", title: "Қазақстанның тәуелсіздігі" },
];

export default function TopicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📚 8-сынып Қазақстан тарихы
      </h1>

      <div className="grid gap-4 max-w-2xl mx-auto">
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
    </main>
  );
}
