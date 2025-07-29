export default function Home() {
  return (
    <main className="p-8">
      <div className="bg-brand-dark text-brand-light p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-brand-primary">🎨 Tailwind Colors Working</h1>
        <p className="mt-4">This should have a dark background and light text.</p>
      <div className="bg-[#1A73E8] text-white p-6">
       If this shows blue, Tailwind is working but config is not.
      </div>
    </main>
  );
}



