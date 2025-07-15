import AboutBootcamp from '@/components/section/AboutBootcamp';
import Hero from '@/components/section/HeroSection';
import WhatYouWillLearn from '@/components/section/WhatYouWillLearn';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <AboutBootcamp />
    </main>
  );
}
