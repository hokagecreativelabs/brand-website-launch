"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
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
    <section
      id="about-section"
      className="w-full max-w-[1440px] h-auto pt-5 pb-32 mx-auto"
    >
      <div className="px-4 md:text-left flex flex-col w-full max-w-[800px] gap-10 mx-auto">
        {/* Animated Image */}
        <div className="flex justify-start">
          <div className="w-[68px] h-[68px] relative">
            <Image
              src="/images/about-icon.webp"
              alt="Icon"
              fill
              sizes="(max-width: 768px) 48px, 68px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Morphing Text 1 */}
        <p
          ref={(el) => (textRefs.current[0] = el)}
          className="text-[28px] md:text-[32px] font-nohemi font-[500] leading-[116%] tracking-wide text-[#667185] overflow-hidden"
        >
          {wrapWords("At HCL, we specialize in crafting")}
          <span className="font-[600] text-black"> next-gen web experiences </span>
          {wrapWords("that blend creativity with cutting-edge technology.")}
        </p>

        {/* Morphing Text 2 */}
        <p
          ref={(el) => (textRefs.current[1] = el)}
          className="text-[28px] md:text-[32px] font-nohemi font-[500] leading-[116%] tracking-wide text-[#667185] overflow-hidden"
        >
          {wrapWords("We deliver tailored solutions for")}
          <span className="font-[600] text-black">
            {" "}
            upgrading your site or creating a new digital platform.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
