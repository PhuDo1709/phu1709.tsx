// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 text-gray-800">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
