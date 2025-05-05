// src/components/ui/button.tsx

"use client"; // <-- Add this line at the very top

import { useRouter } from "next/navigation";  // Ensure it's used only on the client-side
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
 
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;



