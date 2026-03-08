/**
 * Section component
 * 
 * Implements Minimalist Monochrome section patterns:
 * - Standard vertical spacing: py-24 md:py-32 lg:py-40
 * - Optional texture patterns
 * - Optional divider border
 */

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  pattern?: 'horizontal-lines' | 'grid' | 'diagonal-lines' | 'noise' | 'vertical-lines-inverted' | 'radial-inverted' | 'none';
  divider?: 'top' | 'bottom' | 'both' | 'none';
  noPadding?: boolean;
}

export function Section({
  children,
  className = '',
  pattern = 'horizontal-lines',
  divider = 'bottom',
  noPadding = false,
}: SectionProps) {
  const paddingClasses = noPadding ? '' : 'py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12';

  const patternClasses = {
    'horizontal-lines': 'pattern-horizontal-lines',
    'grid': 'pattern-grid',
    'diagonal-lines': 'pattern-diagonal-lines',
    'noise': 'pattern-noise',
    'vertical-lines-inverted': 'pattern-vertical-lines-inverted',
    'radial-inverted': 'pattern-radial-inverted',
    'none': '',
  };

  const dividerClasses = {
    top: 'border-t-2 border-black',
    bottom: 'border-b-2 border-black',
    both: 'border-t-2 border-b-2 border-black',
    none: '',
  };

  return (
    <>
      {divider === 'top' || divider === 'both' ? (
        <div className="h-1 w-full bg-black" />
      ) : null}
      
      <section
        className={`${paddingClasses} relative ${patternClasses[pattern]} ${dividerClasses[divider]} ${className}`}
      >
        {pattern !== 'none' && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: getPatternCSS(pattern),
              opacity: getPatternOpacity(pattern),
            }}
          />
        )}
        <div className="relative z-10">
          {children}
        </div>
      </section>

      {divider === 'bottom' || divider === 'both' ? (
        <div className="h-1 w-full bg-black" />
      ) : null}
    </>
  );
}

function getPatternCSS(pattern: string): string {
  const patterns: Record<string, string> = {
    'horizontal-lines': `repeating-linear-gradient(
      0deg,
      transparent,
      transparent 1px,
      #000 1px,
      #000 2px
    )`,
    'grid': `
      linear-gradient(#00000008 1px, transparent 1px),
      linear-gradient(90deg, #00000008 1px, transparent 1px)
    `,
    'diagonal-lines': `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 40px,
      #00000008 40px,
      #00000008 42px
    )`,
    'vertical-lines-inverted': `repeating-linear-gradient(
      90deg,
      transparent,
      transparent 1px,
      #fff 1px,
      #fff 2px
    )`,
    'radial-inverted': `radial-gradient(
      circle at top center,
      #ffffff,
      transparent 70%
    )`,
  };
  return patterns[pattern] || '';
}

function getPatternOpacity(pattern: string): number {
  const opacities: Record<string, number> = {
    'horizontal-lines': 0.015,
    'grid': 0.015,
    'diagonal-lines': 0.01,
    'noise': 0.02,
    'vertical-lines-inverted': 0.03,
    'radial-inverted': 0.05,
    'none': 0,
  };
  return opacities[pattern] || 0;
}
