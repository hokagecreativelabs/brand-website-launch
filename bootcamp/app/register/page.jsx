'use client';

import React from 'react';
import Head from 'next/head';
import RegistrationForm from '../../components/RegistrationForm';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register | FREE Web Development Bootcamp</title>
        <meta
          name="description"
          content="Join the Hokage Creative Academy Bootcamp FREE and kickstart your journey into tech and design. Limited slots available. Register now!"
        />
        <meta
          name="keywords"
          content="hokage creative academy, hokage bootcamp, register, tech bootcamp, frontend training, design training, creative bootcamp, UI/UX bootcamp"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://academy.hokagecreativelabs.com/register" />

        {/* OG / Twitter tags */}
        <meta property="og:title" content="Register | Hokage Creative Academy" />
        <meta
          property="og:description"
          content="Join the Hokage Creative Academy Bootcamp and kickstart your journey into tech and design. Limited slots available. Register now!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://academy.hokagecreativelabs.com/images/Icon-2.png" />
        <meta property="og:url" content="https://academy.hokagecreativelabs.com/register" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Register | Hokage Creative Academy" />
        <meta name="twitter:description" content="Join the Hokage Creative Academy Bootcamp and kickstart your journey into tech and design." />
        <meta name="twitter:image" content="https://academy.hokagecreativelabs.com/images/Icon-2.png" />
        <meta name="twitter:site" content="@hokagecreativelabs" />
        <meta name="twitter:creator" content="@hokagecreativelabs" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

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
            <div className="relative w-full max-w-md aspect-[3/4]"> {/* Adjust aspect ratio to match your flyer */}
              <Image
                src="/images/Bootcamp_web.jpg" // This must be in the /public/images folder
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
