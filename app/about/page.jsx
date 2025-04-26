"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((el) => {
      if (el) {
        const words = el.querySelectorAll("span");
        gsap.fromTo(
          words,
          { opacity: 0, y: 20, scale: 0.95, letterSpacing: "0.2em" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            letterSpacing: "0em",
            duration: 1,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  // Function to wrap each word in a span
  const wrapWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="inline-block opacity-0">
        {word}&nbsp;
      </span>
    ));

  return (
    <div className="w-full flex flex-col items-center">
      {/* Banner Section with Background Image */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
          style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
        >
          <div className="absolute inset-0 z-0"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">About Us</h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto">
            Crafting digital experiences that transform businesses
          </p>
        </div>
      </section>

      {/* About Content Section - Exactly following the AboutSection structure */}
      <section
        id="about-section"
        className="w-full max-w-[1440px] h-auto pt-5 pb-32 mx-auto"
      >
        <div className="px-4 md:text-left flex flex-col w-full max-w-[800px] gap-10 mx-auto">
          {/* Animated Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/about-icon.webp"
              alt="Icon"
              width={68}
              height={68}
              className="transition-transform duration-700 ease-out"
              priority
            />
          </div>

          {/* Morphing Text 1 */}
          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="text-[28px] md:text-[32px] font-nohemi font-[500] leading-[116%] tracking-wide text-[#667185] overflow-hidden text-center md:text-left"
          >
            {wrapWords("At HCL, we specialize in crafting")}
            <span className="font-[600] text-black"> next-gen web experiences </span>
            {wrapWords("that blend creativity with cutting-edge technology.")}
          </p>

          {/* Morphing Text 2 */}
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="text-[28px] md:text-[32px] font-nohemi font-[500] leading-[116%] tracking-wide text-[#667185] overflow-hidden text-center md:text-left"
          >
            {wrapWords("We deliver tailored solutions for")}
            <span className="font-[600] text-black">
              {" "}
              upgrading your site or creating a new digital platform.
            </span>
          </p>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="w-full max-w-[1440px] px-4 py-12">
        <div className="flex flex-col max-w-[800px] mx-auto">
          <h2 className="text-[40px] md:text-4xl font-semibold mb-6 text-left">Our Goals</h2>
          
          <p className="text-[32px] font-normal mb-6 text-center md:text-left">
            Since the inception of our company, we have been instrumental in aiding our clients to discover 
            outstanding solutions for their businesses, forging unforgettable brands and digital offerings.
          </p>
          
          <p className="text-[32px] font-normal mb-10 text-center md:text-left">
            With each passing year, our expertise deepens, allowing our accumulated knowledge to guide us in 
            crafting products precisely as they are meant to be.
          </p>
        </div>
      </section>

      {/* Double Image Section */}
      <section className="w-full max-w-[1440px] px-4 py-8 flex justify-center">
        <div className="w-full max-w-[800px] h-auto flex flex-col md:flex-row gap-6 justify-center">
          <div className="relative w-full md:w-[352px] h-[388px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/office-image-1.jpg"
              alt="Modern Office Space"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-[352px] h-[388px] rounded-3xl overflow-hidden shadow-lg mt-6 md:mt-12">
            <Image
              src="/images/hat.webp"
              alt="Team Collaboration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;