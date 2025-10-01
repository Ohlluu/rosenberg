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
    <section ref={ref} className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Contact</h2>

          {/* Business Inquiries */}
          <div className="mb-12 space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Booking Inquiries</h3>
              <a href="mailto:BookRosenberg@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                BookRosenberg@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Music Submissions</h3>
              <a href="mailto:DJPeterRosenberg@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                DJPeterRosenberg@gmail.com
              </a>
              <p className="text-sm text-gray-600 mt-1">Send clean MP3s only</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
