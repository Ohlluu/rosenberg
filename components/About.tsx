'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden py-32">

      {/* Background Text - Photo Fill */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div
          className="text-[25vw] font-['Bebas_Neue'] font-black leading-none text-clip-image"
          style={{
            backgroundImage: 'url(/images/action/action-3.jpg)',
            y: imageY
          }}
        >
          CULTURE
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-8"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Large Quote */}
          <h2 className="text-5xl md:text-7xl font-['Bebas_Neue'] mb-16 leading-tight">
            <span className="text-red-600">FROM MARYLAND TO</span>
            <br />
            <span className="text-white">THE VOICE OF NEW YORK</span>
          </h2>

          {/* Bio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg leading-relaxed">
            <div className="space-y-6">
              <p className="text-gray-300">
                Peter Rosenberg is a <span className="text-white font-semibold">multi-platform media powerhouse</span> who has spent over two decades becoming the definitive voice bridging hip-hop, sports, and entertainment.
              </p>
              <p className="text-gray-300">
                Co-hosting <span className="text-red-600 font-semibold">Ebro in the Morning</span> on Hot 97 and appearing on ESPN&apos;s <span className="text-red-600 font-semibold">Michael Kay Show</span>, Rosenberg commands attention across New York&apos;s most influential airwaves.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300">
                His podcasts—<span className="text-white font-semibold">Cheap Heat</span> for wrestling and <span className="text-white font-semibold">Juan Epstein</span> for hip-hop—dive deep into culture with authenticity and passion.
              </p>
              <p className="text-gray-300">
                From interviewing Jay-Z and Eminem to hosting WWE kickoffs and MTV2&apos;s Hip Hop Squares, Rosenberg <span className="text-white font-semibold">crosses boundaries while staying true</span> to the culture.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/10">
            <div>
              <div className="text-5xl font-['Bebas_Neue'] text-red-600 mb-2">20+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Years in Radio</div>
            </div>
            <div>
              <div className="text-5xl font-['Bebas_Neue'] text-red-600 mb-2">1000+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Interviews</div>
            </div>
            <div>
              <div className="text-5xl font-['Bebas_Neue'] text-red-600 mb-2">3M+</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Daily Listeners</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
