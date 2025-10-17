export default function PricingBadge() {
  return (
    <div className="flex items-center justify-center gap-3 px-4">
      <span 
        className="text-2xl sm:text-3xl font-bold line-through opacity-60"
        style={{ color: 'var(--neutral-400)' }}
      >
        $997
      </span>
      <span 
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        style={{ color: 'var(--brand-200)' }}
      >
        $329
      </span>
      <span className="text-sm sm:text-base" style={{ color: 'var(--white)' }}>
        Save <span style={{ color: 'var(--brand-200)' }} className="font-bold">$668</span>
      </span>
    </div>
  );
}

