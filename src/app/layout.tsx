import '../styles/globals.css'; // ✅ correct import

import type { ReactNode } from 'react';

export const metadata = {
  title: 'No Worry App',
  description: 'Created by bro 👊',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary">{children}</body>
    </html>
  );
}









