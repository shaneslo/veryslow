'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface SlideImage {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  images?: SlideImage[];
}

const PLACEHOLDER_COUNT = 4;

function PlaceholderSlide({ index }: { index: number }) {
  const gradients = [
    'linear-gradient(135deg, #F5C842 0%, #F0A0B0 100%)',
    'linear-gradient(135deg, #FAF0D7 0%, #D4A853 100%)',
    'linear-gradient(135deg, #F0A0B0 0%, #FDF6E3 100%)',
    'linear-gradient(135deg, #D4A853 0%, #F5C842 50%, #F0A0B0 100%)',
  ];
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      style={{
        background: gradients[index % gradients.length],
        minHeight: 260,
      }}
      aria-label={`Photo placeholder ${index + 1}`}
    >
      {/* Camera icon */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        style={{ opacity: 0.55, marginBottom: 12 }}
      >
        <path
          d="M8 16h4l4-6h16l4 6h4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2z"
          stroke="#5C3A1E"
          strokeWidth="2"
          fill="rgba(255,255,255,0.4)"
        />
        <circle cx="24" cy="28" r="7" stroke="#5C3A1E" strokeWidth="2" fill="rgba(255,255,255,0.3)" />
      </svg>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.72rem',
          color: '#5C3A1E',
          opacity: 0.7,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
        }}
      >
        Photo coming soon
      </span>
    </div>
  );
}

export default function PhotoCarousel({ images }: PhotoCarouselProps) {
  const slides: Array<SlideImage | null> = images && images.length > 0
    ? images
    : Array.from({ length: PLACEHOLDER_COUNT }, () => null);

  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const regionRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex(i => Math.min(slides.length - 1, i + 1)), [slides.length]);

  // Keyboard support when region is focused
  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    };
    el.addEventListener('keydown', handleKey);
    return () => el.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const atStart = index === 0;
  const atEnd = index === slides.length - 1;

  return (
    <div
      ref={regionRef}
      role="region"
      aria-label="Photo gallery"
      tabIndex={0}
      className="w-full max-w-xl mx-auto outline-none focus-visible:outline-none"
      style={{ position: 'relative' }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--muted-foreground)',
          textAlign: 'center',
          marginBottom: 12,
        }}
      >
        Memories
      </p>

      {/* Slide viewport */}
      <div
        className="overflow-hidden w-full"
        style={{
          border: '2px solid var(--gold-primary)',
          position: 'relative',
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides strip */}
        <div
          style={{
            display: 'flex',
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 600ms ease-in-out',
            willChange: 'transform',
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slides.length}`}
              style={{ minWidth: '100%', flexShrink: 0 }}
            >
              {slide ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={slide.src}
                  alt={slide.alt}
                  style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <PlaceholderSlide index={i} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-between mt-4 px-1">
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={atStart}
          aria-label="Previous photo"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.25rem',
            background: 'none',
            border: '2px solid var(--gold-primary)',
            color: atStart ? 'var(--muted-foreground)' : 'var(--foreground)',
            cursor: atStart ? 'default' : 'pointer',
            padding: '6px 14px',
            lineHeight: 1,
            opacity: atStart ? 0.35 : 1,
            transition: 'opacity 150ms, color 150ms',
          }}
        >
          ←
        </button>

        {/* Dot indicators */}
        <div role="tablist" aria-label="Slide indicators" style={{ display: 'flex', gap: 8 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                borderRadius: 0,
                border: 'none',
                background: i === index ? 'var(--gold-primary)' : 'var(--muted-foreground)',
                cursor: 'pointer',
                padding: 0,
                opacity: i === index ? 1 : 0.45,
                transition: 'width 300ms ease, opacity 200ms',
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          disabled={atEnd}
          aria-label="Next photo"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.25rem',
            background: 'none',
            border: '2px solid var(--gold-primary)',
            color: atEnd ? 'var(--muted-foreground)' : 'var(--foreground)',
            cursor: atEnd ? 'default' : 'pointer',
            padding: '6px 14px',
            lineHeight: 1,
            opacity: atEnd ? 0.35 : 1,
            transition: 'opacity 150ms, color 150ms',
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}
