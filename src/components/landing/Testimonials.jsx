import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonialsRow1 = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Premier Dental Implants",
    content: "Went from 3 consults/month to 23 in just 30 days. The ROI is incredible.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Dr. James Chen",
    role: "Advanced Oral Surgery",
    content: "Added $847K in revenue this year alone. Best investment we've made.",
    rating: 5,
    avatar: "JC"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Full Arch Solutions",
    content: "Social media finally works. 15+ quality implant leads weekly now.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "Dr. Michael Thompson",
    role: "Dental Excellence Group",
    content: "Our calendar is fully booked 6 weeks out. This blueprint changed everything.",
    rating: 5,
    avatar: "MT"
  },
  {
    name: "Dr. Lisa Martinez",
    role: "Smile Restoration Center",
    content: "We've done 42 full-arch cases in 4 months. Unbelievable growth.",
    rating: 5,
    avatar: "LM"
  },
  {
    name: "Dr. Robert Kim",
    role: "Elite Implant Specialists",
    content: "Predictable patient flow. No more marketing guesswork or wasted ad spend.",
    rating: 5,
    avatar: "RK"
  }
];

const testimonialsRow2 = [
  {
    name: "Dr. Amanda Foster",
    role: "Coastal Dental Implants",
    content: "$1.2M revenue increase in 8 months. The system just works.",
    rating: 5,
    avatar: "AF"
  },
  {
    name: "Dr. David Park",
    role: "Precision Oral Surgery",
    content: "From struggling to 30+ monthly consults. Finally cracked the code.",
    rating: 5,
    avatar: "DP"
  },
  {
    name: "Dr. Jennifer Blake",
    role: "Modern Implant Studio",
    content: "Best decision for our practice. Quality patients who are ready to move forward.",
    rating: 5,
    avatar: "JB"
  },
  {
    name: "Dr. Christopher Lee",
    role: "Advanced Dental Care",
    content: "Doubled our implant revenue in 90 days. The blueprint is foolproof.",
    rating: 5,
    avatar: "CL"
  },
  {
    name: "Dr. Rachel Green",
    role: "Premier Oral Surgery",
    content: "Went from barely surviving to thriving. 25+ consults monthly now.",
    rating: 5,
    avatar: "RG"
  },
  {
    name: "Dr. Kevin Wu",
    role: "Full Arch Institute",
    content: "Social media finally generates real revenue. $600K+ in new cases.",
    rating: 5,
    avatar: "KW"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span 
              className="text-sm px-4 py-2 rounded-full"
              style={{ 
                backgroundColor: 'var(--alpha-white-5)', 
                color: 'var(--brand-300)',
                border: '1px solid var(--alpha-white-10)'
              }}
            >
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
            Real Doctors. Real Results.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-400)' }}>
            See what practice owners are saying about their transformation
          </p>
        </motion.div>

        {/* First Row - Scrolling Left */}
        <div className="relative overflow-hidden mb-6">
          <div className="flex animate-scroll-left gap-4">
            {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0"
              >
                <Card 
                  className="w-80 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--alpha-white-5)',
                    border: '1px solid var(--alpha-white-10)'
                  }}
                >
                  <div className="flex justify-start mb-3 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-200)' }} />
                    ))}
                  </div>

                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--neutral-300)' }}>
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
                      style={{ 
                        backgroundColor: 'var(--alpha-white-10)',
                        color: 'var(--brand-200)'
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate" style={{ color: 'var(--white)' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-xs truncate" style={{ color: 'var(--neutral-500)' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right gap-4">
            {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0"
              >
                <Card 
                  className="w-80 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--alpha-white-5)',
                    border: '1px solid var(--alpha-white-10)'
                  }}
                >
                  <div className="flex justify-start mb-3 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-200)' }} />
                    ))}
                  </div>

                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--neutral-300)' }}>
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
                      style={{ 
                        backgroundColor: 'var(--alpha-white-10)',
                        color: 'var(--brand-200)'
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate" style={{ color: 'var(--white)' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-xs truncate" style={{ color: 'var(--neutral-500)' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}