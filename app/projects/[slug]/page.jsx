"use client"
import { useParams } from 'react-router-dom'; // Use React Router's useParams
import Link from 'next/link'; // If you're using React, you can use React Router's Link instead
import { motion } from 'framer-motion';

const works = [
  {
    id: 1,
    title: "Mfon Usoro Books",
    slug: "mfon-usoro-books",
    description: "A book launch platform using Sanity CMS.",
    image1: "/images/MP.webp",
    image2: "/images/MP-2.webp",
    details: [
      { title: "Category", value: "Website + CMS" },
      { title: "Duration", value: "2 weeks" },
      { title: "Type", value: "Book Launch" },
    ],
  },
  {
    id: 2,
    title: "The Oladayo Akinmokun",
    slug: "the-oladayo-akinmokun",
    description: "A personal portfolio website for a designer.",
    image1: "/images/daylee.webp",
    image2: "/images/daylee-2.webp",
    details: [
      { title: "Category", value: "SPA" },
      { title: "Duration", value: "1 Week" },
      { title: "Type", value: "Portfolio" },
    ],
  },
  {
    id: 3,
    title: "Enauf Homes",
    slug: "enauf-homes",
    description: "A real estate web platform with property listings.",
    image1: "/images/enauf.webp",
    image2: "/images/enauf-2.webp",
    details: [
      { title: "Category", value: "Web Development" },
      { title: "Duration", value: "1 week" },
      { title: "Type", value: "Real Estate" },
    ],
  },
  {
    id: 4,
    title: "ITL Conference",
    slug: "itl-conference",
    description: "A conference website with custom dashboard.",
    image1: "/images/itl.webp",
    image2: "/images/itl-2.webp",
    details: [
      { title: "Category", value: "Website + Dashboard" },
      { title: "Duration", value: "12 weeks" },
      { title: "Type", value: "Conference" },
    ],
  },
];

export default function SingleProjectPage() {
  const { slug } = useParams(); // Get the slug from the URL
  const decodedSlug = decodeURIComponent(slug);
  const project = works.find((work) => work.slug === decodedSlug);

  if (!project) {
    return <p className="text-center text-gray-500 mt-12">Project not found.</p>;
  }

  return (
    <motion.div
      className="flex flex-col items-center w-full px-4 py-16 md:pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back to Projects */}
      <div className="w-full max-w-[800px]">
        <Link to="/projects" className="flex items-center gap-2 text-lg text-purple font-nohemi hover:underline">
          ← Back to Projects
        </Link>
      </div>

      {/* Project Title */}
      <h1 className="font-vastago font-medium text-[46px] md:text-[78px] leading-[104%] tracking-[-4%] mt-6 text-left w-full max-w-[800px]">
        {project.title}
      </h1>

      {/* Project Description */}
      <p className="font-vastago text-[16px] leading-[132%] tracking-[-2%] text-gray-600 mt-4 text-left w-full max-w-[800px]">
        {project.description}
      </p>

      {/* Project Details - Stacked */}
      <div className="mt-8 w-full max-w-[800px]">
        {project.details.map((detail, index) => (
          <div key={index} className="text-left">
            <h3 className="text-gray-800 font-semibold text-lg">{detail.title}</h3>
            <p className="text-gray-600 text-md">{detail.value}</p>
            <hr className="my-4 border-gray-300" />
          </div>
        ))}
      </div>

      {/* Live Preview CTA */}
      <a
        href="#"
        className="inline-flex items-center justify-center gap-2 w-[158px] h-[56px] bg-black text-white rounded-md mt-6"
      >
        <span className="font-vastago font-semibold text-[16px] leading-[145%] text-center">
          Live Preview
        </span>
        <div className="w-[22px] h-[22px] bg-[#7FF41A] flex items-center justify-center rounded-full">
          →
        </div>
      </a>

      {/* Project Images */}
      <div className="mt-16 flex flex-col gap-10 items-center w-full">
        <img
          src={project.image1}
          alt={project.title}
          className="w-full max-w-[800px] h-auto object-cover rounded-[32px] p-[72px] md:p-[40px] sm:p-[20px]"
        />
        <img
          src={project.image2}
          alt={`${project.title} preview`}
          className="w-full max-w-[800px] h-auto object-cover rounded-[32px]"
        />
      </div>

      {/* Testimonials */}
      {/* <div className="mt-16 w-full max-w-[800px]">
        <TestimonialSection />
      </div> */}
    </motion.div>
  );
}
