'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Shows from '@/components/Shows';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Shows />
      <Gallery />
      <Contact />

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Peter Rosenberg</div>
          <div className="font-['Bebas_Neue'] text-lg tracking-wider">NEW YORK</div>
        </div>
      </footer>
    </main>
  );
}
