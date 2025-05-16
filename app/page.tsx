import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <Hero />
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        If you see a blue box, Tailwind is working!
      </div>
    </main>
  );
}


