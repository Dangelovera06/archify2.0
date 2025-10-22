import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "Went from 3 consults per month to 23 in just 30 days. The ROI is absolutely incredible. This blueprint completely transformed our practice.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Dr. Sarah Mitchell",
    role: "Premier Dental Implants",
  },
  {
    text: "Added $847K in revenue this year alone. Best investment we've made for our practice. The system is foolproof and delivers consistent results.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Dr. James Chen",
    role: "Advanced Oral Surgery",
  },
  {
    text: "Social media finally works for us. We're getting 15+ quality implant leads every single week now. Game-changing results.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Dr. Emily Rodriguez",
    role: "Full Arch Solutions",
  },
  {
    text: "Our calendar is fully booked 6 weeks out now. This blueprint changed everything about how we attract and convert patients.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Dr. Michael Thompson",
    role: "Dental Excellence Group",
  },
  {
    text: "We've completed 42 full-arch cases in just 4 months. The growth has been absolutely unbelievable and continues to accelerate.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Dr. Lisa Martinez",
    role: "Smile Restoration Center",
  },
  {
    text: "Finally have predictable patient flow. No more marketing guesswork or wasted ad spend. Everything is systematic and scalable.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Dr. Robert Kim",
    role: "Elite Implant Specialists",
  },
  {
    text: "$1.2M revenue increase in just 8 months. The system just works. Simple to implement and incredibly effective.",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    name: "Dr. Amanda Foster",
    role: "Coastal Dental Implants",
  },
  {
    text: "Went from struggling to survive to 30+ monthly consults. We finally cracked the code on digital marketing that actually converts.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Dr. David Park",
    role: "Precision Oral Surgery",
  },
  {
    text: "Best decision for our practice. Quality patients who are ready to move forward, not tire-kickers. The ROI speaks for itself.",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Dr. Jennifer Blake",
    role: "Modern Implant Studio",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-[#030303] py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-indigo-500/[0.03]" />

      <div className="container z-10 mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] py-2 px-4 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-sm text-white/60 tracking-wide">Success Stories</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Real Doctors.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white/90 to-indigo-300">
              Real Results.
            </span>
          </h2>
          
          <p className="text-center text-base md:text-lg text-white/50 leading-relaxed">
            See what practice owners are saying about their transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={19} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={17} 
          />
        </motion.div>
      </div>
    </section>
  );
}
