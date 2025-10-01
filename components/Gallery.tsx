'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: "/images/portrait/main.jpg", title: "The Voice", layout: "large" },
  { src: "/images/action/action-1.jpg", title: "On Air", layout: "small" },
  { src: "/images/action/action-3.jpg", title: "Hip-Hop", layout: "tall" },
  { src: "/images/guests/guest-1.jpg", title: "The Guests", layout: "wide" },
  { src: "/images/action/action-4.jpg", title: "WWE", layout: "small" },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Title */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-8xl md:text-9xl font-['Bebas_Neue'] text-white leading-none">
            IN<br/>ACTION
          </h2>
        </motion.div>

        {/* Bento Box Style Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">

          {/* Photo 1 - Large Hero */}
          <motion.div
            className="col-span-12 md:col-span-7 row-span-3 relative overflow-hidden group cursor-pointer"
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].title}
              fill
              className="object-cover transition-all duration-700"
              style={{
                transform: hoveredIndex === 0 ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <motion.div
              className="absolute bottom-8 left-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: hoveredIndex === 0 ? 1 : 0, y: hoveredIndex === 0 ? 0 : 20 }}
            >
              <h3 className="text-5xl font-['Bebas_Neue'] text-white">{photos[0].title}</h3>
            </motion.div>
          </motion.div>

          {/* Photo 2 - Top Right */}
          <motion.div
            className="col-span-6 md:col-span-5 row-span-2 relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={photos[1].src}
              alt={photos[1].title}
              fill
              className="object-cover transition-all duration-700"
              style={{
                transform: hoveredIndex === 1 ? 'scale(1.1) rotate(2deg)' : 'scale(1)',
              }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-red-600/40 transition-colors duration-500" />
            <motion.div
              className="absolute top-6 left-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === 1 ? 1 : 0 }}
            >
              <h3 className="text-3xl font-['Bebas_Neue'] text-white">{photos[1].title}</h3>
            </motion.div>
          </motion.div>

          {/* Photo 3 - Tall Right */}
          <motion.div
            className="col-span-6 md:col-span-5 row-span-3 relative overflow-hidden group cursor-pointer"
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={photos[2].src}
              alt={photos[2].title}
              fill
              className="object-cover transition-all duration-700"
              style={{
                transform: hoveredIndex === 2 ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
            <motion.div
              className="absolute bottom-6 right-6 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === 2 ? 1 : 0 }}
            >
              <h3 className="text-4xl font-['Bebas_Neue'] text-white">{photos[2].title}</h3>
            </motion.div>
          </motion.div>

          {/* Photo 4 - Wide Bottom */}
          <motion.div
            className="col-span-12 md:col-span-7 row-span-2 relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={photos[3].src}
              alt={photos[3].title}
              fill
              className="object-cover transition-all duration-700"
              style={{
                transform: hoveredIndex === 3 ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === 3 ? 1 : 0 }}
            >
              <h3 className="text-6xl font-['Bebas_Neue'] text-white border-4 border-white px-8 py-4">
                {photos[3].title}
              </h3>
            </motion.div>
          </motion.div>

          {/* Photo 5 - Square */}
          <motion.div
            className="col-span-6 md:col-span-5 row-span-2 relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={photos[4].src}
              alt={photos[4].title}
              fill
              className="object-cover transition-all duration-700"
              style={{
                transform: hoveredIndex === 4 ? 'scale(1.1) rotate(-2deg)' : 'scale(1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute bottom-6 left-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === 4 ? 1 : 0 }}
            >
              <h3 className="text-4xl font-['Bebas_Neue'] text-white">{photos[4].title}</h3>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
