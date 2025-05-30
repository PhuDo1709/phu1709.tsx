import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1">
          <Topbar />
          {children}
        </main>
      </body>
    </html>
  );
}




