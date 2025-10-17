import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    src: "/video1.mp4",
    poster: "/video1-poster.jpg",
    title: "Dr. Sarah Chen - $400K Revenue Story",
    description: "How Pacific Smile Center transformed their practice"
  },
  {
    src: "/video2.mp4", 
    poster: "/video2-poster.jpg",
    title: "Dr. Michael Stevens - Full-Arch Success",
    description: "Advanced Dental Implants case study"
  },
  {
    src: "/video3.mp4",
    poster: "/video3-poster.jpg", 
    title: "Dr. James Rodriguez - Patient Quality",
    description: "Elite Implant Solutions testimonial"
  },
  {
    src: "/video4.mp4",
    poster: "/video4-poster.jpg",
    title: "Practice Transformation",
    description: "Before and after results"
  },
  {
    src: "/video5.mp4",
    poster: "/video5-poster.jpg",
    title: "Content Creation Process",
    description: "How we create winning posts"
  },
  {
    src: "/video6.mp4",
    poster: "/video6-poster.jpg",
    title: "Ad Performance Results",
    description: "Real campaign analytics"
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
          <div className="flex animate-scroll-videos scrollbar-hide min-w-max">
            {/* First set of videos */}
            {videos.map((video, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 mx-1 sm:mx-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-64 h-48 sm:w-72 sm:h-54 md:w-80 md:h-60 rounded-2xl overflow-hidden group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    poster={video.poster}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold mb-1">{video.title}</h3>
                    <p className="text-xs">{video.description}</p>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-white border-y-[6px] sm:border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
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
                <div className="relative w-64 h-48 sm:w-72 sm:h-54 md:w-80 md:h-60 rounded-2xl overflow-hidden group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    poster={video.poster}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold mb-1">{video.title}</h3>
                    <p className="text-xs">{video.description}</p>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-white border-y-[6px] sm:border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
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
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-videos {
          animation: scroll-videos 30s linear infinite;
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
