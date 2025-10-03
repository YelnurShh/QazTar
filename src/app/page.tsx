"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [fact, setFact] = useState<string>("");

  useEffect(() => {
    const facts = [
      "1465 жылы Керей мен Жәнібек сұлтандардың бастауымен алғашқы Қазақ хандығы құрылды. Бұл оқиға қазақ мемлекеттілігінің іргетасы болып саналады.",
      "1726 жылы Ордабасыда қазақтың үш жүзі бірігіп, жоңғар шапқыншылығына қарсы біртұтас халықтық майдан құрды.",
      "1710 жылы Қарақұм құрылтайында қазақ рулары жиналып, жоңғарларға қарсы күресте біріккен шешім қабылдады.",
      "1936 жылы Қазақ АКСР-і одақтас республика мәртебесін алды.",
      "1991 жылы 16 желтоқсанда Қазақстан Республикасының Тәуелсіздігі жарияланды.",
      "1986 жылы желтоқсанда Алматыда қазақ жастары Кеңес саясатына қарсы бейбіт шеруге шықты."
    ];
    setFact(facts[Math.floor(Math.random() * facts.length)]);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 to-blue-400 text-white px-4 md:px-8">
      {/* 🔹 Header */}
      <header className="w-full flex justify-between items-center py-4">
        <h1 className="text-xl md:text-2xl font-bold"></h1>

        <div className="flex gap-2 md:gap-4">
          {loading ? null : user ? (
            <Link
              href="/profile"
              className="bg-white text-blue-600 text-sm md:text-base font-semibold px-3 md:px-4 py-2 rounded-xl shadow hover:bg-blue-100 transition"
            >
              Профиль
            </Link>
          ) : (
            <>
              <Link
                href="/auth/sign_in"
                className="bg-white text-blue-600 text-sm md:text-base font-semibold px-3 md:px-4 py-2 rounded-xl shadow hover:bg-blue-100 transition"
              >
                Кіру
              </Link>
              <Link
                href="/auth/signup"
                className="bg-yellow-400 text-blue-900 text-sm md:text-base font-semibold px-3 md:px-4 py-2 rounded-xl shadow hover:bg-yellow-300 transition"
              >
                Тіркелу
              </Link>
            </>
          )}
        </div>
      </header>

      {/* 🔹 Контент */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
          Қазақстан тарихын заманауи әдіспен үйрен!
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mb-6 md:mb-8">
          Тарихи фактілер, викториналар және қызықты деректер!
        </p>

        {/* 📜 Тарихи факт картасы */}
        <section className="bg-white text-blue-800 rounded-2xl shadow-lg mt-6 md:mt-10 max-w-2xl w-full p-5 md:p-8 mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-3">📜 Бүгінгі тарихи факт</h2>
          <p className="text-base md:text-lg leading-relaxed">{fact}</p>
        </section>

        {/* 📚 Сабақтарға өту батырмасы */}
        <section className="mt-6 md:mt-8">
          <Link
            href="/topics"
            className="bg-yellow-400 text-blue-900 font-semibold px-5 md:px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition text-base md:text-lg"
          >
            📚 Сабақтарға өту
          </Link>
        </section>
      </div>
    </main>
  );
}
