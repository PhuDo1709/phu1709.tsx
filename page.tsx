// ✅ All imports at the top
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./page.module.css";
import {
  FiTrendingUp,
  FiHome,
  FiBriefcase,
  FiDollarSign,
  FiSettings,
} from "lucide-react";

// ✅ Component starts here
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to No Worry App</h1>
      {/* More UI here */}
    </div>
  );
}
