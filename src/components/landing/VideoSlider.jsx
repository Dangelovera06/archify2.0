import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    src: "https://www.youtube.com/embed/uQINcOvA1nU?rel=0&modestbranding=1&showinfo=0&controls=0&disablekb=1",
    title: "Doctor Testimonial",
    description: "Real practice transformation story"
  },
  {
    src: "https://www.youtube.com/embed/XxUT6tmzq-k?rel=0&modestbranding=1&showinfo=0&controls=0&disablekb=1", 
    title: "Nancy Testimonial",
    description: "Patient success story"
  },
  {
    src: "https://www.youtube.com/embed/uQINcOvA1nU?rel=0&modestbranding=1&showinfo=0&controls=0&disablekb=1",
    title: "Q2 Results",
    description: "Quarterly performance review"
  },
  {
    src: "https://www.youtube.com/embed/XxUT6tmzq-k?rel=0&modestbranding=1&showinfo=0&controls=0&disablekb=1",
    title: "Practice Success",
    description: "Full-arch case study"
  }
];

export default function VideoSlider() {
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
              Real Results
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
            See It In Action
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--white)' }}>
            Watch real practices transform their implant revenue
          </p>
        </motion.div>

        {/* Continuous Horizontal Video Slider */}
        <div className="relative overflow-x-auto">
          <div className="flex animate-scroll-videos scrollbar-hide">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-1 sm:mx-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer">
                  <iframe
                    className="w-full h-full"
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                  
                  {/* Video overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold mb-1">{video.title}</h3>
                    <p className="text-xs">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-videos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-videos {
          animation: scroll-videos 20s linear infinite;
          width: max-content;
        }
        
        .animate-scroll-videos:hover {
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
