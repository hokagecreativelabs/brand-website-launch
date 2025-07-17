import React from 'react'
import RegistrationForm from '@/components/RegistrationForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen px-2 py-12">
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/bg-pattern.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-purple tracking-tight">
              Registration
            </h1>
          </div>
        </div>
      </section>
      {/* <h1 className="text-3xl md:text-4xl text-center font-bold text-[#7F5283] mb-8">
        Register for the Bootcamp
      </h1> */}
      <RegistrationForm />
    </main>
  );
}
