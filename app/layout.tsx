// app/layout.tsx
import '../styles/globals.css';

export const metadata = {
  title: 'No Worry App',
  description: 'Investment app made easy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
