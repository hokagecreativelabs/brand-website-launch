'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import serviceDetails from '@/data/serviceDetails';

export default function ServiceSlugPage({ params }) {
  const { slug } = use(params);
  const service = serviceDetails[slug];

  if (!service) return notFound();

  return (
    <main className="px-4 md:px-8 lg:px-16 text-gray-900 min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl mb-12">
        <Image
          src="/images/bg-pattern.webp"
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-3xl md:text-5xl font-extrabold tracking-wide">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="-mt-32 max-w-5xl mx-auto space-y-12">
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
          {service.description}
        </p>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.pricing.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">{plan.tier}</h3>
              <ul className="list-disc text-lg list-inside text-gray-600 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="pt-10 flex justify-center">
          <Link
            href="/services"
            className="text-lg underline text-purple-600 hover:underline flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
