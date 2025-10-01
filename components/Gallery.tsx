'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const actionShots = [
  { id: 1, src: "/images/action/action-1.jpg", caption: "On Air" },
  { id: 2, src: "/images/action/action-3.jpg", caption: "Hip-Hop Culture" },
  { id: 3, src: "/images/action/action-4.jpg", caption: "WWE Events" },
  { id: 4, src: "/images/portrait/suit.jpg", caption: "Behind The Scenes" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
            <span className="bg-gradient-to-r from-electric-blue via-wwe-purple to-hot97-red bg-clip-text text-transparent">
              IN ACTION
            </span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">Behind the mic, on the scene, living the culture</p>
          <div className="w-24 h-1 bg-gradient-to-r from-hot97-red to-electric-blue mx-auto mt-6"></div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actionShots.map((shot, index) => (
            <motion.div
              key={shot.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              style={{
                gridRow: index === 0 ? 'span 2' : 'span 1',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 }}
              onClick={() => setSelectedImage(shot.id)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Caption */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <h3 className="text-2xl font-bebas tracking-wide text-white mb-2">
                    {shot.caption}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-hot97-red to-espn-yellow transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>

                {/* Zoom Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Moments */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <h3 className="text-4xl font-bebas tracking-wide text-center mb-12 text-espn-yellow">
            CAREER HIGHLIGHTS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎤",
                title: "Hot 97 Summer Jam",
                description: "Hosting NYC's biggest hip-hop festival",
              },
              {
                icon: "🏆",
                title: "WWE Kickoff Shows",
                description: "Bringing wrestling analysis to millions",
              },
              {
                icon: "📺",
                title: "Hip Hop Squares",
                description: "MTV2's game show sensation",
              },
              {
                icon: "🎙️",
                title: "Noisemakers Series",
                description: "Original hip-hop interview series",
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10 hover:border-hot97-red/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <span className="text-5xl">{highlight.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{highlight.title}</h4>
                  <p className="text-gray-400">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal (if image selected) */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-5xl w-full aspect-video"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <Image
              src={actionShots.find(s => s.id === selectedImage)?.src || ''}
              alt="Selected"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-hot97-red rounded-full flex items-center justify-center hover:bg-espn-yellow transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
