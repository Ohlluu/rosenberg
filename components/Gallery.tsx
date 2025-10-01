'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const photos = [
  { src: "/images/portrait/main.jpg", span: "col-span-2 row-span-2" },
  { src: "/images/action/action-1.jpg", span: "col-span-1" },
  { src: "/images/action/action-3.jpg", span: "col-span-1" },
  { src: "/images/portrait/suit.jpg", span: "col-span-1 row-span-2" },
  { src: "/images/action/action-4.jpg", span: "col-span-1" },
  { src: "/images/guests/guest-1.jpg", span: "col-span-2" },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={containerRef} className="relative bg-black py-32 overflow-hidden">

      {/* Background Text */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[30vw] font-['Bebas_Neue'] font-black text-white/5 pointer-events-none"
        style={{ x: titleX }}
      >
        ROSENBERG • ROSENBERG • ROSENBERG •
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Title */}
        <motion.h2
          className="text-8xl md:text-9xl font-['Bebas_Neue'] text-white mb-20"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          IN ACTION
        </motion.h2>

        {/* Photo Grid */}
        <div className="grid grid-cols-4 auto-rows-[250px] gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden ${photo.span} group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 0.98 }}
            >
              <Image
                src={photo.src}
                alt="Peter Rosenberg"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Red Overlay on Hover */}
              <div className="absolute inset-0 bg-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
