'use client';

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useRef, useEffect } from "react";
import { projects } from "@/data/projects";

// Service filter options
const services = [
  { id: 1, slug: 'branding', title: 'Branding' },
  { id: 2, slug: 'ui-ux-design', title: 'UI/UX Design' },
  { id: 3, slug: 'web-development', title: 'Web Development' },
  { id: 4, slug: 'e-commerce-applications', title: 'eCommerce Applications' },
  { id: 5, slug: 'consultations', title: 'Consultations' },
  { id: 6, slug: 'custom-dashboards', title: 'Custom Dashboards' },
  { id: 7, slug: 'seo-optimization', title: 'SEO Optimization' },
  { id: 8, slug: 'web-development-training', title: 'Web Development Training' },
  { id: 9, slug: 'payment-integration', title: 'Payment Integration' },
  { id: 10, slug: 'education', title: 'Education' },
  { id: 11, slug: 'whatsapp-orders', title: 'WhatsApp Orders' },
  { id: 12, slug: 'document-download', title: 'Document Download' },
  { id: 13, slug: 'brand-identity-design', title: 'Brand Identity Design' },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter logic using categories.service
  const filteredProjects = useMemo(() => {
    if (!activeFilter) return projects;
    return projects.filter(
      (project) =>
        Array.isArray(project.categories?.service) &&
        project.categories.service.some((s) =>
          s.toLowerCase().includes(activeFilter)
        )
    );
  }, [activeFilter]);

  const currentFilterText =
    services.find((s) => s.slug === activeFilter)?.title || 'All';

  const handleFilterSelect = (slug) => {
    setActiveFilter(slug);
    setIsDropdownOpen(false);
  };

  return (
    <div className="pt-16 md:pt-20">
      <Head>
        <title>Our Projects</title>
      </Head>

      {/* Hero Banner */}
      <section className="relative h-[220px] md:h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
        />
        <div className="relative z-10 text-center px-2">
          <h1 className="text-4xl md:text-6xl font-bold text-purple drop-shadow-lg">Our Projects</h1>
        </div>
      </section>

      {/* Filters */}
      <div className="px-2 md:px-12 lg:px-24 py-8">
        {/* Mobile Dropdown */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-5 py-3 rounded-full border bg-gray-100 text-gray-800 font-medium"
          >
            <span>{currentFilterText}</span>
            <svg
              className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute z-20 mt-2 w-full bg-white border rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => handleFilterSelect(null)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-100 ${!activeFilter ? 'bg-gray-200' : ''}`}
              >
                All
              </button>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleFilterSelect(service.slug)}
                  className={`w-full text-left px-2 py-3 hover:bg-gray-100 ${
                    activeFilter === service.slug ? 'bg-gray-200' : ''
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Filter Buttons */}
        <div className="hidden md:flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => handleFilterSelect(null)}
            className={`px-2 py-2 rounded-full border font-medium transition ${
              !activeFilter ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            All
          </button>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleFilterSelect(service.slug)}
              className={`px-2 py-2 rounded-full border font-medium transition ${
                activeFilter === service.slug ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <section className="px-2 md:px-12 lg:px-24 pb-12">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="space-y-4">
                <Link href={`/projects/${project.slug}`} className="block group relative rounded-[25px] overflow-hidden border border-gray-200">
                  <div className="relative h-[240px] md:h-[320px] lg:h-[400px] w-full">
                    {/* Only render Image if project.image exists and is not empty */}
                    {project.image && project.image.trim() !== '' ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-500 text-lg">No Image Available</span>
                      </div>
                    )}
                  </div>
                </Link>

                <h3 className="text-[22px] md:text-[28px] font-medium tracking-tight font-vastago">
                  <Link href={`/projects/${project.slug}`} className="hover:underline">
                    {project.title}
                  </Link>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.categories?.service) &&
                    project.categories.service.map((service, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 rounded-full px-2 py-1.5 text-[14px] md:text-[16px] font-medium font-vastago"
                      >
                        {service}
                      </span>
                    ))}
                </div>

                <div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-blue-600 hover:underline font-semibold text-sm"
                  >
                    See Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-12 text-lg">
            No projects match this service category.
          </div>
        )}
      </section>
    </div>
  );
}