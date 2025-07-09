
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105';
  
  let variantStyles = '';
  switch (variant) {
    case 'primary': // Green themed
      variantStyles = 'bg-railway-green hover:bg-green-700 text-white focus:ring-railway-green';
      break;
    case 'secondary': // Blue themed
      variantStyles = 'bg-brand-primary hover:bg-blue-800 text-white focus:ring-brand-primary';
      break;
    case 'outline': // Green outline
      variantStyles = 'bg-transparent border-2 border-railway-green text-railway-green hover:bg-railway-green hover:text-white focus:ring-railway-green';
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-4 py-2 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-6 py-2.5 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-8 py-3 text-lg';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
