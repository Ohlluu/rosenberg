'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const taglines = [
  "Hip-Hop. Sports. Wrestling. Whatever.",
  "From Hot 97 to ESPN to Your Ears",
  "The Voice of New York Culture",
  "Bridging Generations Through Sound",
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden vhs-effect bg-black">
      {/* Animated NYC Skyline Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-nyc-gray to-transparent"></div>
        {/* Building silhouettes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 bg-nyc-gray opacity-40"
            style={{
              left: `${i * 8.5}%`,
              width: `${Math.random() * 60 + 40}px`,
              height: `${Math.random() * 200 + 150}px`,
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          />
        ))}
      </div>

      {/* Radio Wave Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-hot97-red"
            style={{
              width: 100 + i * 150,
              height: 100 + i * 150,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main Name */}
        <motion.h1
          className="text-8xl md:text-9xl font-bebas tracking-wider mb-4 glitch-text"
          data-text="PETER ROSENBERG"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-hot97-red via-espn-yellow to-electric-blue bg-clip-text text-transparent">
            PETER ROSENBERG
          </span>
        </motion.h1>

        {/* Rotating Tagline */}
        <motion.div
          className="h-16 mb-8"
          key={taglineIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl md:text-3xl font-light text-gray-300">
            {taglines[taglineIndex]}
          </p>
        </motion.div>

        {/* Audio Waveform Bars */}
        <motion.div
          className="flex gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="wave-bar w-2 bg-gradient-to-t from-hot97-red to-electric-blue rounded-full"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-espn-yellow cursor-pointer">
            <span className="text-sm tracking-widest">SCROLL</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
