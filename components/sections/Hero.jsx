"use client";
import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy load the carousel component
const Carousel = dynamic(() => import("../../components/ui/Carousel"), { ssr: false });

const images = ["MP", "itl", "kings", "daylee", "enauf"];
const TYPING_TEXT = "Hokage Creative Labs";
const TYPING_SPEED = 100; // milliseconds per character

const Hero = () => {
  const [showCTA, setShowCTA] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    // Use SSR-safe check
    if (typeof window !== 'undefined') {
      const updateIsMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      
      // Set initial value
      updateIsMobile();
      
      // Add event listener
      window.addEventListener("resize", updateIsMobile);
      
      // Clean up
      return () => window.removeEventListener("resize", updateIsMobile);
    }
  }, []);

  // Typing effect with improved performance
  useEffect(() => {
    let timeoutId;
    
    const animateText = () => {
      if (displayedText.length < TYPING_TEXT.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(TYPING_TEXT.substring(0, displayedText.length + 1));
        }, TYPING_SPEED);
      }
    };
    
    // Start animation after a small delay to allow initial layout
    const startDelay = setTimeout(() => {
      animateText();
    }, 300);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startDelay);
    };
  }, [displayedText]);

  // Scroll effect for CTA button with throttling
  useEffect(() => {
    // Use SSR-safe check
    if (typeof window !== 'undefined') {
      let lastScrollTime = 0;
      const throttleTime = 100; // ms
      
      const handleScroll = () => {
        const now = Date.now();
        if (now - lastScrollTime >= throttleTime) {
          lastScrollTime = now;
          setShowCTA(window.scrollY < 100);
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Toggle modal with memoization to prevent unnecessary renders
  const toggleModal = useCallback(() => {
    setIsModalOpen(prevState => !prevState);
  }, []);

  return (
    <section
      className="relative w-full h-auto min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
    >
      <div className="w-full max-w-full lg:max-w-[1046px] h-auto flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px] px-4 sm:px-8">
        {/* Reserve space for heading with min-height to prevent layout shifts */}
        <h1
          className="font-vastago font-semibold text-[76px] md:text-[96px] leading-[120%] tracking-[-0.02em] min-h-[115px] md:min-h-[140px] w-full"
          aria-label="Hokage Creative Labs"
        >
          {displayedText}
          {/* Invisible placeholder text to reserve space */}
          <span className="opacity-0 absolute">{TYPING_TEXT}</span>
        </h1>

        {/* Subtitle with consistent space allocation */}
        <p className="max-w-[598px] text-[20px] leading-[145%] tracking-[-0.01em] font-nohemi md:-mb-[30px] min-h-[64px]">
          <span className="font-normal">Driven By Creativity. Powered By Technology. </span>
          We craft innovative and strategic solutions that bring your ideas to life.
        </p>

        {/* CTA Button with fixed dimensions container */}
        <div className="h-[56px] mt-[10px] md:mt-[40px] mb-[-30px] w-[191px]">
          <button
            type="button"
            aria-label="Request a Quote"
            onClick={toggleModal}
            className={`bg-purple text-white tracking-wide flex items-center justify-center gap-[8px] w-full h-full border border-[#21083F] rounded-[40px] px-[16px] py-[16px] hover:bg-white hover:text-black transition duration-300 ease-out whitespace-nowrap ${
              showCTA ? "opacity-100" : "opacity-0"
            }`}
          >
            Request a Quote
            <div className="w-6 h-6 flex-shrink-0 relative">
              <Image
                src="/images/right-arrow.webp"
                alt="Call Icon"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
          </button>
        </div>

        {/* Mobile Static Image with fixed dimensions */}
        {isMobile && (
          <div className="w-full h-[338px] mt-[60px] flex justify-center items-center">
            <div className="relative w-full h-full">
              <Image
                src="/optimized/idea-600.webp"
                alt="Mobile Static Image"
                fill
                priority // 👈 Add this
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
                className="object-contain rounded-[24px]"
              />
            </div>
          </div>
        )}


        {/* Desktop Carousel */}
        {!isMobile && (
          <div className="hidden lg:block">
            <Carousel images={images} />
          </div>
        )}
      </div>

      {/* Modal - Use portal pattern for better performance */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <p className="mb-4">Fill out the form below to get started.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple text-white py-2 rounded"
              >
                Submit
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;