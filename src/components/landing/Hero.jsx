import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, CheckCircle } from "lucide-react";
import PricingBadge from './PricingBadge';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

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
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[140px] bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-blue-500/20"
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 leading-tight px-2 text-foreground">
            The Proven Blueprint for{' '}
            <span className="gradient-text">Full-Arch Growth</span>
            {' '}— Launch in Under 7 Days
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto px-4 text-foreground/90 leading-relaxed">
            Turn social media into 20+ implant consults in 14 days — and add $500K+ in predictable revenue
          </p>

          {/* VSL Video */}
          <div className="mb-8 md:mb-12 max-w-4xl mx-auto px-4 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <wistia-player media-id="wnxtau4o6k" aspect="1.7777777777777777"></wistia-player>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:gap-6 mb-6 md:mb-8 px-4">
            <a
              href="https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 font-semibold shadow-lg hover:shadow-xl"
            >
              <span className="relative font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-nowrap flex items-center justify-center gap-2">
                <span>Get the Blueprint. Get the Patients.</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              </span>
            </a>
            
            {/* Countdown Timer Under CTA */}
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
              <span className="font-semibold text-foreground">
                Offer ends in:
              </span>
              <span className="font-extrabold tabular-nums bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {formatTime()}
              </span>
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <PricingBadge />
          </div>

          {/* Money Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 md:mb-8 px-4"
          >
            <div className="modern-card inline-flex items-center gap-3 px-6 py-4 rounded-2xl">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-purple-600" />
              <div className="text-left">
                <div className="font-bold text-sm sm:text-base md:text-lg text-foreground">
                  30-Day Money Back Guarantee
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Not satisfied? Get a full refund, no questions asked.
                </div>
              </div>
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-purple-600" />
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mx-4"
          >
            <span className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Trusted by leading implant practices nationwide
            </span>
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-purple-600" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}