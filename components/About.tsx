'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              Peter Rosenberg is a multi-platform media personality known for his work across radio, podcasting, and television. Currently, he co-hosts <span className="text-white font-medium">Ebro in the Morning</span> on Hot 97 and appears on <span className="text-white font-medium">The Michael Kay Show</span> on ESPN New York.
            </p>

            <p>
              His podcasts include <span className="text-white font-medium">Cheap Heat</span>, focusing on professional wrestling, and <span className="text-white font-medium">Juan Epstein</span>, featuring in-depth conversations with figures from hip-hop and entertainment.
            </p>

            <p>
              Over his 20+ year career, Rosenberg has interviewed major artists including Jay-Z, Eminem, and Kendrick Lamar. He previously hosted MTV2&apos;s <span className="text-white font-medium">Hip Hop Squares</span> and created the <span className="text-white font-medium">Noisemakers</span> interview series.
            </p>

            <p>
              A Maryland native and University of Maryland graduate, Rosenberg joined Hot 97 in 2007 and has since become a recognized voice in New York media. He was named a UJA-Federation <span className="text-white font-medium">&quot;40 Under 40 Industry Leader&quot;</span> and regularly hosts WWE kickoff shows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
