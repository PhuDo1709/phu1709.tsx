import Topbar from '@/components/topbar'
import Sidebar from '@/components/sidebar'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          {children}
        </div>
      </body>
    </html>
  )
}





