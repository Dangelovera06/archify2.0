import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set the target date (adjust this to your desired end date)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // 2 days from now

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const totalHours = (timeLeft.days * 24) + timeLeft.hours;
    return `${totalHours}hrs ${timeLeft.minutes}mins ${timeLeft.seconds}secs`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:py-4 backdrop-blur-xl" style={{
      background: 'var(--black)',
      borderBottom: '1px solid var(--alpha-white-10)'
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo/Brand Name */}
        <div className="text-base sm:text-xl md:text-2xl font-semibold whitespace-nowrap flex-shrink-0" style={{ color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
          Archify.io
        </div>
        
        {/* Countdown Timer */}
        <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm md:text-base flex-shrink min-w-0">
          <span className="font-semibold hidden sm:inline" style={{ color: 'var(--white)' }}>
            Offer ends in:
          </span>
          <span className="font-extrabold text-[10px] sm:text-base md:text-lg tabular-nums whitespace-nowrap" style={{ color: 'var(--brand-200)' }}>
            {formatTime()}
          </span>
        </div>
        
        {/* CTA Button */}
        <a
          href="https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center gap-2 rounded-lg px-3 sm:px-5 py-1.5 sm:py-2.5 text-black transition-all active:translate-y-px active:scale-[0.99] hover:saturate-110 hover:brightness-105 text-xs sm:text-base font-semibold whitespace-nowrap flex-shrink-0"
          style={{
            background: "linear-gradient(290deg, #ffd999 0%, #ffb433 30.2857%, #f5d49a 67.2878%, #ffb433 100%)",
            boxShadow: "0 1px 0 rgba(0,0,0,.08)"
          }}
        >
          <span 
            className="pointer-events-none absolute inset-0 rounded-lg blur-[8px] opacity-40"
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, #ffc766 0%, rgba(0,0,0,0) 100%)"
            }}
          />
          <span className="relative">Join Now</span>
        </a>
      </div>
    </div>
  );
}

