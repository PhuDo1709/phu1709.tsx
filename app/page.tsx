/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import Image from "next/image";
import styles from "./page.module.css";
import {
  TrendingUp,
  Home,
  Briefcase,
  DollarSign,
  Settings,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to No Worry App</h1>
      <Image src="/logo.png" alt="No Worry Logo" width={150} height={150} />
      <p>Helping you invest smarter and live better.</p>
    </div>
  );
}
import Link from 'next/link';

<Link href="/about">
  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
    About Us
  </button>
</Link>
