export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-secondary text-textPrimary p-6">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li className="hover:text-primary cursor-pointer">Dashboard</li>
        <li className="hover:text-primary cursor-pointer">Investments</li>
        <li className="hover:text-primary cursor-pointer">Profile</li>
      </ul>
    </aside>
  )
}


