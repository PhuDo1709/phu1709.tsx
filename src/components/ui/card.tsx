// src/components/ui/card.tsx
import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      {children}
    </div>
  );
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};