import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
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

const InvestmentApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 drop-shadow-lg">
        No Worry App
      </h1>
      {/* ... rest of your UI ... */}
    </div>
  );
};

export default function HomePage() {
  return <InvestmentApp />;
}


