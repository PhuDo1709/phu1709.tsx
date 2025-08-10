export default function MainPage() {
  return (
    <main className="min-h-screen bg-brand-light text-gray-900 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-4xl font-extrabold text-brand-primary mb-6">
          No Worry App
        </h1>
        <ul className="space-y-3 text-lg">
          <li className="p-3 bg-brand-primary text-white rounded-lg shadow-sm hover:bg-blue-600 transition">
            1. Bank
          </li>
          <li className="p-3 bg-brand-primary text-white rounded-lg shadow-sm hover:bg-blue-600 transition">
            2. Saving
          </li>
          <li className="p-3 bg-brand-primary text-white rounded-lg shadow-sm hover:bg-blue-600 transition">
            3. Stock
          </li>
          <li className="p-3 bg-brand-primary text-white rounded-lg shadow-sm hover:bg-blue-600 transition">
            4. Real Estate
          </li>
          <li className="p-3 bg-brand-primary text-white rounded-lg shadow-sm hover:bg-blue-600 transition">
            5. Crypto
          </li>
          <li className="p-3 bg-brand-primary text-white rounded-lg shadow-sm hover:bg-blue-600 transition">
            6. Finance
          </li>
        </ul>
        <p className="mt-6 text-gray-500 italic">
          Hello from Mr. Color 👋 — always making your app brighter.
        </p>
      </div>
    </main>
  );
}
