import './globals.css'; // ✅ MUST BE HERE

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


