/**
 * Typography component
 * 
 * Implements Minimalist Monochrome typography patterns:
 * - Serif fonts for display and body
 * - Monospace for labels
 * - Intentional scaling and tracking
 */

import { ReactNode } from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export function Heading({ level, children, className = '' }: HeadingProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeMap = {
    1: 'text-9xl',
    2: 'text-8xl',
    3: 'text-7xl',
    4: 'text-6xl',
    5: 'text-5xl',
    6: 'text-4xl',
  };

  return (
    <HeadingTag
      className={`font-display ${sizeMap[level]} tracking-tighter leading-tight ${className}`}
    >
      {children}
    </HeadingTag>
  );
}

interface TextProps {
  variant?: 'body' | 'lead' | 'label' | 'caption';
  children: ReactNode;
  className?: string;
}

export function Text({ variant = 'body', children, className = '' }: TextProps) {
  const variantMap = {
    body: 'font-serif text-lg leading-relaxed tracking-normal',
    lead: 'font-serif text-xl leading-relaxed tracking-normal',
    label: 'font-mono text-sm tracking-widest uppercase text-muted-foreground',
    caption: 'font-mono text-xs tracking-widest uppercase text-muted-foreground',
  };

  return (
    <p className={`${variantMap[variant]} ${className}`}>
      {children}
    </p>
  );
}

interface CodeProps {
  children: ReactNode;
  inline?: boolean;
  className?: string;
}

export function Code({ children, inline = false, className = '' }: CodeProps) {
  if (inline) {
    return (
      <code className={`font-mono text-sm bg-muted px-2 py-1 ${className}`}>
        {children}
      </code>
    );
  }

  return (
    <pre className={`font-mono text-sm bg-muted p-4 border border-border-light overflow-x-auto ${className}`}>
      <code>{children}</code>
    </pre>
  );
}
