'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/projects';

export default function SelectedWorks() {
  // Get the first 2 branding projects
  const brandingProjects = projects.filter((p) =>
    Array.isArray(p.categories?.service) &&
    p.categories.service.some((service) =>
      service.toLowerCase().includes("branding")
    )
  ).slice(0, 2);

  // Get the rest that are not in brandingProjects
  const nonBrandingProjects = projects.filter(
    (p) => !brandingProjects.includes(p)
  );

  // Grab up to 2 more branding projects that weren't already in brandingProjects
  const additionalBrandingProjects = projects.filter((p) =>
    Array.isArray(p.categories?.service) &&
    p.categories.service.some((service) =>
      service.includes("Branding")
    ) &&
    !brandingProjects.includes(p)
  ).slice(0, 3);

  // Final display list: 4 non-branding + 2 branding
  const displayProjects = [
    ...nonBrandingProjects.slice(0, 5),
    ...additionalBrandingProjects,
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-12" id="projects-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 md:gap-0">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold tracking-tight leading-[120%] font-vastago">
          Selected Works
        </h2>

        <Link href="/projects" className="inline-block">
          <div
            className="inline-flex items-center gap-2 text-lg font-semibold transition-all ease-in-out hover:opacity-80 
            md:border md:border-[#21083F] md:py-4 md:px-6 md:rounded-full min-h-[48px] min-w-[100px] cursor-pointer"
          >
            <span className="hidden md:inline">View All</span>
            <span className="md:hidden text-blue-600 underline py-2">View All</span>
            <Image
              src="/images/button-icon.png"
              alt="Arrow Icon"
              width={24}
              height={24}
              className="ml-1"
            />
          </div>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayProjects.map((project) => (
          <div key={project.id} className="space-y-4">
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="relative w-full aspect-[16/9] rounded-[25px] overflow-hidden group cursor-pointer border border-gray-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            <h3 className="text-[22px] md:text-[28px] font-medium tracking-tight font-vastago">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:underline block py-2"
                aria-label={`View project: ${project.title}`}
              >
                {project.title}
              </Link>
            </h3>

            <div className="flex flex-wrap gap-3">
              {Array.isArray(project.categories?.service)
                ? project.categories.service.map((service, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-[14px] md:text-[16px] font-medium font-vastago"
                    >
                      {service}
                    </span>
                  ))
                : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
