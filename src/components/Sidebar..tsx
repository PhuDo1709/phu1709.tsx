// components/sidebar.tsx

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-6">No Worry</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
        <Link href="/settings" className="hover:text-blue-600">Settings</Link>
      </nav>
    </aside>
  );
}
