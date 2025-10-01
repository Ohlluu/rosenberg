'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Shows from '@/components/Shows';
import Interviews from '@/components/Interviews';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              {/* Animated Logo/Text */}
              <motion.h1
                className="text-6xl md:text-8xl font-bebas tracking-wider mb-8 glitch-text"
                data-text="ROSENBERG"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="bg-gradient-to-r from-hot97-red via-espn-yellow to-electric-blue bg-clip-text text-transparent">
                  ROSENBERG
                </span>
              </motion.h1>

              {/* Loading Waveform */}
              <div className="flex gap-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-gradient-to-t from-hot97-red to-electric-blue rounded-full"
                    animate={{
                      height: [20, 60, 20],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="min-h-screen">
        <Hero />
        <About />
        <Shows />
        <Interviews />
        <Gallery />
        <Contact />

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
              <a
                href="https://x.com/rosenbergradio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-espn-yellow transition-colors"
              >
                Twitter
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="https://www.instagram.com/rosenbergradio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-hot97-red transition-colors"
              >
                Instagram
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="https://www.youtube.com/c/rosenbergradio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors"
              >
                YouTube
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Peter Rosenberg. All rights reserved.
            </p>

            <motion.p
              className="text-gray-600 text-xs mt-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Built Different. 🗽
            </motion.p>
          </div>
        </footer>
      </main>

      {/* Floating Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-hot97-red to-espn-yellow rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow z-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </>
  );
}
