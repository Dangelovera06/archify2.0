import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, CheckCircle } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
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
    <HeroGeometric
      badge="Archify.io"
      title1="The Proven Blueprint for"
      title2="Full-Arch Growth"
      description="Turn social media into 20+ implant consults in 14 days — and add $500K+ in predictable revenue"
    >
      {/* VSL Video */}
      <div className="mb-8 md:mb-12 max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
        >
          <wistia-player media-id="wnxtau4o6k" aspect="1.7777777777777777"></wistia-player>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-col items-center gap-4 md:gap-6 mb-6 md:mb-8"
      >
        <a
          href="https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 text-black font-bold shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
        >
          <span className="relative text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-nowrap flex items-center justify-center gap-2">
            <span>Get the Blueprint. Get the Patients.</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
        
        {/* Countdown Timer Under CTA */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
          <span className="font-semibold text-white/80">
            Offer ends in:
          </span>
          <span className="font-extrabold tabular-nums bg-gradient-to-r from-yellow-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent">
            {formatTime()}
          </span>
        </div>
      </motion.div>

      {/* Pricing Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mb-6 md:mb-8"
      >
        <PricingBadge />
      </motion.div>

      {/* Money Back Guarantee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="mb-6 md:mb-8"
      >
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
          <Shield className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-indigo-400" />
          <div className="text-left">
            <div className="font-bold text-sm sm:text-base md:text-lg text-white">
              30-Day Money Back Guarantee
            </div>
            <div className="text-xs sm:text-sm text-white/50">
              Not satisfied? Get a full refund, no questions asked.
            </div>
          </div>
          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-indigo-400" />
        </div>
      </motion.div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="flex items-center justify-center gap-2 sm:gap-3"
      >
        <span className="text-sm sm:text-base md:text-lg text-white/50">
          Trusted by leading implant practices nationwide
        </span>
        <div className="flex gap-0.5 sm:gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-yellow-400" />
          ))}
        </div>
      </motion.div>
    </HeroGeometric>
  );
}
