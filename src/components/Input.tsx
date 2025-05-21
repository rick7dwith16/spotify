import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className = '', ...props }, ref) => {
    return (
      <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="block mb-2 text-sm font-medium text-gray-200">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`bg-zinc-800 border ${
            error ? 'border-red-500' : 'border-zinc-700'
          } text-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;