'use client';
import Image from "next/image";
import { FaInstagram, FaTimes } from "react-icons/fa";

const teamMembers = [
  {
    name: "Harsh Patel",
    role: "Developer",
    img: "/images/Icon-1.jpg",
  },
  {
    name: "Sofia Reyes",
    role: "Designer",
    img: "/images/Icon-1.jpg",
  },
  {
    name: "Jordan Lee",
    role: "Project Manager",
    img: "/images/Icon-1.jpg",
  },
  {
    name: "Alex Morgan",
    role: "Marketing Head",
    img: "/images/Icon-1.jpg",
  },
];

export default function OurTeam() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">
        Our Brilliant Team
      </h2>
      <p className="text-lg text-gray-500 mb-12 text-center max-w-md">
        These people work on making our product the best.
      </p>

      {/* Grid for team cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-2xl shadow-md bg-white"
          >
            <div className="relative w-full aspect-[3/4]">
              <img 
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay for large screens (hover effect) */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
              <div className="w-full">
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-purple-300 text-sm">{member.role}</p>
              </div>
            </div>

            {/* Always visible overlay on mobile */}
            <div className="absolute inset-0 flex md:hidden items-end p-4 bg-black/50">
              <div className="w-full">
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-purple-300 text-sm">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
