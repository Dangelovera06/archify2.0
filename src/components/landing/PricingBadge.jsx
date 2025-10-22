export default function PricingBadge() {
  return (
    <div className="flex items-center justify-center gap-3 px-4">
      <span 
        className="text-2xl sm:text-3xl font-bold line-through text-white/40"
      >
        $997
      </span>
      <span 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400"
      >
        $329
      </span>
    </div>
  );
}
