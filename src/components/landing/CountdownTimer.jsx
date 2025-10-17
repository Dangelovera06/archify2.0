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
    <div className="w-full max-w-4xl mx-auto mb-8 md:mb-12 px-4">
      <div 
        className="rounded-2xl p-6 md:p-8 border"
        style={{
          background: 'var(--alpha-white-5)',
          borderColor: 'var(--alpha-white-10)'
        }}
      >
        {/* Discount Badge */}
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-2 rounded-full mb-3" style={{ 
            background: 'var(--brand-200)',
            color: 'var(--black)'
          }}>
            <span className="font-bold">LIMITED TIME OFFER</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span 
              className="text-2xl md:text-3xl font-bold line-through opacity-60"
              style={{ color: 'var(--neutral-400)' }}
            >
              $997
            </span>
            <span 
              className="text-4xl md:text-5xl font-bold"
              style={{ color: 'var(--brand-200)' }}
            >
              $329
            </span>
          </div>
          <p className="text-lg md:text-xl" style={{ color: 'var(--white)' }}>
            Save <span style={{ color: 'var(--brand-200)' }} className="font-bold">$668</span> — Offer ends in:
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          <div 
            className="rounded-xl p-4 md:p-6 text-center"
            style={{
              background: 'var(--alpha-white-10)',
              borderColor: 'var(--alpha-white-10)'
            }}
          >
            <div 
              className="text-3xl md:text-5xl font-bold mb-2"
              style={{ color: 'var(--brand-200)' }}
            >
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div 
              className="text-xs md:text-sm font-medium"
              style={{ color: 'var(--neutral-400)' }}
            >
              DAYS
            </div>
          </div>
          
          <div 
            className="rounded-xl p-4 md:p-6 text-center"
            style={{
              background: 'var(--alpha-white-10)',
              borderColor: 'var(--alpha-white-10)'
            }}
          >
            <div 
              className="text-3xl md:text-5xl font-bold mb-2"
              style={{ color: 'var(--brand-200)' }}
            >
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div 
              className="text-xs md:text-sm font-medium"
              style={{ color: 'var(--neutral-400)' }}
            >
              HOURS
            </div>
          </div>
          
          <div 
            className="rounded-xl p-4 md:p-6 text-center"
            style={{
              background: 'var(--alpha-white-10)',
              borderColor: 'var(--alpha-white-10)'
            }}
          >
            <div 
              className="text-3xl md:text-5xl font-bold mb-2"
              style={{ color: 'var(--brand-200)' }}
            >
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div 
              className="text-xs md:text-sm font-medium"
              style={{ color: 'var(--neutral-400)' }}
            >
              MINUTES
            </div>
          </div>
          
          <div 
            className="rounded-xl p-4 md:p-6 text-center"
            style={{
              background: 'var(--alpha-white-10)',
              borderColor: 'var(--alpha-white-10)'
            }}
          >
            <div 
              className="text-3xl md:text-5xl font-bold mb-2"
              style={{ color: 'var(--brand-200)' }}
            >
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div 
              className="text-xs md:text-sm font-medium"
              style={{ color: 'var(--neutral-400)' }}
            >
              SECONDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

