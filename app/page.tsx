<<<<<<< HEAD
// ✅ All imports must come first
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
=======
>>>>>>> d5f7ee3f4b41a4164d974b43322e0de01eef0b73
import Image from "next/image";
import styles from "./page.module.css";
import {
  FiTrendingUp,
  FiHome,
  FiBriefcase,
  FiDollarSign,
  FiSettings,
} from "lucide-react";

<<<<<<< HEAD
// ✅ Then define your page
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to No Worry App</h1>
      {/* More UI here */}
=======
export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to No Worry App</h1>
      <Image src="/logo.png" alt="No Worry Logo" width={150} height={150} />
      <p>Helping you invest smarter and live better.</p>
>>>>>>> d5f7ee3f4b41a4164d974b43322e0de01eef0b73
    </div>
  );
}
