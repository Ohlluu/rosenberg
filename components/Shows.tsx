'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const shows = [
  {
    id: 1,
    title: "Ebro in the Morning",
    type: "RADIO",
    platform: "Hot 97",
    schedule: "Weekdays 6-10AM EST",
    description: "NYC's #1 morning show. Hip-hop, culture, and real talk.",
    link: "https://podcasts.apple.com/us/podcast/ebro-in-the-morning-podcast/id1236941416",
    logo: "/images/logos/ebro.jpg",
    color: "from-hot97-red to-red-700",
    accentColor: "hot97-red",
  },
  {
    id: 2,
    title: "The Michael Kay Show",
    type: "RADIO",
    platform: "ESPN 98.7 NY",
    schedule: "Weekdays 3-7PM EST",
    description: "Sports talk with the voice of the Yankees. NY sports culture.",
    link: "https://podcasts.apple.com/us/podcast/the-michael-kay-show/id208643372",
    logo: "/images/logos/michael-kay.jpg",
    color: "from-espn-yellow to-yellow-600",
    accentColor: "espn-yellow",
  },
  {
    id: 3,
    title: "Cheap Heat",
    type: "PODCAST",
    platform: "WWE Network",
    schedule: "Weekly",
    description: "Wrestling talk with Peter Rosenberg. From WWE to indie wrestling.",
    link: "https://podcasts.apple.com/us/podcast/cheap-heat-with-peter-rosenberg/id1740794209",
    logo: "/images/logos/cheap-heat.jpg",
    color: "from-wwe-purple to-purple-700",
    accentColor: "wwe-purple",
  },
  {
    id: 4,
    title: "Juan Epstein",
    type: "PODCAST",
    platform: "Independent",
    schedule: "Regular Episodes",
    description: "Deep conversations with hip-hop legends and cultural icons.",
    link: "#",
    logo: "/images/logos/cheap-heat.jpg", // Using as placeholder
    color: "from-electric-blue to-blue-600",
    accentColor: "electric-blue",
  },
];

export default function Shows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bebas tracking-wider mb-4">
            <span className="bg-gradient-to-r from-espn-yellow via-hot97-red to-wwe-purple bg-clip-text text-transparent">
              THE SHOWS
            </span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">Where you can catch Rosenberg</p>
          <div className="w-24 h-1 bg-gradient-to-r from-hot97-red to-electric-blue mx-auto mt-6"></div>
        </motion.div>

        {/* Show Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shows.map((show, index) => (
            <motion.a
              key={show.id}
              href={show.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setHoveredId(show.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.03, y: -10 }}
            >
              {/* Glowing Effect on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${show.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Card Content */}
              <div className="relative p-8">
                {/* Logo */}
                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={show.logo}
                    alt={show.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Type Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${show.color} font-bold text-sm tracking-wider`}>
                    {show.type}
                  </div>
                </div>

                {/* Show Info */}
                <div className="space-y-3">
                  <h3 className="text-3xl font-bebas tracking-wide text-white group-hover:text-espn-yellow transition-colors duration-300">
                    {show.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-2xl">📻</span>
                    <span className="font-medium">{show.platform}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-2xl">⏰</span>
                    <span>{show.schedule}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed pt-2">
                    {show.description}
                  </p>
                </div>

                {/* Waveform Animation on Hover */}
                <motion.div
                  className="flex gap-1 mt-6 justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === show.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1 bg-gradient-to-t ${show.color} rounded-full`}
                      animate={{
                        height: hoveredId === show.id ? [15, 35, 15] : 15,
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Listen Now Arrow */}
                <motion.div
                  className="absolute bottom-8 right-8 text-espn-yellow"
                  animate={{
                    x: hoveredId === show.id ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>

              {/* Bottom Accent Line */}
              <motion.div
                className={`h-2 bg-gradient-to-r ${show.color}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredId === show.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-2xl font-light text-gray-400">
            Never miss a show. Subscribe wherever you listen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
