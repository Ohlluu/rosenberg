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
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Peter Rosenberg</p>
          <p className="text-sm text-gray-500">New York City</p>
        </div>
      </footer>
    </main>
  );
}
