// pages/_app.tsx
import '@/styles/global.css'; // Adjust if needed
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
