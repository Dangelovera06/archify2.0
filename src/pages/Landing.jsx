import React from "react";

import Hero from "../components/landing/Hero";
import HardTruth from "../components/landing/HardTruth";
import SocialProof from "../components/landing/SocialProof";
import VideoSlider from "../components/landing/VideoSlider";
import EmotionalCore from "../components/landing/EmotionalCore";
import Proof from "../components/landing/Proof";
import Blueprint from "../components/landing/Blueprint";
import FinalClose from "../components/landing/FinalClose";
import Testimonials from "../components/landing/Testimonials";

export default function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-950">
      <Hero />
      <Testimonials />
      <HardTruth />
      <SocialProof />
      <VideoSlider />
      <EmotionalCore />
      <Proof />
      <Blueprint />
      <FinalClose />

      {/* Footer */}
      <footer className="py-8 sm:py-12 w-full border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl sm:text-2xl mb-3 sm:mb-4 font-display font-bold text-white">
            Archify.io
          </div>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-white/60">
            Turning social media into predictable implant revenue
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-white/40">
            © 2025 Archify.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}