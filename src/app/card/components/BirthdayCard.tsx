'use client';

import styles from '../card.module.css';
import PersonalMessage from './PersonalMessage';
import PhotoCarousel from './PhotoCarousel';

interface BirthdayCardProps {
  visible: boolean;
}

export default function BirthdayCard({ visible }: BirthdayCardProps) {
  if (!visible) return null;

  return (
    <div
      className={styles.cardVisible}
      style={{
        width: '100%',
        maxWidth: 640,
        margin: '0 auto',
      }}
    >
      {/* Card container */}
      <div
        style={{
          backgroundColor: 'var(--warm-white)',
          border: '2px solid var(--gold-primary)',
          boxShadow: '0 20px 60px rgba(212,168,83,0.2)',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        {/* Header */}
        <header style={{ textAlign: 'center' }}>
          {/* Decorative sparkles */}
          <div
            aria-hidden="true"
            className={styles.sparklePop}
            style={{
              fontSize: '1.5rem',
              marginBottom: '0.75rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <span>✨</span>
            <span style={{ animationDelay: '80ms' }}>🌸</span>
            <span style={{ animationDelay: '160ms' }}>✨</span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--foreground)',
              margin: 0,
            }}
          >
            Happy Birthday,
          </h1>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--gold-primary)',
              margin: '0.125rem 0 0',
            }}
          >
            Sydney
          </h2>

          {/* Date line */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
              marginTop: '0.875rem',
            }}
          >
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>

        {/* Gold divider */}
        <div style={{ height: 2, backgroundColor: 'var(--gold-primary)', opacity: 0.4 }} />

        {/* Personal message */}
        <PersonalMessage />

        {/* Gold divider */}
        <div style={{ height: 2, backgroundColor: 'var(--gold-primary)', opacity: 0.4 }} />

        {/* Photo carousel */}
        <PhotoCarousel />

        {/* Footer */}
        <footer
          style={{
            textAlign: 'center',
            paddingTop: '0.5rem',
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
              opacity: 0.7,
            }}
          >
            Made with love 🌸
          </p>
        </footer>
      </div>
    </div>
  );
}
