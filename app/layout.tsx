import type { ReactNode } from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'No Worry App',
  description: 'Created by bro 👊',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

