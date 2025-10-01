'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Shows from '@/components/Shows';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Shows />
      <Gallery />
      <Contact />

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Peter Rosenberg. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
