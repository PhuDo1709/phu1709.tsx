// ✅ Put all imports first
import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to No Worry App</h1>
      <p>Grow your money. Raise your children.</p>
      <Image
        src="/logo.png"
        alt="No Worry App Logo"
        width={150}
        height={150}
      />
    </div>
  );
}
