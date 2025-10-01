'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const photos = [
  { src: "/images/portrait/main.jpg", alt: "Peter Rosenberg" },
  { src: "/images/portrait/suit.jpg", alt: "Peter Rosenberg" },
  { src: "/images/action/action-1.jpg", alt: "On Air" },
  { src: "/images/action/action-3.jpg", alt: "Hip-Hop Culture" },
  { src: "/images/action/action-4.jpg", alt: "WWE Event" },
  { src: "/images/guests/guest-1.jpg", alt: "With Guest" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
