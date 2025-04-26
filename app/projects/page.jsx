"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function SelectedWorks() {
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

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              <Link legacyBehavior href={`/projects/${project.slug}`}>
                <a className="block w-full h-[280px] md:h-[350px] lg:h-[400px] rounded-[25px] overflow-hidden group">
                  <Image
                    src={project.image1}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
      </section>
    </div>
  );
}
