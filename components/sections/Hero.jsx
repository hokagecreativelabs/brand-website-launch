"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Constants
const IMAGES = ["MP", "itl", "kings", "daylee", "enauf"];
const TYPING_TEXT = "Hokage Creative Labs";
const TYPING_SPEED = 100;
const TYPING_DELAY = 100;
const MOBILE_BREAKPOINT = 1024;
const SCROLL_THRESHOLD = 100;

// Dynamic import with SSR disabled
const Carousel = dynamic(() => import("../../components/ui/Carousel"), {
  ssr: false,
});

const Hero = () => {
  // State management
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle responsive detection
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateIsMobile = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };
      
      updateIsMobile();
      
      // Debounced resize handler
      let resizeTimer;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateIsMobile, 100);
      };
      
      window.addEventListener("resize", handleResize);
      setIsLoaded(true);
      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(resizeTimer);
      };
    }
  }, []);

  // Text animation effect - Only start after page is fully loaded
  useEffect(() => {
    if (!isMobile && isLoaded) {
      let typingTimer;
      
      const animateText = () => {
        if (displayedText.length < TYPING_TEXT.length) {
          typingTimer = setTimeout(() => {
            setDisplayedText(TYPING_TEXT.substring(0, displayedText.length + 1));
          }, TYPING_SPEED);
        }
      };
      
      const startDelay = setTimeout(animateText, TYPING_DELAY);
      
      return () => {
        clearTimeout(typingTimer);
        clearTimeout(startDelay);
      };
    } else if (isLoaded) {
      setDisplayedText(TYPING_TEXT);
    }
  }, [displayedText, isMobile, isLoaded]);

  // Scroll effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="pt-12 md:pt-8 lg:pt-0 relative w-full min-h-[876px] flex flex-col items-center justify-center overflow-hidden bg-[url('/images/bg-pattern.webp')] bg-cover bg-center"
    >
      {/* Reserve space for content before it loads to prevent layout shift */}
      <div 
        className="w-full max-w-full flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px] px-4 sm:px-8"
        style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
      >
        <h1
          className="font-vastago font-semibold text-[76px] md:text-[96px] leading-[120%] tracking-[-0.02em] h-[140px] relative flex items-center justify-center"
          aria-label={TYPING_TEXT}
        >
          <span className="inline-block min-w-full">
            {displayedText}
            {!isMobile && displayedText.length < TYPING_TEXT.length && (
              <span className="animate-pulse">|</span>
            )}
          </span>
          {/* Hidden text to reserve proper space even before animation starts */}
          <span className="opacity-0 absolute">{TYPING_TEXT}</span>
        </h1>

        <p className="pt-16 md:pt-12 lg:pt-0 max-w-[598px] text-[20px] md:text-[24px] leading-[145%] tracking-[-0.01em] font-nohemi min-h-[64px]">
          <span className="font-normal">Driven By Creativity. Powered By Technology. </span>
          We craft innovative and strategic solutions that bring your ideas to life.
        </p>

        <Link
          href="/projects"
          className="relative z-10 bg-purple text-white font-nohemi tracking-wide mt-[10px] -md:mt-[40px] mb-[-30px] md:mb-0 inline-flex items-center justify-center gap-2 w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-4 py-3 hover:bg-white hover:text-black transition duration-300 ease-out"
          aria-label="Request a Quote"
        >
          <span className="flex-shrink-0">See Our Works</span>
          <div className="flex-shrink-0 w-6 h-6 relative">
            <Image
              src="/images/right-arrow.webp"
              alt="Arrow Icon"
              width={24}
              height={24}
              className="object-contain"
              priority
              style={{ width: '24px', height: '24px' }}
            />
          </div>
        </Link>
        
        {isMobile ? (
          <div className="w-full h-[338px] mt-[60px] flex justify-center items-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/idea.webp"
                alt="Mobile Hero Image"
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
                className="object-contain rounded-[24px]"
                priority
                onLoad={() => {
                  // This helps ensure image has fully loaded
                  if (!isLoaded) setIsLoaded(true);
                }}
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full mt-[-70px]">
            {isLoaded && <Carousel images={IMAGES} />}
          </div>
        )}
      </div>
      
      {/* Loading placeholder - shows while content is loading */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-purple border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
