/**
 * Card component
 * 
 * Implements Minimalist Monochrome card patterns:
 * - 1px black border, white background
 * - 8px padding (generous)
 * - Full color inversion on hover (100ms)
 * - Sharp corners (0 border-radius)
 */

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  inverted?: boolean;
  bordered?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  inverted = false,
  bordered = true,
  className = '',
  onClick,
}: CardProps) {
  const baseClasses = 'p-8 transition-colors duration-100';

  const variantClasses = inverted
    ? 'bg-black text-white'
    : `bg-white text-black ${bordered ? 'border-2 border-black' : ''} ${onClick ? 'hover:bg-black hover:text-white cursor-pointer' : ''}`;

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              const key = e.key || (e as any).code;
              if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
