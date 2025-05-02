// app/dashboard/page.tsx
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <p className="text-lg font-semibold">Investment Overview</p>
            <p className="text-sm text-gray-600">Track your total balance and returns.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-lg font-semibold">Real Estate Projects</p>
            <p className="text-sm text-gray-600">See what’s trending or upcoming.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-lg font-semibold">Settings</p>
            <p className="text-sm text-gray-600">Manage your preferences and account.</p>
            <Link href="/">
              <Button className="mt-3">Go Back Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
