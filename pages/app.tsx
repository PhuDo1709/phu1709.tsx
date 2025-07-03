// pages/_app.tsx
import '@/styles/global.css'; // Adjust if needed

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
