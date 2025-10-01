'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const shows = [
  {
    title: "Ebro in the Morning",
    platform: "Hot 97",
    schedule: "Weekdays 6-10AM EST",
    link: "https://podcasts.apple.com/us/podcast/ebro-in-the-morning-podcast/id1236941416",
    logo: "/images/logos/ebro.jpg",
  },
  {
    title: "The Michael Kay Show",
    platform: "ESPN 98.7 NY",
    schedule: "Weekdays 3-7PM EST",
    link: "https://podcasts.apple.com/us/podcast/the-michael-kay-show/id208643372",
    logo: "/images/logos/michael-kay.jpg",
  },
  {
    title: "Cheap Heat",
    platform: "Podcast",
    schedule: "Weekly",
    link: "https://podcasts.apple.com/us/podcast/cheap-heat-with-peter-rosenberg/id1740794209",
    logo: "/images/logos/cheap-heat.jpg",
  },
];

export default function Shows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Shows & Podcasts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <motion.a
              key={show.title}
              href={show.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-800 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={show.logo}
                  alt={show.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">
                  {show.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{show.platform}</p>
                <p className="text-gray-500 text-sm">{show.schedule}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
