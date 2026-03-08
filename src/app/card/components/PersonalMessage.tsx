export default function PersonalMessage() {
  return (
    <div
      className="w-full max-w-xl mx-auto px-2"
      style={{ color: 'var(--foreground)' }}
    >
      {/* Decorative rule */}
      <div
        className="w-16 mx-auto mb-8"
        style={{ height: 2, backgroundColor: 'var(--gold-primary)' }}
      />

      {/* Salutation */}
      <p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'var(--gold-primary)',
          marginBottom: '1.25rem',
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
          textAlign: 'center',
        }}
      >
        My dearest Sydney,
      </p>

      {/* Body */}
      <div
        style={{
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontSize: '1.0625rem',
          lineHeight: 1.75,
          color: 'var(--foreground)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <p>
          Today the world is a better place simply because you&apos;re in it.
          Your warmth, your laugh, and the way you light up every room you walk
          into — these are gifts you give to everyone lucky enough to know you.
        </p>
        <p>
          On your birthday, I want you to know how deeply you are loved and how
          much your presence means to me. Every day with you is something I
          never take for granted.
        </p>
        <p>
          Here&apos;s to you — to adventures yet to come, to every dream you
          deserve to chase, and to all the beautiful moments still ahead. May
          this year bring you everything that makes your heart full.
        </p>
      </div>

      {/* Sign-off */}
      <p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.125rem',
          fontStyle: 'italic',
          color: 'var(--gold-primary)',
          marginTop: '1.75rem',
          textAlign: 'center',
          letterSpacing: '0.01em',
        }}
      >
        With all my love,
        <br />
        <span style={{ fontWeight: 700, fontStyle: 'normal' }}>Shane</span>
      </p>

      {/* Decorative rule */}
      <div
        className="w-16 mx-auto mt-8"
        style={{ height: 2, backgroundColor: 'var(--gold-primary)' }}
      />
    </div>
  );
}
