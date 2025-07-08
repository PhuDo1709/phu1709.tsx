// src/app/layout.tsx
import '../styles/global.css'; // 👈 this is required

export const metadata = {
  title: 'No Worry App',
  description: 'Your financial buddy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}







