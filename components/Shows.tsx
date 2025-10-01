'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const shows = [
  {
    title: "Ebro in the Morning",
    subtitle: "Hot 97",
    schedule: "Weekdays 6-10AM EST",
    description: "NYC&apos;s #1 morning show for hip-hop culture and real talk",
    link: "https://podcasts.apple.com/us/podcast/ebro-in-the-morning-podcast/id1236941416",
    logo: "/images/logos/ebro.jpg",
  },
  {
    title: "The Michael Kay Show",
    subtitle: "ESPN 98.7 NY",
    schedule: "Weekdays 3-7PM EST",
    description: "New York sports talk with the voice of the Yankees",
    link: "https://podcasts.apple.com/us/podcast/the-michael-kay-show/id208643372",
    logo: "/images/logos/michael-kay.jpg",
  },
  {
    title: "Cheap Heat",
    subtitle: "Podcast",
    schedule: "Weekly",
    description: "Wrestling analysis from WWE to the indies",
    link: "https://podcasts.apple.com/us/podcast/cheap-heat-with-peter-rosenberg/id1740794209",
    logo: "/images/logos/cheap-heat.jpg",
  },
];

export default function Shows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          className="text-7xl md:text-8xl font-display font-black mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Listen
        </motion.h2>

        {/* Shows List */}
        <div className="space-y-16">
          {shows.map((show, index) => (
            <motion.a
              key={show.title}
              href={show.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                {/* Image */}
                <div className="md:col-span-5 relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={show.logo}
                    alt={show.title}
                    fill
                    className="object-cover transition-all duration-700 ease-out"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                      filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-2 group-hover:text-red-600 transition-colors">
                      {show.title}
                    </h3>
                    <p className="text-xl font-semibold text-gray-500">{show.subtitle}</p>
                  </div>

                  <p className="text-lg text-gray-600">{show.schedule}</p>

                  <p className="text-xl md:text-2xl font-light leading-relaxed">
                    {show.description}
                  </p>

                  <div className="pt-4">
                    <span className="inline-block text-sm font-semibold tracking-wider uppercase border-b-2 border-black group-hover:border-red-600 transition-colors pb-1">
                      Listen Now →
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
