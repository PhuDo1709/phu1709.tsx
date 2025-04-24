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
      {/* ...your content here */}
    </div>
  );
};

export default function HomePage() {
  return <InvestmentApp />;
}


