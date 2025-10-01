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
    // 🔹 Тарихи фактілер массиві (ішке көшірдік)
    const facts = [
      "1465 жылы Керей мен Жәнібек сұлтандардың бастауымен алғашқы Қазақ хандығы құрылды. Бұл оқиға қазақ мемлекеттілігінің іргетасы болып саналады. Хандықтың орталығы Қозыбасы өңірінде орналасқан еді.",
      "1726 жылы Ордабасыда қазақтың үш жүзі бірігіп, жоңғар шапқыншылығына қарсы біртұтас халықтық майдан құрды. Бұл оқиға қазақ халқының бірлігін көрсеткен тарихи кезең болды.",
      "1710 жылы Қарақұм құрылтайында қазақ рулары жиналып, жоңғарларға қарсы күресте біріккен шешім қабылдады. Бұл жиын қазақ тарихындағы ең маңызды халық кеңестерінің бірі ретінде белгілі.",
      "1936 жылы Қазақ Автономиялық Кеңестік Социалистік Республикасы одақтас республика мәртебесін алып, Қазақ Кеңестік Социалистік Республикасы болып қайта құрылды. Бұл қазақ халқының саяси статусының өсуіне ықпал етті.",
      "1991 жылы 16 желтоқсанда Қазақстан Республикасының Тәуелсіздігі жарияланды. Бұл күн қазақ халқының ғасырлар бойғы арманының орындалған сәті ретінде тарихта қалды.",
      "1986 жылы желтоқсан айында Алматыда қазақ жастары Кеңес Одағының әділетсіз саясатына қарсы бейбіт шеруге шықты. Желтоқсан оқиғасы Тәуелсіздікке жету жолындағы шешуші кезең болды."
    ];

    // 🔹 Кездейсоқ факт таңдау
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);

    // 🔹 Firebase аутентификациясын тыңдау
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 to-blue-400 text-white px-6 relative">
      {/* 🔹 Header */}
      <header className="w-full flex justify-between items-center py-4 px-2">
        <h1 className="text-2xl font-bold">🇰🇿 QAZTAR</h1>
        <div className="flex gap-3">
          {loading ? null : user ? (
            <Link
              href="/profile"
              className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-blue-100 transition"
            >
              Профиль
            </Link>
          ) : (
            <>
              <Link
                href="/auth/sign_in"
                className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-blue-100 transition"
              >
                Кіру
              </Link>
              <Link
                href="/auth/signup"
                className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-xl shadow hover:bg-yellow-300 transition"
              >
                Тіркелу
              </Link>
            </>
          )}
        </div>
      </header>

      {/* 🔹 Main content */}
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Қазақстан тарихын заманауи әдіспен үйрен!
        </h1>
        <p className="text-lg text-center text-blue-100 mb-8">
          Тарихи фактілер, викториналар және қызықты деректер!
        </p>

        <section className="bg-white text-blue-800 rounded-2xl shadow-lg mt-10 max-w-2xl w-full p-8">
          <h2 className="text-2xl font-bold mb-3">📜 Бүгінгі тарихи факт</h2>
          <p className="text-lg leading-relaxed">{fact}</p>
        </section>

        <section className="mt-8">
          <Link
            href="/topics"
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
          >
            📚 Сабақтарға өту
          </Link>
        </section>
      </div>
    </main>
  );
}
