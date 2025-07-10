import '../styles/globals.css'; // ✅ must be here

import type { ReactNode } from 'react';

export const metadata = {
  title: 'No Worry App',
  description: 'Created by bro 👊',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-light text-brand-dark">{children}</body>
    </html>
  );
}








