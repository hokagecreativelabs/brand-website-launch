"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function SingleProjectPage() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project when the component mounts or slug changes
    if (slug) {
      const foundProject = projects.find((p) => p.slug === slug);
      setProject(foundProject);
      setIsLoading(false);
    }
  }, [slug]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  // Show not found message if project isn't available
  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-gray-500">Project not found.</p>
      </div>
    );
  }

  // Filter out any image properties that don't exist or are empty strings
  const projectImages = [project.image1, project.image2].filter(img => img && img !== "");

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
        <div className="w-full max-w-3xl my-12">
          <Link href="/projects" className="text-lg font-nohemi flex items-center gap-2 hover:underline">
            ← Go to Projects
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

        {/* Tags - Uncomment if you want to use tags */}
        {/* {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm md:text-base font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )} */}

        {/* Details */}
        {project.details && project.details.length > 0 && (
          <div className="w-full max-w-3xl mb-8 space-y-4">
            {project.details.map((d, i) => (
              <div key={i} className="flex gap-[50px] border-b border-gray-200 pb-2">
                <span className="font-semibold">{d.title}</span>
                <span className="text-gray-600">{d.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Live Preview Button */}
        {project.liveLink && (
  <div className="mb-12">
    <Link
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple text-white tracking-wide flex items-center justify-center gap-2 border border-[#21083F] rounded-full px-6 py-4 hover:bg-purple-700 transition-colors"
    >
      <span className="text-base font-medium">Live Preview</span>
      <Image
        src="/images/web-icon.webp"
        alt="Web Icon"
        width={24}
        height={24}
        className="object-contain"
      />
    </Link>
  </div>
)}


        {/* Images */}
        {projectImages.length > 0 && (
          <div className="w-full max-w-3xl space-y-10">
            {projectImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}