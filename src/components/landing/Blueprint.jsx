import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Authority Content",
    description: "Story-driven posts that earn patient trust."
  },
  {
    icon: Target,
    title: "Smart Ads",
    description: "Targeted campaigns that actually convert into consults."
  },
  {
    icon: TrendingUp,
    title: "Predictable Growth",
    description: "A steady stream of full-arch patients, not one-off leads."
  }
];

export default function Blueprint() {
  return (
    <section id="blueprint" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm bg-white/[0.03] text-yellow-400 border border-white/10 uppercase tracking-wider">
              The Blueprint
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4 text-white">
            Three Simple Steps to Predictable Implant Growth
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold bg-yellow-400 text-black">
                {index + 1}
              </div>

              <div className="p-6 sm:p-8 rounded-3xl text-center h-full pt-10 sm:pt-12 bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                <div className="inline-flex p-3 sm:p-4 rounded-full mb-4 sm:mb-6 bg-white/[0.05]">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 text-black font-bold text-lg shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
          >
            <span>Start Your Blueprint Today</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
