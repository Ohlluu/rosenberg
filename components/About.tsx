'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const credentials = [
  { icon: "🎙️", text: "Hot 97 Morning Show | ESPN NY" },
  { icon: "🎤", text: "Juan Epstein & Cheap Heat Podcasts" },
  { icon: "🤼", text: "WWE Kickoff Panel Host" },
  { icon: "📺", text: "MTV2's Hip Hop Squares Host" },
  { icon: "🏆", text: "UJA '40 Under 40' Industry Leader" },
];

const quotes = [
  "Broadcasting from the greatest city in the world",
  "The kid from Maryland who became the voice of New York",
  "Quirky, honest, and crossing cultural boundaries",
  "Hip-Hop authority with a unique spin on pop culture",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-black via-nyc-gray/20 to-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bebas tracking-wider mb-4">
            <span className="bg-gradient-to-r from-hot97-red to-espn-yellow bg-clip-text text-transparent">
              WHO IS ROSENBERG?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-hot97-red to-electric-blue mx-auto"></div>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Image with Animated Border */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px 5px #FF0000',
                    '0 0 20px 5px #FFD700',
                    '0 0 20px 5px #6A0DAD',
                    '0 0 20px 5px #FF0000',
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-white">
                <Image
                  src="/images/portrait/main.jpg"
                  alt="Peter Rosenberg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-6 -right-6 text-6xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎙️
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 text-6xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                🏀
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 text-6xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🤼
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Bio */}
            <div>
              <motion.p
                className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Peter Rosenberg is a multi-platform media powerhouse who has become
                <span className="text-hot97-red font-semibold"> the voice of New York culture</span>.
                From hosting Hot 97&apos;s legendary morning show to ESPN&apos;s sports talk,
                from deep-dive hip-hop conversations on Juan Epstein to wrestling analysis
                on Cheap Heat, Rosenberg bridges generations and genres with his
                <span className="text-electric-blue font-semibold"> quirky, honest, and unique perspective</span>.
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                A kid from Maryland who earned his stripes in the world&apos;s toughest media market,
                Rosenberg has interviewed everyone from Jay-Z and Eminem to Mike Tyson,
                becoming a trusted voice across music, sports, and entertainment.
                His ability to cross cultural boundaries while maintaining authenticity
                has earned him millions of fans and recognition as a &quot;40 Under 40 Industry Leader.&quot;
              </motion.p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-hot97-red/50 transition-all duration-300 hover:bg-white/10 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <span className="text-4xl">{cred.icon}</span>
                  <span className="text-lg font-medium text-gray-200">{cred.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote Carousel */}
            <motion.div
              className="relative p-6 bg-gradient-to-r from-hot97-red/20 to-electric-blue/20 rounded-lg border-l-4 border-espn-yellow"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 }}
            >
              <svg className="absolute top-4 left-4 w-8 h-8 text-espn-yellow/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg italic text-gray-300 pl-8">
                {quotes[0]}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
