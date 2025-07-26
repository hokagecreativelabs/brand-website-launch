'use client';

import RegistrationForm from '@/components/RegistrationForm';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <main className="min-h-screen px-2 py-12">
      {/* Hero Section */}
      <section className="relative h-32 md:h-80 overflow-hidden">
        {/* Background Image - Only on md+ */}
        <img
          src="/images/bg-pattern.webp"
          alt=""
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-2">
          <div className="text-center mt-24 md:mt-0">
            <h1 className="text-3xl md:text-6xl font-black text-purple tracking-tight">
              Registration
            </h1>
          </div>
        </div>
      </section>

      {/* Flex Layout Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8">
        {/* Flyer Image - show first on mobile */}
        <div className="w-full lg:w-1/2 order-1 lg:order-none flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4]">
            <Image
              src="/images/Bootcamp_web.jpg"
              alt="Bootcamp Flyer"
              fill
              className="object-contain rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Registration Form */}
        <div className="w-full lg:w-1/2 order-2 lg:order-none">
          <RegistrationForm />
        </div>
      </section>
    </main>
  );
}
