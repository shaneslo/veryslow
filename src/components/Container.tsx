/**
 * Container component
 * 
 * Implements Minimalist Monochrome layout patterns:
 * - max-w-6xl (72rem)
 * - px-6 md:px-8 lg:px-12 (responsive padding)
 * - Center alignment
 */

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-6xl px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
