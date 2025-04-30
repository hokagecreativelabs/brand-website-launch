"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "The ITL Conference, Canada",
    slug: "itl-conference-canada",
    image: "/images/projects/itl.webp",
    tags: ["Conference Web Application", "MERN Stack"],
  },
  {
    id: 2,
    title: "Mfon Usoro Books",
    slug: "mfon-usoro-books",
    image: "/images/projects/mp.webp",
    tags: ["Book Launch Web Application", "UI/UX Design + Web Development"],
  },
  {
    id: 3,
    title: "The Cyber Lawyer",
    slug: "cyber-lawyer",
    image: "/images/projects/daylee.webp",
    tags: ["Portfolio Website", "Personal Branding"],
  },
  {
    id: 4,
    title: "KingsWord",
    slug: "kings-word",
    image: "/images/projects/kings.webp",
    tags: ["Church Website", "Website + Custom Dashboard"],
  },
];

// Create a motion component for the button
const MotionDiv = motion.div;

export default function SelectedWorks() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12" id="projects-section">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 md:gap-0">
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold tracking-tight leading-[120%] font-vastago">
          Selected Works
        </h2>

        <Link href="/projects" className="inline-block">
          <MotionDiv
            className="inline-flex items-center gap-2 text-lg font-semibold transition-all ease-in-out hover:opacity-80 
                     md:border md:border-[#21083F] md:py-4 md:px-6 md:rounded-full min-h-[48px] min-w-[100px] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          </MotionDiv>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="space-y-4">
            {/* Project Image Container with Border */}
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

            {/* Project Info */}
            <h3 className="text-[22px] md:text-[28px] font-medium tracking-tight font-vastago">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:underline block py-2"
                aria-label={`View project: ${project.title}`}
              >
                {project.title}
              </Link>
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-[14px] md:text-[16px] font-medium font-vastago"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
