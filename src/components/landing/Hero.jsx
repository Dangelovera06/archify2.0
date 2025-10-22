import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Shield, CheckCircle } from "lucide-react";
import { AnimatedHero } from "@/components/ui/animated-hero";
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
    <AnimatedHero
      brandName="Archify.io"
      navItems={['About', 'How It Works', 'Success Stories', 'Pricing']}
      showPartners={false}
    >
      {/* Main Hero Content */}
      <div className={`mx-auto text-center ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" /> Full-Arch Growth System
        </span>
        
        <h1 
          style={{ animationDelay: '200ms' }} 
          className={`mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          The Proven Blueprint for{' '}
          <span className="bg-gradient-to-r from-rose-300 via-white to-indigo-300 bg-clip-text text-transparent">
            Full-Arch Growth
          </span>
          {' '}— Launch in Under 7 Days
        </h1>
        
        <p 
          style={{ animationDelay: '300ms' }} 
          className={`mx-auto mt-5 max-w-2xl text-balance text-lg text-white/80 md:text-xl ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          Turn social media into 20+ implant consults in 14 days — and add $500K+ in predictable revenue
        </p>

        {/* VSL Video */}
        <div 
          style={{ animationDelay: '400ms' }} 
          className={`mt-10 mb-8 md:mb-10 max-w-4xl mx-auto w-full ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-rose-500/20 ring-1 ring-white/10">
            <wistia-player media-id="wnxtau4o6k" aspect="1.7777777777777777"></wistia-player>
          </div>
        </div>

        {/* CTA Button */}
        <div 
          style={{ animationDelay: '500ms' }} 
          className={`flex flex-col items-center gap-4 md:gap-5 mb-6 md:mb-8 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <a
            href="https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-white text-black font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-nowrap flex items-center justify-center gap-2">
              <span>Get the Blueprint. Get the Patients.</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
            <span className="font-semibold text-white/80">
              Offer ends in:
            </span>
            <span className="font-extrabold tabular-nums bg-gradient-to-r from-rose-300 via-white to-indigo-300 bg-clip-text text-transparent">
              {formatTime()}
            </span>
          </div>
        </div>

        {/* Pricing Badge */}
        <div 
          style={{ animationDelay: '600ms' }} 
          className={`mb-6 md:mb-8 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <PricingBadge />
        </div>

        {/* Money Back Guarantee */}
        <div 
          style={{ animationDelay: '700ms' }} 
          className={`mb-6 md:mb-8 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <Shield className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-rose-400" />
            <div className="text-left">
              <div className="font-bold text-sm sm:text-base md:text-lg text-white">
                30-Day Money Back Guarantee
              </div>
              <div className="text-xs sm:text-sm text-white/50">
                Not satisfied? Get a full refund, no questions asked.
              </div>
            </div>
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-rose-400" />
          </div>
        </div>

        {/* Trust Badge */}
        <div 
          style={{ animationDelay: '800ms' }} 
          className={`flex items-center justify-center gap-2 sm:gap-3 ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <span className="text-sm sm:text-base md:text-lg text-white/50">
            Trusted by leading implant practices nationwide
          </span>
          <div className="flex gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-rose-400" />
            ))}
          </div>
        </div>
      </div>
    </AnimatedHero>
  );
}
