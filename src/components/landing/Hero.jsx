import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import PricingBadge from './PricingBadge';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
    <BeamsBackground intensity="medium">
      {/* Navigation Header */}
      <header className="relative z-10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-8">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-white" />
            <span className="text-lg font-semibold tracking-tight text-white">Archify.io</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm/6 text-white/80 md:flex">
            {['About', 'How It Works', 'Success Stories', 'Pricing'].map((item) => (
              <a key={item} className="hover:text-white transition-colors" href="#">{item}</a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">Sign in</button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-white/90">Request Demo</button>
          </div>

          <button className="md:hidden rounded-full bg-white/10 px-3 py-2 text-sm text-white">Menu</button>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" /> Full-Arch Growth System
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white"
          >
            The Proven Blueprint for{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
              Full-Arch Growth
            </span>
            {' '}— Launch in Under 7 Days
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-balance text-lg text-white/80 md:text-xl"
          >
            Turn social media into 20+ implant consults in 14 days — and add $500K+ in predictable revenue
          </motion.p>

          {/* VSL Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 mb-8 md:mb-10 max-w-4xl mx-auto w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20 ring-1 ring-white/10">
              <wistia-player media-id="wnxtau4o6k" aspect="1.7777777777777777"></wistia-player>
            </div>
          </motion.div>

          {/* CTA Button with Yellow Glow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 mb-6 md:mb-8"
          >
            <a
              href="https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-black transition-all active:translate-y-px active:scale-[0.99] hover:saturate-110 hover:brightness-105"
              style={{
                background: "linear-gradient(290deg, #ffd999 0%, #ffb433 30.2857%, #f5d49a 67.2878%, #ffb433 100%)",
                boxShadow: "0 1px 0 rgba(0,0,0,.08)"
              }}
            >
              <span 
                className="pointer-events-none absolute inset-0 rounded-xl blur-[10px] opacity-40"
                style={{
                  background: "radial-gradient(50% 50% at 50% 50%, #ffc766 0%, rgba(0,0,0,0) 100%)"
                }}
              />
              <span 
                className="pointer-events-none absolute inset-0 rounded-xl blur-[10px]"
                style={{
                  background: "radial-gradient(50% 50% at 50% 50%, #ffd999 0%, rgba(0,0,0,0) 100%)"
                }}
              />
              <span className="relative font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-nowrap flex items-center justify-center gap-2">
                <span>Get the Blueprint. Get the Patients.</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              </span>
            </a>
            
            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
              <span className="font-semibold text-white/80">
                Offer ends in:
              </span>
              <span className="font-extrabold tabular-nums bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                {formatTime()}
              </span>
            </div>
          </motion.div>

          {/* Pricing Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <PricingBadge />
          </motion.div>

          {/* Money Back Guarantee */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-yellow-400" />
              <div className="text-left">
                <div className="font-bold text-sm sm:text-base md:text-lg text-white">
                  30-Day Money Back Guarantee
                </div>
                <div className="text-xs sm:text-sm text-white/50">
                  Not satisfied? Get a full refund, no questions asked.
                </div>
              </div>
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-yellow-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}
