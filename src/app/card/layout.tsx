import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Happy Birthday, Sydney! 🎂',
  description: 'A special birthday card just for you.',
};

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="card-theme min-h-screen"
      style={{ backgroundColor: 'var(--card-bg)' }}
    >
      {children}
    </div>
  );
}
