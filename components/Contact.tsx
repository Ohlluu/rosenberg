'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-zinc-950 flex items-center justify-center py-32">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Large Contact Heading */}
          <h2 className="text-[15vw] md:text-[12vw] font-['Bebas_Neue'] font-black leading-none mb-16">
            LET&apos;S
            <br />
            <span className="text-red-600">CONNECT</span>
          </h2>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 text-left max-w-3xl mx-auto">
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Booking</div>
              <a
                href="mailto:BookRosenberg@gmail.com"
                className="text-2xl font-bold hover:text-red-600 transition-colors"
              >
                BookRosenberg@gmail.com
              </a>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Music Submissions</div>
              <a
                href="mailto:DJPeterRosenberg@gmail.com"
                className="text-2xl font-bold hover:text-red-600 transition-colors"
              >
                DJPeterRosenberg@gmail.com
              </a>
              <p className="text-sm text-gray-600 mt-2">Clean MP3s only</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {[
              { name: "TWITTER", url: "https://x.com/rosenbergradio", icon: "𝕏" },
              { name: "INSTAGRAM", url: "https://www.instagram.com/rosenbergradio/", icon: "📷" },
              { name: "YOUTUBE", url: "https://www.youtube.com/c/rosenbergradio", icon: "▶" },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{social.icon}</div>
                  <div className="text-sm font-bold tracking-wider group-hover:text-red-600 transition-colors">
                    {social.name}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <div className="text-6xl font-['Bebas_Neue'] text-gray-700">
            NEW YORK CITY
          </div>
        </motion.div>
      </div>
    </section>
  );
}
