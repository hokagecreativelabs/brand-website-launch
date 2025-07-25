'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <section 
        className="py-36 pb-24 sm:py-32 lg:py-48 relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/bg-pattern.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 px-2 mx-auto max-w-4xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm sm:text-base font-semibold tracking-widest text-purple uppercase">
              Connect & Learn from experts
            </p>
            <h1 className="mt-4 text-6xl font-extrabold text-purple sm:text-6xl xl:text-8xl leading-tight">
              Master the{' '}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                Skills
              </span>{' '}
              of Tomorrow
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-gray-700">
              Master modern web development through real-world projects, expert guidance, and a supportive tech community.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 font-semibold text-white bg-purple rounded-full hover:bg-purple/90 transition-all duration-300"
              >
                Join Upcoming Bootcamp
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
          </div>
        </div>
        <blockquote className="px-4 mt-8 text-center text-2xl sm:text-3xl md:mt-16 italic font-black font-vastago text-purple/40">
            “Tell me and I forget, teach me and I may remember, involve me and I learn.”
            </blockquote>
        <div className="absolute inset-0 z-0"></div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float 4.5s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 5s ease-in-out infinite 1s;
        }
      `}</style>
    </>
  );
}
