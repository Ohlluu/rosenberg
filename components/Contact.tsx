'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const socialLinks = [
  {
    name: "Twitter",
    icon: "𝕏",
    url: "https://x.com/rosenbergradio",
    color: "hover:text-white hover:bg-black",
    followers: "Follow the conversation",
  },
  {
    name: "Instagram",
    icon: "📷",
    url: "https://www.instagram.com/rosenbergradio/",
    color: "hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
    followers: "Behind the scenes",
  },
  {
    name: "YouTube",
    icon: "▶️",
    url: "https://www.youtube.com/c/rosenbergradio",
    color: "hover:text-white hover:bg-red-600",
    followers: "Watch the interviews",
  },
];

const contactInfo = [
  {
    type: "Booking Inquiries",
    email: "BookRosenberg@gmail.com",
    icon: "📅",
  },
  {
    type: "Music Submissions",
    email: "DJPeterRosenberg@gmail.com",
    icon: "🎵",
    note: "Send clean MP3s only",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-b from-black via-nyc-gray/20 to-black py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['🎤', '📻', '🎧', '🎵'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bebas tracking-wider mb-4">
            <span className="bg-gradient-to-r from-hot97-red via-espn-yellow to-electric-blue bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <p className="text-xl text-gray-400 mt-4">Connect, collaborate, or just say what&apos;s up</p>
          <div className="w-24 h-1 bg-gradient-to-r from-hot97-red to-electric-blue mx-auto mt-6"></div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bebas text-center mb-8 text-espn-yellow">
            FOLLOW THE JOURNEY
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-8 bg-white/5 rounded-2xl border-2 border-white/10 ${social.color} transition-all duration-300 text-center overflow-hidden`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Icon */}
                <motion.div
                  className="text-7xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {social.icon}
                </motion.div>

                {/* Name */}
                <h4 className="text-2xl font-bebas tracking-wide text-white mb-2">
                  {social.name}
                </h4>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-white transition-colors">
                  {social.followers}
                </p>

                {/* Arrow */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-3xl font-bebas text-center mb-8 text-hot97-red">
            BUSINESS INQUIRIES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.type}
                className="p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-espn-yellow/50 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{contact.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{contact.type}</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-espn-yellow hover:text-hot97-red transition-colors text-lg break-all"
                    >
                      {contact.email}
                    </a>
                    {contact.note && (
                      <p className="text-sm text-gray-500 mt-2 italic">{contact.note}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-hot97-red/10 via-espn-yellow/10 to-electric-blue/10 rounded-2xl border-2 border-white/10">
            <p className="text-3xl md:text-4xl font-light text-gray-300 mb-4">
              &quot;Broadcasting from the greatest city in the world&quot;
            </p>
            <div className="flex items-center justify-center gap-2 text-espn-yellow">
              <span className="text-2xl">🗽</span>
              <span className="text-xl font-bebas tracking-wider">NEW YORK CITY</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
