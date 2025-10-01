"use client";

import { useState } from "react";

export default function Quiz({ questions, topicId }: { questions: any[]; topicId: string }) {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [score, setScore] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]); // ✅ әр сұрақтың нәтижесі

  const handleFinish = () => {
    let correct = 0;
    const res: boolean[] = [];

    questions.forEach((q, i) => {
      if (answers[i] === q.a) {
        correct++;
        res.push(true);
      } else {
        res.push(false);
      }
    });

    setScore(correct);
    setResults(res); // ✅ әр сұрақтың нәтижесін сақтаймыз
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">📝 Тест</h2>

      {questions.map((q, i) => (
        <div
          key={i}
          className={`mb-6 p-3 rounded-lg ${
            results.length > 0
              ? results[i]
                ? "bg-green-100 border border-green-400"
                : "bg-red-100 border border-red-400"
              : "bg-gray-50"
          }`}
        >
          <p className="font-medium">{i + 1}. {q.q}</p>
          <div className="mt-2 space-y-2">
            {q.options.map((opt: string, j: number) => (
              <label key={j} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`q-${i}`}
                  value={opt}
                  checked={answers[i] === opt}
                  onChange={() => {
                    const newAnswers = [...answers];
                    newAnswers[i] = opt;
                    setAnswers(newAnswers);
                  }}
                />
                {opt}
              </label>
            ))}
          </div>

          {/* ✅ Егер қате болса дұрыс жауапты көрсетеміз */}
          {results.length > 0 && !results[i] && (
            <p className="mt-2 text-sm text-red-700">
              ❌ Дұрыс жауап: <b>{q.a}</b>
            </p>
          )}
        </div>
      ))}

      <button
        onClick={handleFinish}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ✅ Аяқтау
      </button>

      {score !== null && (
        <p className="mt-4 font-bold">
          Сіздің нәтижеңіз: {score}/{questions.length} балл 🎉
        </p>
      )}
    </div>
  );
}
