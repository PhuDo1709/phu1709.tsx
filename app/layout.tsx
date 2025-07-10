import '../styles/globals.css'; // ✅ This loads Tailwind styles

export const metadata = {
  title: 'No Worry App',
  description: 'Created by bro 👊',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

