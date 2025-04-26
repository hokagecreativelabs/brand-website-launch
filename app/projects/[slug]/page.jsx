"use client";

import Head from "next/head";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function SingleProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-gray-500">Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>

      <motion.div
        className="px-6 py-16 md:pt-32 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Back Link */}
        <div className="w-full max-w-3xl mb-6">
          <Link legacyBehavior href="/projects">
            <a className="text-lg font-nohemi flex items-center gap-2 hover:underline">
              ← Back to Projects
            </a>
          </Link>
        </div>

        {/* Title */}
        <h1 className="font-vastago text-[46px] md:text-[78px] font-medium mb-4 text-center max-w-3xl">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-3xl text-center">
          {project.description}
        </p>

        {/* Tags */}
        {/* <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm md:text-base font-medium"
            >
              {tag}
            </span>
          ))}
        </div> */}

        {/* Details */}
        <div className="w-full max-w-3xl mb-8 space-y-4">
          {project.details.map((d, i) => (
            <div key={i} className="flex gap-[50px] border-b border-gray-200 pb-2">
              <span className="font-semibold">{d.title}</span>
              <span className="text-gray-600">{d.value}</span>
            </div>
          ))}
        </div>

        {/* Live Preview */}
        {project.liveLink && (
          <div className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full mb-12">
                    <button
                      type="button"
                      aria-label="Request a Quote"
                      className={"bg-purple text-white tracking-wide flex items-center justify-center gap-[8px] w-full h-full border border-[#21083F] rounded-[40px] px-[16px] py-[16px]"}
                    >
                      Live Preview
                      <a href={project.liveLink} className="w-6 h-6 flex-shrink-0 relative">
                        <Image
                          src="/images/web-icon.png"
                          alt="Arrow Icon"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </a>
                    </button>
                  </div>
        )}

        {/* Images */}
        <div className="w-full max-w-3xl space-y-10">
          {[project.image1, project.image2].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-2xl"
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
