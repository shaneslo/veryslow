'use client';

import { useEffect, useRef } from 'react';

interface ConfettiCanvasProps {
  active: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  width: number;
  height: number;
  color: string;
  opacity: number;
  lifetime: number;
  age: number;
}

const COLORS = ['#D4A853', '#F5C842', '#F0A0B0', '#E87090', '#FDF6E3', '#FAF0D7', '#FFFDF7', '#C8A0D8'];

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function createParticle(canvasWidth: number, canvasHeight: number): Particle {
  const angle = randomBetween(-Math.PI * 0.9, -Math.PI * 0.1); // upward spread
  const speed = randomBetween(4, 13);
  return {
    x: randomBetween(canvasWidth * 0.2, canvasWidth * 0.8),
    y: randomBetween(canvasHeight * 0.3, canvasHeight * 0.6),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    rotation: randomBetween(0, Math.PI * 2),
    rotationSpeed: randomBetween(-0.15, 0.15),
    width: randomBetween(6, 14),
    height: randomBetween(4, 9),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: 1,
    lifetime: randomBetween(120, 200), // frames
    age: 0,
  };
}

export default function ConfettiCanvas({ active }: ConfettiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Size canvas to viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = Array.from({ length: 130 }, () =>
      createParticle(canvas.width, canvas.height)
    );

    function tick() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let alive = 0;

      for (const p of particles) {
        p.age++;
        p.vy += 0.18; // gravity
        p.vx *= 0.992; // air drag
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Fade out in the last 30% of lifetime
        const fadeStart = p.lifetime * 0.7;
        if (p.age > fadeStart) {
          p.opacity = Math.max(0, 1 - (p.age - fadeStart) / (p.lifetime - fadeStart));
        }

        if (p.opacity > 0 && p.y < canvas.height + 20) {
          alive++;
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
          ctx.restore();
        }
      }

      if (alive > 0) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
}
