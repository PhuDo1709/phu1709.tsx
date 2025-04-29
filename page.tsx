// ✅ Imports must always be at the top
import Image from "next/image";
import styles from "./page.module.css"; // Make sure this file exists too

// ✅ Your functional component
export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to No Worry App</h1>
      <Image src="/logo.png" alt="No Worry Logo" width={200} height={200} />
      <p>This app helps you grow your money stress-free!</p>
    </div>
  );
}
