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
    const parts = [];
    if (timeLeft.days > 0) parts.push(`${timeLeft.days}d`);
    parts.push(`${timeLeft.hours}h`);
    parts.push(`${timeLeft.minutes}m`);
    parts.push(`${timeLeft.seconds}s`);
    return parts.join(' ');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:py-4" style={{
      background: 'var(--black)',
      borderBottom: '1px solid var(--alpha-white-10)'
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg">
        <span style={{ color: 'var(--white)' }}>
          Offer ends in:
        </span>
        <span className="font-bold text-base sm:text-lg md:text-xl tabular-nums" style={{ color: 'var(--brand-200)' }}>
          {formatTime()}
        </span>
      </div>
    </div>
  );
}

