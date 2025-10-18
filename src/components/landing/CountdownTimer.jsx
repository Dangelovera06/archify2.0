export default function CountdownTimer() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-2" style={{
      background: 'var(--black)',
      borderBottom: '1px solid var(--alpha-white-10)'
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm">
        <span style={{ color: 'var(--white)' }}>
          Offer ends in:
        </span>
        <span className="font-bold" style={{ color: 'var(--brand-200)' }}>
          1d 18h 20m
        </span>
      </div>
    </div>
  );
}

