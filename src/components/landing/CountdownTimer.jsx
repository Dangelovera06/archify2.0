import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 z-40 px-4 py-3" style={{
      background: 'linear-gradient(180deg, rgba(15, 15, 16, 0.95) 0%, rgba(15, 15, 16, 0.98) 100%)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--alpha-white-10)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        {/* Left: Limited Time Badge */}
        <div className="flex items-center gap-3">
          <div className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold" style={{ 
            background: 'var(--brand-200)',
            color: 'var(--black)'
          }}>
            LIMITED TIME
          </div>
          <span className="text-sm sm:text-base" style={{ color: 'var(--white)' }}>
            Offer ends in:
          </span>
        </div>

        {/* Right: Countdown */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--brand-200)' }}>
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs font-medium" style={{ color: 'var(--neutral-400)' }}>
              DAYS
            </div>
          </div>
          <span className="text-xl font-bold" style={{ color: 'var(--neutral-400)' }}>:</span>
          
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--brand-200)' }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs font-medium" style={{ color: 'var(--neutral-400)' }}>
              HRS
            </div>
          </div>
          <span className="text-xl font-bold" style={{ color: 'var(--neutral-400)' }}>:</span>
          
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--brand-200)' }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs font-medium" style={{ color: 'var(--neutral-400)' }}>
              MIN
            </div>
          </div>
          <span className="text-xl font-bold" style={{ color: 'var(--neutral-400)' }}>:</span>
          
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--brand-200)' }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs font-medium" style={{ color: 'var(--neutral-400)' }}>
              SEC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

