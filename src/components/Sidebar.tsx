// Sidebar.tsx
export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul>
        <li className="mb-4"><a href="#" className="hover:text-yellow-400">Dashboard</a></li>
        <li className="mb-4"><a href="#" className="hover:text-yellow-400">Projects</a></li>
        <li className="mb-4"><a href="#" className="hover:text-yellow-400">Portfolio</a></li>
        <li><a href="#" className="hover:text-yellow-400">Settings</a></li>
      </ul>
    </div>
  );
}

