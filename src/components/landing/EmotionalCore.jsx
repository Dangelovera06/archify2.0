import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const patientStruggles = [
  "The pain of not eating the food they love.",
  "The embarrassment of hiding their smile.",
  "The frustration of dentures that make them feel older than they are."
];

const doctorFrustrations = [
  "Wasted ad spend with no ROI.",
  "Inconsistent consults that don't convert.",
  "Unpredictable growth that keeps you up at night."
];

export default function EmotionalCore() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6" style={{ color: 'var(--brand-200)' }} />
            <span className="caption" style={{ color: 'var(--brand-300)' }}>
              The Emotional Core
            </span>
          </div>

          <h2 className="heading-2 mb-8" style={{ color: 'var(--white)' }}>
            Behind Every Consult Is Someone Who Feels Trapped
          </h2>

          <p className="body-large mb-8" style={{ color: 'var(--white)' }}>
            Patients in your city are silently living with:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--brand-200)' }}>
                Patient Pain Points
              </h3>
              {patientStruggles.map((struggle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-2xl text-left"
                  style={{
                    backgroundColor: 'var(--alpha-white-5)',
                    border: '1px solid var(--alpha-white-10)'
                  }}
                >
                  <p className="body" style={{ color: 'var(--neutral-200)' }}>
                    {struggle}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--brand-200)' }}>
                Doctor Frustrations
              </h3>
              {doctorFrustrations.map((frustration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-2xl text-left"
                  style={{
                    backgroundColor: 'var(--alpha-white-5)',
                    border: '1px solid var(--alpha-white-10)'
                  }}
                >
                  <p className="body" style={{ color: 'var(--neutral-200)' }}>
                    {frustration}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-3xl" style={{
            background: 'linear-gradient(135deg, var(--alpha-white-5) 0%, var(--alpha-white-10) 100%)',
            border: '1px solid var(--alpha-white-20)'
          }}>
            <p className="heading-3 mb-4" style={{ color: 'var(--brand-200)' }}>
              Your practice can give them confidence, freedom, and health.
            </p>
            <p className="body-large" style={{ color: 'var(--white)' }}>
              Archify.io makes sure they find you first.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}