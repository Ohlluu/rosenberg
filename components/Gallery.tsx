'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: "/images/portrait/main.jpg", alt: "Peter Rosenberg", span: "row-span-2" },
  { src: "/images/action/action-1.jpg", alt: "On Air", span: "" },
  { src: "/images/action/action-3.jpg", alt: "Hip-Hop Culture", span: "" },
  { src: "/images/portrait/suit.jpg", alt: "Peter Rosenberg", span: "row-span-2" },
  { src: "/images/action/action-4.jpg", alt: "WWE Event", span: "" },
  { src: "/images/guests/guest-1.jpg", alt: "With Guest", span: "" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[300px] gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden bg-gray-100 cursor-pointer ${photo.span}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out"
                style={{
                  transform: hoveredIndex === index ? 'scale(1.08)' : 'scale(1)',
                }}
              />

              {/* Caption overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-end p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-xl font-display font-bold">{photo.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
