import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border rounded-lg shadow-md">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
