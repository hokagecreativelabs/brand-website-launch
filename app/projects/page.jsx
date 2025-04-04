"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

const projects = [
  {
    id: 1,
    title: "The ITL Conference, Canada",
    slug: "itl-conference-canada",
    image: "/images/clients/proj.png",
    tags: ["8 weeks", "Conference Web Application", "MERN Stack"],
  },
  {
    id: 2,
    title: "Mfon Usoro Books",
    slug: "mfon-usoro-books",
    image: "/images/clients/proj.png",
    tags: ["2 weeks", "Book Launch Web Application", "UI/UX Design + Web Development"],
  },
  {
    id: 3,
    title: "Asake Foods",
    slug: "asake-foods",
    image: "/images/clients/proj.png",
    tags: ["1 week", "Local Food Store", "Logo + Full Brand Identity"],
  },
  {
    id: 4,
    title: "Party Deal",
    slug: "party-deal-ng",
    image: "/images/clients/proj.png",
    tags: ["1 week", "Catering Services Company", "Logo + Full Brand Identity"],
  },
];

export default function SelectedWorks() {
  return (
    <>
      {/* Head Title */}
      <Head>
        <title>Selected Works</title>
      </Head>

      {/* Banner Section */}
      <section className="relative h-[200px] md:h-[275px] lg:h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}>
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Projects</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              {/* Project Image */}
              <Link href={`/projects/${project.slug}`}>
                <div className="w-full h-[280px] md:h-[350px] lg:h-[400px] rounded-[25px] overflow-hidden group relative cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Project Info */}
              <h3 className="text-[22px] md:text-[28px] font-medium tracking-tight font-vastago">
                <Link href={`/projects/${project.slug}`} className="hover:underline">
                  {project.title}
                </Link>
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 rounded-full px-4 py-1.5 text-[14px] md:text-[16px] font-medium font-vastago">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
