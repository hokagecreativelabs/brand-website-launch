'use client';

import React from 'react';
import Head from 'next/head';
import RegistrationForm from "../../components/RegistrationForm"

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

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Register | Hokage Creative Academy" />
        <meta
          property="og:description"
          content="Join the Hokage Creative Academy Bootcamp and kickstart your journey into tech and design. Limited slots available. Register now!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://academy.hokagecreativelabs.com/images/Icon-2.png"
        />
        <meta property="og:url" content="https://academy.hokagecreativelabs.com/register" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Register | Hokage Creative Academy" />
        <meta
          name="twitter:description"
          content="Join the Hokage Creative Academy Bootcamp and kickstart your journey into tech and design."
        />
        <meta
          name="twitter:image"
          content="https://academy.hokagecreativelabs.com/images/Icon-2.png"
        />
        <meta name="twitter:site" content="@hokagecreativelabs" />
        <meta name="twitter:creator" content="@hokagecreativelabs" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <main className="min-h-screen px-2 py-12">
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img
            src="/images/bg-pattern.webp"
            alt="Registration Background Pattern"
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
        <RegistrationForm />
      </main>
    </>
  );
}
