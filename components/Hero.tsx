'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Peter<br/>Rosenberg
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl">
              Radio host, podcast creator, and cultural voice bridging hip-hop, sports, and entertainment.
            </p>

            <div className="flex flex-col gap-3 text-lg">
              <div className="flex items-center gap-3">
                <span className="text-brand-red">→</span>
                <span>Hot 97 - Ebro in the Morning</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-red">→</span>
                <span>ESPN NY - The Michael Kay Show</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-red">→</span>
                <span>Cheap Heat | Juan Epstein</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <Image
                src="/images/portrait/main.jpg"
                alt="Peter Rosenberg"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-600">
            <span className="text-sm tracking-widest">SCROLL</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
