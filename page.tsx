// ✅ All imports go at the top
import Image from "next/image";
import styles from "./page.module.css";

// ✅ Function starts after imports
export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to No Worry App</h1>
      <p>This is your investment dashboard starter. Let's grow it step-by-step!</p>
      <Image
        src="/logo.png" // Make sure this image exists in public folder
        alt="No Worry App Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
