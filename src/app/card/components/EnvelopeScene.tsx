'use client';

import { useState, useCallback, useEffect } from 'react';
import styles from '../card.module.css';
import BirthdayCard from './BirthdayCard';
import ConfettiCanvas from './ConfettiCanvas';

type Phase = 'idle' | 'opening' | 'open';

export default function EnvelopeScene() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  const handleOpen = useCallback(() => {
    if (phase !== 'idle') return;
    if (reducedMotion) {
      setPhase('open');
    } else {
      setPhase('opening');
    }
  }, [phase, reducedMotion]);

  const handleCardRiseEnd = useCallback((e: React.AnimationEvent) => {
    if (e.animationName === 'cardRise') {
      setPhase('open');
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen();
    }
  }, [handleOpen]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Envelope — hidden once fully open */}
      {phase !== 'open' && (
        <div
          className={[
            'relative flex flex-col items-center',
            phase === 'idle' ? styles.envelopeWrapper : '',
          ].join(' ')}
          style={{ width: '100%', maxWidth: 360 }}
        >
          {/* Envelope body */}
          <div
            role="button"
            aria-label="Click to open your birthday card"
            tabIndex={0}
            onClick={handleOpen}
            onKeyDown={handleKeyDown}
            className={[
              'relative w-full cursor-pointer select-none',
              phase === 'idle' ? styles.envelopeIdle : '',
              phase === 'opening' ? styles.envelopeFading : '',
            ].join(' ')}
            style={{
              aspectRatio: '4/3',
              backgroundColor: 'var(--cream-secondary)',
              border: '2px solid var(--gold-primary)',
              boxShadow: '0 8px 40px rgba(212,168,83,0.18)',
            }}
          >
            {/* V-fold bottom crease lines */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(135deg, transparent 49.5%, var(--gold-primary) 49.5%, var(--gold-primary) 50.5%, transparent 50.5%),
                  linear-gradient(225deg, transparent 49.5%, var(--gold-primary) 49.5%, var(--gold-primary) 50.5%, transparent 50.5%)
                `,
                opacity: 0.35,
              }}
            />

            {/* Envelope flap (top triangle) */}
            <div
              className={[
                'absolute left-0 right-0 top-0',
                phase === 'opening' ? styles.flapOpening : '',
              ].join(' ')}
              style={{
                height: '50%',
                transformOrigin: 'top center',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 55%, 0 100%)',
                backgroundColor: 'var(--gold-light)',
                border: '0',
                zIndex: 3,
              }}
            >
              {/* Flap seal decoration */}
              <div
                className="absolute"
                style={{
                  bottom: '18%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'var(--pink-deep)',
                  border: '2px solid var(--warm-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                }}
                aria-hidden="true"
              >
                🌸
              </div>
            </div>

            {/* Envelope body center text */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              style={{ paddingTop: '20%' }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.125rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                For Sydney
              </span>
              {phase === 'idle' && (
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--muted-foreground)',
                    letterSpacing: '0.08em',
                    marginTop: 8,
                  }}
                >
                  tap to open ↑
                </span>
              )}
            </div>
          </div>

          {/* Rising card (peeks out above envelope during animation) */}
          {phase === 'opening' && (
            <div
              className={styles.cardRising}
              onAnimationEnd={handleCardRiseEnd}
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                width: '90%',
                maxWidth: 340,
                zIndex: 1,
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--warm-white)',
                  border: '2px solid var(--gold-primary)',
                  boxShadow: '0 16px 48px rgba(212,168,83,0.25)',
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1rem',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.06em',
                  }}
                >
                  Happy Birthday! 🎂
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Full birthday card — shown after envelope opens */}
      <BirthdayCard visible={phase === 'open'} />

      {/* Confetti burst */}
      <ConfettiCanvas active={phase === 'open'} />
    </div>
  );
}
