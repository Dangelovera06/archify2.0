import React from "react";
import { motion } from "framer-motion";

const socialProofImages = [
  {
    src: "/team1.jpg",
    alt: "Dental team at Advanced Implant Center",
    title: "Advanced Implant Center Team"
  },
  {
    src: "/team2.jpg", 
    alt: "Medical aesthetics team at Refresh Palm Beach",
    title: "Refresh Palm Beach Medical Aesthetics"
  },
  {
    src: "/team3.jpg",
    alt: "Dental practice team",
    title: "Elite Dental Practice Team"
  },
  {
    src: "/team4.jpg",
    alt: "Implant specialists team",
    title: "Implant Specialists Team"
  },
  {
    src: "/team5.jpg",
    alt: "Full-arch restoration team",
    title: "Full-Arch Restoration Team"
  },
  {
    src: "/team6.jpg",
    alt: "Cosmetic dentistry team",
    title: "Cosmetic Dentistry Team"
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="caption" style={{ color: 'var(--brand-300)' }}>
              Trusted Nationwide
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
            Practices Using Our Method
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--white)' }}>
            See the teams behind $40M+ in implant revenue
          </p>
        </motion.div>

        {/* Continuous Horizontal Slider */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of images */}
            {socialProofImages.map((image, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-64 h-48 rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {socialProofImages.map((image, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-64 h-48 rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
