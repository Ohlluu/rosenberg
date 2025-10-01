'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);

  const roles = [
    { text: "Hot 97", image: "/images/logos/ebro.jpg" },
    { text: "ESPN", image: "/images/logos/michael-kay.jpg" },
    { text: "Podcaster", image: "/images/logos/cheap-heat.jpg" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto w-full">

        {/* Large Name */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8rem] font-display font-black leading-[0.9] tracking-tight">
            PETER<br/>ROSENBERG
          </h1>
        </motion.div>

        {/* Interactive Role List with Images */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {roles.map((role, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredRole(index)}
              onMouseLeave={() => setHoveredRole(null)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <Image
                  src={role.image}
                  alt={role.text}
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                  style={{
                    filter: hoveredRole === index ? 'grayscale(0%)' : 'grayscale(100%)',
                    transform: hoveredRole === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-3xl font-display font-bold">{role.text}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl font-light leading-relaxed">
            Radio host. Cultural voice. Bridging hip-hop, sports, and entertainment
            for over two decades in New York City.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
