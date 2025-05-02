// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string; // Optional: allows for custom styles
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
