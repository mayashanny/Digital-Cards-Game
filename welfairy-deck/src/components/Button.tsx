import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  className,
  disabled,
  ...props 
}) => {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105",
        variant === 'primary' && "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 shadow-lg",
        variant === 'secondary' && "bg-gradient-to-r from-primary-200 to-accent-200 text-primary-900 hover:from-primary-300 hover:to-accent-300",
        disabled && "opacity-50 cursor-not-allowed hover:scale-100",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};