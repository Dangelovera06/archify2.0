import React from "react";
import { motion } from "framer-motion";

const socialProofImages = [
  {
    src: "/SOCIAL PROOF/3 copy.png",
    alt: "Dental team at practice",
    title: "Elite Dental Practice Team"
  },
  {
    src: "/SOCIAL PROOF/4 copy.png", 
    alt: "Medical aesthetics team",
    title: "Refresh Palm Beach Medical Aesthetics"
  },
  {
    src: "/SOCIAL PROOF/5 copy.png",
    alt: "Implant specialists team",
    title: "Implant Specialists Team"
  },
  {
    src: "/SOCIAL PROOF/6 copy.png",
    alt: "Full-arch restoration team",
    title: "Full-Arch Restoration Team"
  },
  {
    src: "/SOCIAL PROOF/3 copy.png",
    alt: "Dental team at practice",
    title: "Elite Dental Practice Team"
  },
  {
    src: "/SOCIAL PROOF/4 copy.png",
    alt: "Medical aesthetics team",
    title: "Refresh Palm Beach Medical Aesthetics"
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
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
          <div className="flex animate-scroll overflow-x-auto scrollbar-hide">
            {/* First set of images */}
            {socialProofImages.map((image, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-48 h-36 sm:w-56 sm:h-42 md:w-64 md:h-48 rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {socialProofImages.map((image, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-48 h-36 sm:w-56 sm:h-42 md:w-64 md:h-48 rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          animation: scroll 12s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
