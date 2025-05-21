import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-full font-medium transition-all duration-200 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-green-500 hover:bg-green-600 text-black',
    secondary: 'bg-white hover:bg-gray-200 text-black',
    outline: 'bg-transparent border border-white hover:bg-white/10 text-white'
  };
  
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;