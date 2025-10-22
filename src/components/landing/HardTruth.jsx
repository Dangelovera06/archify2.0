import React from "react";
import { motion } from "framer-motion";
import { XCircle, AlertTriangle } from "lucide-react";

const problems = [
  "Posting random before-and-after photos doesn't create trust.",
  "Boosting ads without strategy wastes thousands.",
  "Patients don't choose the dentist who shouts the loudest — they choose the one they trust the most."
];

export default function HardTruth() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <span className="text-sm text-yellow-400 uppercase tracking-wider">
              The Hard Truth
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white">
            Most Practices Fail on Social Media. Here's Why.
          </h2>

          <div className="space-y-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl text-left bg-white/[0.02] border border-white/10 backdrop-blur-sm"
              >
                <XCircle className="w-6 h-6 flex-shrink-0 mt-1 text-red-400" />
                <p className="text-lg text-white/90">
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border-2 border-yellow-400/30 backdrop-blur-sm">
            <p className="text-lg text-white/90">
              That's why we built <span className="text-yellow-400 font-bold">Archify.io</span>: a proven system that makes patients trust you first — and book with you instead of the practice down the street.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
