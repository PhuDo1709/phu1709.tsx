// components/topbar.tsx

export default function Topbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">Welcome 👋</div>
      <div className="flex items-center space-x-4">
        <span>🔔</span>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full">PD</span>
      </div>
    </header>
  );
}
