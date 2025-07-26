"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../../components/ui/Carousel";

const Hero = () => {
  const TYPING_TEXT = "Hokage Creative Labs";
  const IMAGES = ["bosan", "academy", "party", "MP", "itll"];

  return (
    <section
      className="pt-32 md:pt-32 w-full flex flex-col items-center justify-start overflow-hidden bg-white bg-[url('/images/bg-pattern.webp')] bg-cover bg-center transition-none"
      aria-label="Hero Section"
    >
      <div className="w-full max-w-full flex flex-col items-center text-center gap-6 px-2 sm:px-8">
        {/* Title */}
          <h1 className="font-vastago font-semibold text-[52px] sm:text-[60px] md:text-[96px] leading-[120%] tracking-[-0.02em] h-[100px] sm:h-[110px] md:h-[140px] flex items-center justify-center"
          aria-label={TYPING_TEXT}>Hokage Creative Labs</h1>

        {/* Subtext */}
        <p className="pt-10 md:pt-6 max-w-[600px] text-[18px] sm:text-[20px] md:text-[24px] leading-[145%] tracking-[-0.01em] font-nohemi">
          <span className="font-normal">
            Driven By Creativity. Powered By Technology.
          </span>{" "}
          We craft innovative and strategize solutions that bring your ideas to life.
        </p>

        {/* CTA */}
        <Link
          href="/projects"
          className="relative z-10 bg-purple text-white font-nohemi tracking-wide mt-8 inline-flex items-center justify-center gap-2 w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-4 py-3 hover:bg-white hover:text-black transition duration-300 ease-out"
          aria-label="See Our Works"
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
            />
          </div>
        </Link>

        {/* Desktop Only Carousel */}
        <div className="hidden md:block w-full h-[480px] mt-[-60px] overflow-hidden">
          <Carousel images={IMAGES} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
