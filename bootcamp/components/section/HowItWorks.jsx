import Link from 'next/link';
import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaLaptopCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserGraduate size={28} className="text-[#7FF41A]" />,
    title: 'Join the Program',
    description: 'Sign up for free or go premium to unlock personalized mentorship and career support.'
  },
  {
    icon: <FaChalkboardTeacher size={28} className="text-[#7FF41A]" />,
    title: 'Attend Lessons',
    description: 'Learn through beginner-friendly classes focused on real-world development tools and workflows.'
  },
  {
    icon: <FaLaptopCode size={28} className="text-[#7FF41A]" />,
    title: 'Build Real Projects',
    description: 'Apply what you learn by working on portfolio-worthy projects guided by experts.'
  },
  {
    icon: <FaRocket size={28} className="text-[#7FF41A]" />,
    title: 'Launch Your Career',
    description: 'Get support with job hunting, mock interviews, and resume reviews.'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-12 px-2 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-vastago font-black text-[#21083F] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 font-nohemi leading-relaxed max-w-3xl mx-auto">
            From beginner to job-ready – here’s how we’ll guide your journey.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center px-4">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-white border-2 border-[#21083F] rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="text-2xl font-vastago font-semibold text-[#21083F] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 font-nohemi leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center px-8 py-4 font-semibold text-white bg-purple rounded-full hover:bg-purple/90 transition-all duration-300"
              >
                Register Now
                <svg
                  className="w-6 h-6 ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8" />
                </svg>
              </Link>
            </div>
    </section>
  );
}
