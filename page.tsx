import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiTrendingUp, FiHome, FiBriefcase, FiDollarSign, FiSettings } from "lucide-react";

const InvestmentApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 drop-shadow-lg">No Worry App</h1>
      
      {/* Portfolio Summary */}
      <Card className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-6 mb-8 transform transition duration-300 hover:scale-105">
        <CardContent className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-lg">Total Portfolio</p>
            <h2 className="text-3xl font-extrabold text-gray-900">$100,000 USDT</h2>
          </div>
          <FiTrendingUp className="text-green-500 text-5xl" />
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        <Button variant="outline" className="flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg bg-white hover:bg-blue-200 transition-all">
          <FiDollarSign className="text-blue-600" /> Link Bank
        </Button>
        <Button variant="outline" className="flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg bg-white hover:bg-green-200 transition-all">
          <FiBriefcase className="text-green-600" /> Crypto & Stocks
        </Button>
        <Button variant="outline" className="flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg bg-white hover:bg-yellow-200 transition-all">
          <FiHome className="text-yellow-600" /> Real Estate
        </Button>
        <Button variant="outline" className="flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg bg-white hover:bg-gray-300 transition-all">
          <FiSettings className="text-gray-600" /> Settings
        </Button>
      </div>
    </div>
  );
};

export default InvestmentApp;
