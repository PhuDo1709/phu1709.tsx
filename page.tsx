// ✅ All imports must be here first
import Image from "next/image";
import styles from "./page.module.css";

// ✅ Then the component
export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to No Worry App</h1>
      <p>This is your investment dashboard starter. Let's grow it step-by-step!</p>
      <Image
        src="/logo.png"
        alt="No Worry App Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
