/**
 * Button component
 * 
 * Implements Minimalist Monochrome button patterns:
 * - Black background, white text (primary)
 * - Instant color inversion on hover
 * - 3px outline on focus (offset 3px)
 * - Uppercase, monospace, generous padding
 */

import { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export function Button({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'px-8 py-4 font-mono uppercase tracking-widest text-sm border-none transition-colors duration-100 focus-visible:outline-black focus-visible:outline-offset-3 cursor-pointer';

  const variantClasses = {
    primary: 'bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black',
    secondary: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
    ghost: 'bg-transparent text-black border-none hover:border-b-2 hover:border-black',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
