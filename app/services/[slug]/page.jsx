'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { use } from 'react';

// Make sure this path is correct relative to your slug page file location
import serviceDetails from '@/data/serviceDetails';  // Use @ alias if configured or adjust path

export default function ServiceSlugPage({ params }) {
  // Properly unwrap the params using React.use()
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;

  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-16 md:pt-20">
      <section className="relative h-[200px] md:h-[275px] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-6xl font-bold font-vastago">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="max-w-screen-lg mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">{service.title}</h2>
          <p className="text-gray-600 mb-12">{service.description}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="border p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.tier}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/services" className="inline-block text-purple py-3 px-6">
                ← Back to Services
            </Link>
            </div>
        </motion.div>
      </section>
    </main>
  );
}