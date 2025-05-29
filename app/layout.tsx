import './globals.css'
import Sidebar from '@/components/sidebar'
import Topbar from '@/components/topbar'

export const metadata = {
  title: 'No Worry App',
  description: 'Invest smart, live easy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-textPrimary">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            <Topbar />
            <div className="p-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}



