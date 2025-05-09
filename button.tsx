import React from 'react';

interface ButtonProps {
  onClick?: () => void; // Optional now
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
import Link from 'next/link';
import { Button } from '@/components/ui/button'

<Link href="/dashboard">
  <Button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Go to Dashboard
  </Button>
</Link>

