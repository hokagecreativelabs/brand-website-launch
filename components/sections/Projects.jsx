"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "The ITL Conference, Canada",
    slug: "itl-conference-canada",
    image: "/images/projects/itl.png",
    tags: ["Conference Web Application", "MERN Stack"],
  },
  {
    id: 2,
    title: "Mfon Usoro Books",
    slug: "mfon-usoro-books",
    image: "/images/projects/mp.png",
    tags: ["Book Launch Web Application", "UI/UX Design + Web Development"],
  },
  {
    id: 3,
    title: "The Cyber Lawyer",
    slug: "cyber-lawyer",
    image: "/images/projects/daylee.png",
    tags: ["Portfolio Website", "Personal Branding"],
  },
  {
    id: 4,
    title: "KingsWord",
    slug: "kings-word",
    image: "/images/projects/kings.png",
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
        
        {/* Fixed View All button - Using proper Next.js pattern */}
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
            {/* Project Image - Improved touch target */}
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="w-full h-auto aspect-w-16 aspect-h-9 rounded-[25px] overflow-hidden group relative cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600} // Fixed width to maintain aspect ratio
                  height={338} // Fixed height to maintain aspect ratio
                  className="transition-transform duration-500 group-hover:scale-105 object-cover" // object-cover ensures the image covers the area
                />
              </div>
            </Link>

            {/* Project Info - Improved touch target */}
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
