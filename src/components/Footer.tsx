export default function Footer() {
  return (
    <footer className="w-full bg-blue-700 text-white py-4 mt-10">
      <div className="max-w-6xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} QazTar. Барлық құқықтар қорғалған.</p>
        <p className="mt-1">📞 Байланыс: info@qaztar.kz</p>
      </div>
    </footer>
  );
}
