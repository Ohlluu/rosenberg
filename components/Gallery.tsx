'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Single Large Photo */}
        <motion.div
          className="relative w-full aspect-[16/9] overflow-hidden group cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/images/action/action-4.jpg"
            alt="Broadcaster, Host, DJ & 1 Time - WWE 24/7 Champion"
            fill
            className="object-cover transition-all duration-700"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Centered Box Label */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl md:text-6xl font-['Bebas_Neue'] text-white border-4 border-white px-8 py-4 text-center leading-tight">
              Broadcaster, Host, DJ & 1 Time - WWE 24/7 Champion
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
