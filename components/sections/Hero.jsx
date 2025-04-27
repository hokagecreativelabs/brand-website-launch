"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Carousel = dynamic(() => import("../../components/ui/Carousel"), {
  ssr: false,
});

const images = ["MP", "itl", "kings", "daylee", "enauf"];
const TYPING_TEXT = "Hokage Creative Labs";
const TYPING_SPEED = 100;

const Hero = () => {
  const [showCTA, setShowCTA] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateIsMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      updateIsMobile();
      let resizeTimer;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateIsMobile, 100);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(resizeTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      let typingTimer;
      const animateText = () => {
        if (displayedText.length < TYPING_TEXT.length) {
          typingTimer = setTimeout(() => {
            setDisplayedText(TYPING_TEXT.substring(0, displayedText.length + 1));
          }, TYPING_SPEED);
        }
      };
      const startDelay = setTimeout(animateText, 300);
      return () => {
        clearTimeout(typingTimer);
        clearTimeout(startDelay);
      };
    } else {
      setDisplayedText(TYPING_TEXT);
    }
  }, [displayedText, isMobile]);

  useEffect(() => {
    if (typeof window === "undefined" || isMobile) return;
    const handleScroll = () => {
      setShowCTA(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <section
      className="relative w-full min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
    >
      <div className="w-full max-w-full flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px] px-4 sm:px-8">
        <h1
          className="font-vastago font-semibold text-[76px] md:text-[96px] leading-[120%] tracking-[-0.02em] min-h-[140px] relative"
          aria-label={TYPING_TEXT}
        >
          {displayedText}
          <span className="opacity-0 absolute">{TYPING_TEXT}</span>
          {!isMobile && displayedText.length < TYPING_TEXT.length && (
            <span className="animate-pulse">|</span>
          )}
        </h1>

        <p className="max-w-[598px] text-[20px] md:text-[24px] leading-[145%] tracking-[-0.01em] font-nohemi min-h-[64px]">
          <span className="font-normal">Driven By Creativity. Powered By Technology. </span>
          We craft innovative and strategic solutions that bring your ideas to life.
        </p>

        <div className="h-[56px] mt-[10px] md:mt-[40px] mb-[-10px] w-[191px]">
          <a 
            href="/projects"
            aria-label="See Our Works"
            className={`bg-purple text-white tracking-wide flex items-center justify-center gap-[8px] w-full h-full border border-[#21083F] rounded-[40px] px-[16px] py-[16px] hover:bg-white hover:text-black transition-all duration-300 ease-out whitespace-nowrap ${
              (isMobile || showCTA) ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4 pointer-events-none"
            }`}
          >
            See Our Works
            <div className="w-6 h-6 flex-shrink-0 relative">
              <Image
                src="/images/right-arrow.webp"
                alt="Arrow Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </a>
        </div>

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
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full mt-[-70px]">
            <Carousel images={images} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
