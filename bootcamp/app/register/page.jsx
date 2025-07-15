import React from 'react'
import RegistrationForm from '@/components/RegistrationForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-[#FEFBF6]">
      <h1 className="text-3xl md:text-4xl text-center font-bold text-[#7F5283] mb-8">
        Register for the Bootcamp
      </h1>
      <RegistrationForm />
    </main>
  );
}
