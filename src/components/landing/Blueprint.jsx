import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    image: "/docs needed.png",
    title: "Authority Content",
    description: "Story-driven posts that earn patient trust."
  },
  {
    icon: Target,
    image: "/40 m.png",
    title: "Smart Ads",
    description: "Targeted campaigns that actually convert into consults."
  },
  {
    icon: TrendingUp,
    image: "/rev avrg.png",
    title: "Predictable Growth",
    description: "A steady stream of full-arch patients, not one-off leads."
  },
  {
    icon: ArrowRight,
    image: "/40 m.png",
    title: "Proven Results",
    description: "40+Million generated using this exact framework."
  }
];

export default function Blueprint() {
  return (
    <section id="blueprint" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-6">
            <span 
              className="caption px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm"
              style={{ 
                backgroundColor: 'var(--alpha-white-5)', 
                color: 'var(--brand-300)',
                border: '1px solid var(--alpha-white-10)'
              }}
            >
              The Blueprint
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 px-4" style={{ color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
            Three Simple Steps to Predictable Implant Growth
          </h2>

          {/* 40+Million Generated Bubble Card */}
          <motion.article
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-[320px] mx-auto rounded-[16px] border border-[var(--alpha-white-20)] bg-[var(--alpha-white-10)] overflow-hidden mb-8"
          >
            <div className="relative [aspect-ratio:3/2]">
              <img
                src="/40 m.png"
                alt="40+ Million Generated"
                className="absolute inset-0 h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4">
              <h3 className="m-0 mb-1 font-['Inter_Display',Inter,system-ui,sans-serif] text-[18px] font-bold leading-[1.25] text-[var(--brand-200)]">
                40+Million Generated
              </h3>
              <p className="m-0 text-[14px] leading-[1.6] text-[var(--white)]">
                using this exact framework
              </p>
            </div>
          </motion.article>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold"
                style={{ 
                  backgroundColor: 'var(--brand-200)',
                  color: 'var(--black)',
                  fontFamily: 'var(--font-display)'
                }}
              >
                {index + 1}
              </div>

              <div 
                className="rounded-3xl overflow-hidden h-full"
                style={{
                  backgroundColor: 'var(--alpha-white-5)',
                  border: '1px solid var(--alpha-white-10)'
                }}
              >
                {step.image ? (
                  <>
                    <div className="relative [aspect-ratio:3/2]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="absolute inset-0 h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-4 sm:p-6 text-center">
                      <h3 className="text-lg sm:text-xl mb-2 sm:mb-3" style={{ color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base" style={{ color: 'var(--white)' }}>
                        {step.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="p-6 sm:p-8 text-center h-full pt-10 sm:pt-12">
                    <div 
                      className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden"
                      style={{ backgroundColor: 'var(--alpha-white-10)' }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <step.icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: 'var(--brand-200)' }} />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4" style={{ color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base" style={{ color: 'var(--white)' }}>
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <button
            className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-black transition-all active:translate-y-px active:scale-[0.99] hover:saturate-110 hover:brightness-105"
            style={{
              background: "linear-gradient(290deg, #ffd999 0%, #ffb433 30.2857%, #f5d49a 67.2878%, #ffb433 100%)",
              boxShadow: "0 1px 0 rgba(0,0,0,.08)"
            }}
          >
            <span 
              className="pointer-events-none absolute inset-0 rounded-full blur-[10px] opacity-40"
              style={{
                background: "radial-gradient(50% 50% at 50% 50%, #ffc766 0%, rgba(0,0,0,0) 100%)"
              }}
            />
            <span 
              className="pointer-events-none absolute inset-0 rounded-full blur-[10px]"
              style={{
                background: "radial-gradient(50% 50% at 50% 50%, #ffd999 0%, rgba(0,0,0,0) 100%)"
              }}
            />
            <span className="relative font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-nowrap flex items-center justify-center gap-2">
              <span>Claim the Blueprint Now</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}