export default function Topbar() {
  return (
    <div className="w-full bg-surface text-textPrimary flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold text-primary">No Worry App</h1>
      <div className="space-x-4">
        <button className="text-sm font-medium text-accent hover:underline">Login</button>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primaryHover">Sign Up</button>
      </div>
    </div>
  )
}


