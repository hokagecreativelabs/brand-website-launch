"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useRef, useEffect } from "react";
import { projects } from "@/data/projects";

const services = [
  { id: 1, slug: 'branding', title: 'Branding' },
  { id: 2, slug: 'ui-ux-design', title: 'UI/UX Design' },
  { id: 3, slug: 'web-development', title: 'Software Development' },
  { id: 4, slug: 'e-commerce-applications', title: 'eCommerce Applications' },
  { id: 5, slug: 'consultations', title: 'Consultations' },
  { id: 6, slug: 'custom-dashboards', title: 'Custom Dashboards' },
  { id: 7, slug: 'seo-optimization', title: 'SEO Optimization' },
  { id: 8, slug: 'web-development-training', title: 'Web Development Training' },
];

export default function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredProjects = useMemo(() => {
    if (!activeFilter) return projects;
    return projects.filter(project =>
      project.tags.some(tag => tag.toLowerCase().includes(activeFilter))
    );
  }, [activeFilter]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    setIsDropdownOpen(false);
  };

  // Get the display text for the current filter
  const currentFilterText = activeFilter 
    ? services.find(s => s.title.toLowerCase() === activeFilter)?.title || 'All'
    : 'All';

  return (
    <div className="pt-16 md:pt-20">
      <Head>
        <title>Our Projects</title>
      </Head>

      {/* Banner */}
      <section className="relative w-full h-[200px] md:h-[275px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Our Projects</h1>
        </div>
      </section>

      {/* Filter - Mobile Dropdown & Desktop Buttons */}
      <div className="px-6 md:px-12 lg:px-24 py-8">
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-20 mt-2 w-full rounded-lg shadow-lg bg-white border overflow-hidden">
              <div className="max-h-60 overflow-y-auto">
                <button
                  onClick={() => handleFilterSelect(null)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 ${!activeFilter ? 'bg-gray-200' : ''}`}
                >
                  All
                </button>
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleFilterSelect(service.title.toLowerCase())}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 ${
                      activeFilter === service.title.toLowerCase() ? 'bg-gray-200' : ''
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-5 py-2 rounded-full border font-medium transition ${
              !activeFilter ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            All
          </button>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveFilter(service.title.toLowerCase())}
              className={`px-5 py-2 rounded-full border font-medium transition ${
                activeFilter === service.title.toLowerCase()
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="space-y-4">
              <Link legacyBehavior href={`/projects/${project.slug}`}>
                <a className="block w-full h-[280px] md:h-[350px] lg:h-[400px] rounded-[25px] overflow-hidden group relative">
                  <Image
                    src={project.image1}
                    alt={project.title}
                    fill
                    style={{ objectFit: "contain" }}
                    className="border border-gray-300 duration-500 group-hover:scale-105 rounded-[25px]"
                    priority
                  />
                </a>
              </Link>

              <h3 className="text-[22px] md:text-[28px] font-medium tracking-tight font-vastago">
                <Link legacyBehavior href={`/projects/${project.slug}`}>
                  <a className="hover:underline">{project.title}</a>
                </Link>
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 rounded-full px-4 py-1.5 text-[14px] md:text-[16px] font-medium font-vastago"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 mt-12 text-lg">
            No projects match this service category.
          </div>
        )}
      </section>
    </div>
  );
}