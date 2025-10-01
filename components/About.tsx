'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Large Title */}
          <div>
            <h2 className="text-7xl md:text-8xl font-display font-black leading-[0.9] mb-8 sticky top-24">
              About
            </h2>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 text-xl md:text-2xl leading-relaxed font-light">
            <p>
              Peter Rosenberg is a <span className="font-semibold">multi-platform media personality</span> known
              for his work across radio, podcasting, and television.
            </p>

            <p>
              Currently co-hosting <span className="font-semibold italic">Ebro in the Morning</span> on Hot 97
              and appearing on <span className="font-semibold italic">The Michael Kay Show</span> on ESPN New York,
              Rosenberg bridges the worlds of hip-hop and sports daily.
            </p>

            <p>
              His podcasts—<span className="font-semibold italic">Cheap Heat</span> (wrestling) and{' '}
              <span className="font-semibold italic">Juan Epstein</span> (hip-hop)—showcase his range and depth
              across culture.
            </p>

            <p>
              Over <span className="font-semibold">20+ years</span>, he&apos;s interviewed Jay-Z, Eminem,
              Kendrick Lamar, and Mike Tyson. Previously hosted MTV2&apos;s{' '}
              <span className="font-semibold italic">Hip Hop Squares</span> and created the{' '}
              <span className="font-semibold italic">Noisemakers</span> series.
            </p>

            <p className="text-base text-gray-500 pt-4">
              UJA-Federation &quot;40 Under 40 Industry Leader&quot; • WWE Kickoff Host • Maryland Native
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
