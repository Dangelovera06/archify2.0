import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    src: "https://www.youtube.com/embed/uQINcOvA1nU?rel=0&modestbranding=1&showinfo=0&controls=0&disablekb=1",
    title: "",
    description: ""
  },
  {
    src: "https://www.youtube.com/embed/XxUT6tmzq-k?rel=0&modestbranding=1&showinfo=0&controls=0&disablekb=1", 
    title: "",
    description: ""
  },
  {
    src: "https://www.youtube.com/embed/9CzZ9LRWr8s?rel=0&modestbranding=1&showinfo=0&controls=0&disablekb=1",
    title: "",
    description: ""
  },
  {
    src: "https://www.youtube.com/embed/uQINcOvA1nU?rel=0&modestbranding=1&showinfo=0&controls=0&disablekb=1",
    title: "",
    description: ""
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
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-videos">
            {/* First set */}
            {videos.map((video, index) => (
              <motion.div
                key={`first-${index}`}
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
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {videos.map((video, index) => (
              <motion.div
                key={`second-${index}`}
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
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-videos {
          animation: scroll-videos 20s linear infinite;
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
