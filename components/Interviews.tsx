'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const interviews = [
  {
    id: 1,
    guest: "Legendary Guests",
    image: "/images/guests/guest-1.jpg",
    quote: "From Jay-Z to Eminem, Kendrick to Tyson",
  },
];

export default function Interviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-black via-nyc-gray/10 to-black py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Spotlight Effect */}
      {hoveredId && (
        <div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bebas tracking-wider mb-4">
            <span className="bg-gradient-to-r from-hot97-red via-espn-yellow to-electric-blue bg-clip-text text-transparent">
              THE INTERVIEWS
            </span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">Conversations that matter with the biggest names</p>
          <div className="w-24 h-1 bg-gradient-to-r from-hot97-red to-electric-blue mx-auto mt-6"></div>
        </motion.div>

        {/* Hall of Fame Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(interview.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image - B&W to Color on Hover */}
              <div className="relative w-full h-full">
                <Image
                  src={interview.image}
                  alt={interview.guest}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  style={{
                    filter: hoveredId === interview.id ? 'grayscale(0%)' : 'grayscale(100%)',
                  }}
                />

                {/* Red Overlay */}
                <div className="absolute inset-0 bg-hot97-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.h3
                    className="text-3xl font-bebas tracking-wider text-white mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredId === interview.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {interview.guest}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredId === interview.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {interview.quote}
                  </motion.p>

                  {/* Play Icon */}
                  <motion.div
                    className="mt-6 w-16 h-16 rounded-full bg-espn-yellow flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={hoveredId === interview.id ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-espn-yellow to-transparent"
                initial={{ opacity: 0 }}
                animate={hoveredId === interview.id ? { opacity: 1 } : { opacity: 0 }}
              />
            </motion.div>
          ))}

          {/* More Coming Soon Cards */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`placeholder-${i}`}
              className="aspect-square rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: (interviews.length + i) * 0.1 }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-40">🎤</div>
                <p className="text-gray-500 font-medium">More Legendary<br/>Interviews Coming</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="p-8 bg-gradient-to-br from-hot97-red/20 to-transparent rounded-lg border border-hot97-red/30">
            <motion.div
              className="text-6xl font-bebas text-espn-yellow mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              1000+
            </motion.div>
            <p className="text-xl text-gray-300">Interviews Conducted</p>
          </div>

          <div className="p-8 bg-gradient-to-br from-espn-yellow/20 to-transparent rounded-lg border border-espn-yellow/30">
            <motion.div
              className="text-6xl font-bebas text-hot97-red mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              20+
            </motion.div>
            <p className="text-xl text-gray-300">Years in Radio</p>
          </div>

          <div className="p-8 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-lg border border-electric-blue/30">
            <motion.div
              className="text-6xl font-bebas text-wwe-purple mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              3M+
            </motion.div>
            <p className="text-xl text-gray-300">Listeners Daily</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
