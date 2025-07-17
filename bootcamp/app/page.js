import AboutBootcamp from '@/components/section/AboutBootcamp';
import FAQSection from '@/components/section/FAQSection';
import Hero from '@/components/section/HeroSection';
import HowItWorksSection from '@/components/section/HowItWorks';
import WhatYouWillLearn from '@/components/section/WhatYouWillLearn';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <AboutBootcamp />
      <WhatYouWillLearn />
      <HowItWorksSection />
      {/* <FAQSection /> */}
    </main>
  );
}
