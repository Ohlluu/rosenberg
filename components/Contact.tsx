'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const socialLinks = [
  { name: "Twitter", url: "https://x.com/rosenbergradio" },
  { name: "Instagram", url: "https://www.instagram.com/rosenbergradio/" },
  { name: "YouTube", url: "https://www.youtube.com/c/rosenbergradio" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Title */}
          <div>
            <h2 className="text-7xl md:text-8xl font-display font-black leading-[0.9]">
              Get in<br/>Touch
            </h2>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            {/* Business */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Booking</h3>
                <a
                  href="mailto:BookRosenberg@gmail.com"
                  className="text-xl hover:text-red-600 transition-colors underline decoration-2 underline-offset-4"
                >
                  BookRosenberg@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Music Submissions</h3>
                <a
                  href="mailto:DJPeterRosenberg@gmail.com"
                  className="text-xl hover:text-red-600 transition-colors underline decoration-2 underline-offset-4"
                >
                  DJPeterRosenberg@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-2">Clean MP3s only</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Follow</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold border-b-2 border-black hover:border-red-600 hover:text-red-600 transition-colors pb-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
