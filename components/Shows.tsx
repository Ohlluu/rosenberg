'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const shows = [
  {
    title: "EBRO IN THE MORNING",
    platform: "Hot 97",
    time: "6-10AM EST",
    description: "NYC's #1 Morning Show",
    link: "https://podcasts.apple.com/us/podcast/ebro-in-the-morning-podcast/id1236941416",
    image: "/images/logos/ebro.jpg",
    color: "from-red-600 to-red-800"
  },
  {
    title: "MICHAEL KAY SHOW",
    platform: "ESPN 98.7",
    time: "3-7PM EST",
    description: "New York Sports Talk",
    link: "https://podcasts.apple.com/us/podcast/the-michael-kay-show/id208643372",
    image: "/images/logos/michael-kay.jpg",
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "CHEAP HEAT",
    platform: "Podcast",
    time: "Weekly",
    description: "Wrestling Deep Dives",
    link: "https://podcasts.apple.com/us/podcast/cheap-heat-with-peter-rosenberg/id1740794209",
    image: "/images/logos/cheap-heat.jpg",
    color: "from-purple-600 to-pink-600"
  },
];

export default function Shows() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-zinc-950 py-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Title */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-8xl md:text-9xl font-['Bebas_Neue'] text-white mb-4">
            TUNE IN
          </h2>
          <p className="text-xl text-gray-400 uppercase tracking-wider">Where to catch Rosenberg</p>
        </motion.div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <motion.a
              key={index}
              href={show.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={show.image}
                  alt={show.title}
                  fill
                  className="object-cover transition-all duration-700"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                    filter: hoveredIndex === index ? 'brightness(0.6)' : 'brightness(0.5)'
                  }}
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${show.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div>
                  <div className="text-sm uppercase tracking-wider text-gray-300 mb-2">
                    {show.platform}
                  </div>
                  <h3 className="text-4xl font-['Bebas_Neue'] leading-tight mb-3">
                    {show.title}
                  </h3>
                  <div className="text-sm text-gray-300 mb-2">{show.time}</div>
                  <div className="text-lg font-semibold">{show.description}</div>

                  {/* Arrow */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wider"
                    animate={{
                      x: hoveredIndex === index ? 10 : 0
                    }}
                  >
                    LISTEN NOW <span className="text-2xl">→</span>
                  </motion.div>
                </div>
              </div>

              {/* Border */}
              <motion.div
                className="absolute inset-0 border-2 border-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
