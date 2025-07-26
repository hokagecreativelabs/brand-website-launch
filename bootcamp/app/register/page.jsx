'use client';

import RegistrationForm from '@/components/RegistrationForm';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <>
      <main className="min-h-screen px-4 py-12">
        {/* Header Section */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img
            src="/images/bg-pattern.webp"
            alt="Registration Background Pattern"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl mt-16 font-black text-purple tracking-tight">
                Registration
              </h1>
            </div>
          </div>
        </section>

        {/* Flex Layout Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
          {/* Flyer Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
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

          {/* Form */}
          <div className="w-full lg:w-1/2">
            <RegistrationForm />
          </div>
        </section>
      </main>
    </>
  );
}
