'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-black">

      {/* Background Image - Parallax with subtle zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="w-full h-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(/images/portrait/main.jpg)',
            filter: 'grayscale(50%)'
          }}
          animate={{
            filter: ['grayscale(50%)', 'grayscale(30%)', 'grayscale(50%)'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Massive Text with Image Behind */}
      <motion.div
        className="relative z-10 flex items-center justify-center h-full px-8"
        style={{ opacity }}
      >
        <div className="text-center">
          <motion.h1
            className="text-[15vw] md:text-[16vw] font-['Bebas_Neue'] font-black leading-[0.85] tracking-tighter"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* PETER with subtle shift */}
            <motion.span
              className="inline-block"
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                animate={{
                  color: ['#ffffff', '#ff0000', '#ffffff'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                PETER
              </motion.span>
            </motion.span>
            <br />
            {/* ROSENBERG with opposite subtle shift */}
            <motion.span
              className="inline-block"
              animate={{
                x: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <motion.span
                animate={{
                  color: ['#ffffff', '#ff0000', '#ffffff'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              >
                ROSENBERG
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.div
            className="mt-12 text-2xl md:text-3xl font-light tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-red-600">HOT 97</span>
            {' · '}
            <span className="text-red-600">ESPN</span>
            {' · '}
            <span className="text-red-600">WWE</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60 text-sm tracking-widest"
        >
          SCROLL
        </motion.div>
      </motion.div>
    </section>
  );
}
