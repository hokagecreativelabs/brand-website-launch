"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamically import Carousel for desktop only
const Carousel = dynamic(() => import("../../components/ui/Carousel"), { ssr: false });

const Hero = () => {
  const TYPING_TEXT = "Hokage Creative Labs";
  const IMAGES = ["bosan", "academy", "party", "MP", "itll"];

  // Preload carousel images only on desktop
  useEffect(() => {
    if (window.innerWidth > 768) {
      IMAGES.forEach((img) => {
        const preloadImg = new Image();
        preloadImg.src = `/images/${img}.webp`;
      });
    }
  }, []);

  return (
    <section
      className="pt-10 md:pt-12 lg:pt-16 relative w-full flex flex-col items-center justify-center overflow-hidden bg-[url('/images/bg-pattern.webp')] bg-cover bg-center"
      aria-label="Hero Section"
    >
      <div className="w-full max-w-full flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px] px-4 sm:px-8">
        {/* ✅ Heading - No layout shift */}
        <h1
          className="font-vastago font-semibold text-[48px] sm:text-[70px] md:text-[96px] leading-[120%] tracking-[-0.02em] h-[100px] sm:h-[140px] flex items-center justify-center"
          aria-label={TYPING_TEXT}
        >
          <span className="inline-block">{TYPING_TEXT}</span>
        </h1>

        {/* ✅ Paragraph - Reduce layout shift */}
        <p className="pt-12 md:pt-12 lg:pt-0 max-w-[598px] text-[18px] sm:text-[20px] md:text-[24px] leading-[145%] tracking-[-0.01em] font-nohemi">
          <span className="font-normal">
            Driven By Creativity. Powered By Technology.
          </span>{" "}
          We craft innovative and strategize solutions that bring your ideas to life.
        </p>

        {/* ✅ CTA Button - No layout shift */}
        <Link
          href="/projects"
          className="relative z-10 bg-purple text-white font-nohemi tracking-wide mt-[10px] mb-[-30px] md:mb-0 inline-flex items-center justify-center gap-2 w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-4 py-3 hover:bg-white hover:text-black transition duration-300 ease-out"
          aria-label="Request a Quote"
        >
          <span className="flex-shrink-0">See Our Works</span>
          <Image
            src="/images/right-arrow.webp"
            alt="Arrow Icon"
            width={24}
            height={24}
            className="object-contain"
            style={{ width: "24px", height: "24px" }}
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        {/* ✅ Optimized Mobile Image (LCP candidate) */}
        <div className="block md:hidden mt-[35px] w-full h-auto">
          <Image
            src="/images/idea.webp"
            alt="Hero Preview"
            width={1200}
            height={600}
            priority
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto object-contain rounded-xl"
            style={{ maxHeight: "auto" }}
          />
        </div>

        {/* ✅ Desktop Carousel (ignored for mobile) */}
        <div className="hidden md:block w-full h-full mt-[-70px]">
          <Carousel images={IMAGES} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
