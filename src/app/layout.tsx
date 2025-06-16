import '../styles/globals.css';

export const metadata = {
  title: 'No Worry App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-brand-light">{children}</body>
    </html>
  );
}







