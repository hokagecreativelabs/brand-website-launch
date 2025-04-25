// components/sections/Hero.tsx
"use client";
import React, { useState, useEffect, useCallback } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateIsMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      updateIsMobile();
      window.addEventListener("resize", updateIsMobile);
      return () => window.removeEventListener("resize", updateIsMobile);
    }
  }, []);

  useEffect(() => {
    let timeoutId;
    const animateText = () => {
      if (displayedText.length < TYPING_TEXT.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(
            TYPING_TEXT.substring(0, displayedText.length + 1)
          );
        }, TYPING_SPEED);
      }
    };
    const startDelay = setTimeout(() => animateText(), 300);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startDelay);
    };
  }, [displayedText]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let lastScrollTime = 0;
      const throttleTime = 100;
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

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <section
      className="relative w-full min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
    >
      <div className="w-full max-w-full lg:max-w-[1046px] flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px] px-4 sm:px-8">
        <h1
          className="font-vastago font-semibold text-[76px] md:text-[96px] leading-[120%] tracking-[-0.02em] min-h-[140px] relative"
          aria-label={TYPING_TEXT}
        >
          {displayedText}
          <span className="opacity-0 absolute">{TYPING_TEXT}</span>
        </h1>

        <p className="max-w-[598px] text-[20px] leading-[145%] tracking-[-0.01em] font-nohemi min-h-[64px]">
          <span className="font-normal">Driven By Creativity. Powered By Technology. </span>
          We craft innovative and strategic solutions that bring your ideas to life.
        </p>

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
                alt="Arrow Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </button>
        </div>

        {isMobile ? (
          <div className="w-full h-[338px] mt-[60px] flex justify-center items-center">
            <div className="relative w-full h-full">
              <Image
                src="/optimized/idea-600.webp"
                alt="Mobile Static Image"
                priority
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
                className="object-contain rounded-[24px]"
              />
            </div>
          </div>
        ) : (
          <div className="hidden lg:block">
            <Carousel images={images} />
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <p className="mb-4">Fill out the form below to get started.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
              <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
              <button type="submit" className="w-full bg-purple text-white py-2 rounded">
                Submit
              </button>
            </form>
            <button onClick={toggleModal} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
