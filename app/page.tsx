import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to No Worry App</h1>
      <Image src="/logo.png" alt="No Worry Logo" width={150} height={150} />
      <p>Helping you invest smarter and live better.</p>
    </div>
  );
}
