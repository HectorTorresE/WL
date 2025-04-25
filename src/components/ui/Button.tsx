import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  const variantStyles = {
    primary: 'bg-amber-800 hover:bg-amber-900 text-white focus:ring-amber-500',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500',
    outline: 'border border-amber-800 text-amber-800 hover:bg-amber-50 focus:ring-amber-500',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;