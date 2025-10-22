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
    <div className="min-h-screen overflow-x-hidden w-full">
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
      <footer className="py-8 sm:py-12 w-full border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl sm:text-2xl mb-3 sm:mb-4 font-display font-bold text-foreground">
            Archify.io
          </div>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-muted-foreground">
            Turning social media into predictable implant revenue
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <a href="#" className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground/60">
            © 2025 Archify.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}