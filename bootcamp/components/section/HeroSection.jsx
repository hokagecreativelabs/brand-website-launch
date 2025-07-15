'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      const rect = document.getElementById('hero-section')?.getBoundingClientRect();
      if (!rect) return;
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const heroSection = document.getElementById('hero-section');
    heroSection?.addEventListener('mousemove', handleMouseMove);
    return () => heroSection?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center px-2 pt-28 pb-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 px-2">
        {/* Left Side */}
        <div className={`flex flex-col gap-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-purple leading-[1.1] tracking-tight">
            Master the{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Tools</span>
              <div className="absolute inset-0 bg-purple-500/10 transform rotate-1 rounded-lg" />
            </span>
            <br />
            <span className="relative inline-block text-purple-600 group">
              of Tomorrow
              <div className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] leading-relaxed max-w-xl font-light">
            Pure hands-on learning that transforms you into the kind of
            <span className="font-semibold text-purple-600 text-lg bg-purple-50 px-2 py-1 rounded-lg">
              creative visionary
            </span>
            the future demands.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { icon: "🚀", text: "Project-based learning" },
              { icon: "🎨", text: "Creative-first approach" },
              { icon: "👥", text: "Mentor-led structure" },
              { icon: "💡", text: "Zero jargon, real skills" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm sm:text-base text-[#3D3C42] font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-5 items-center justify-center text-center">
            <Link
              href="/register"
              className="group relative bg-purple text-white text-base sm:text-lg px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95 overflow-hidden text-center w-full sm:w-auto"
            >
              <span className="relative z-10">Join Bootcamp</span>
              <div className="absolute inset-0 bg-purple-600 rounded-full group-hover:bg-purple-500 transition-colors duration-300" />
            </Link>

            <div className="flex items-center justify-center gap-2 text-[#3D3C42] group cursor-pointer self-center">
              <span className="text-sm sm:text-base font-medium underline group-hover:text-purple-600 transition-colors duration-300">
                Register for the new Bootcamp Cohort
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

        </div>

        {/* Right Side - Glassy Overlay with Background Image */}
        <div className={`relative w-full h-[500px] lg:h-[600px] ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'}`}>
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src="/images/web-web.jpg"
              alt="Creative Learning Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 max-w-md w-full hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl" />
              {/* <div className="relative z-10 text-center space-y-5">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Ready to Transform?</h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  Join hundreds of creators who've already mastered tomorrow's tools
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-7 h-7 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full border-2 border-white/50"
                      />
                    ))}
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm self-center">+500 students</span>
                </div>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-2.5 px-6 rounded-xl transition-all duration-300 border border-white/30">
                  Get Started Today
                </button>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping" /> */}
              {/* <div className="absolute bottom-8 left-4 w-1 h-1 bg-purple-300/80 rounded-full animate-ping delay-500" /> */}
              {/* <div className="absolute top-1/2 right-6 w-1 h-1 bg-blue-300/80 rounded-full animate-ping delay-1000" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[#3D3C42]/50">
        <span className="text-sm font-medium">Scroll to explore</span>
        <div className="w-px h-8 bg-[#3D3C42]/20 animate-pulse" />
      </div> */}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </section>
  );
}
