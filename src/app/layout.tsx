import '../styles/global.css';

export const metadata = {
  title: 'No Worry App',
  description: 'Created by bro 👊',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background min-h-screen text-black">
        {children}
      </body>
    </html>
  );
}


