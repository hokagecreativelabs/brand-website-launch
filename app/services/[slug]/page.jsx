'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import serviceDetails from '@/data/serviceDetails';
import { projects } from '@/data/projects';


export default function ServiceSlugPage({ params }) {
  const { slug } = use(params);
  const service = serviceDetails[slug];


  const relatedProjects = projects.filter((project) =>
    project.categories.service.includes(slug)
  );
  

  if (!service) return notFound();

  return (
    <main className="px-2 md:px-8 lg:px-16 text-gray-900 min-h-screen">
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
        {/* Related Projects */}
{relatedProjects.length > 0 && (
  <section className="mt-16">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
      Related Projects
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedProjects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project.id} className="group">
          <div className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-purple-700 group-hover:text-purple-900 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
)}

      </section>
    </main>
  );
}
