"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (!section) return; // ✅ Prevents accessing null

      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInWords = (text, customClass = "text-[#667185]") => {
    return text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: i * 0.05, duration: 0.4 }}
        className={`inline-block ${customClass}`}
      >
        {word}&nbsp;
      </motion.span>
    ));
  };

  return (
    <section
      id="about-section"
      className="w-full max-w-[1440px] h-auto pt-5 pb-32 mx-auto"
    >
      <div
        className={`px-4 md:text-left flex flex-col w-full max-w-[800px] gap-10 mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-start"
        >
          <Image
            src="/images/about-icon.webp"
            alt="Icon"
            width={68}
            height={68}
            className="transition-transform duration-700 ease-out"
          />
        </motion.div>

        <p className="text-[32px] font-nohemi font-[500] leading-[116%] tracking-wide">
          {fadeInWords("At Hokage, we specialize in", "text-[#667185]")}
          <span className="font-[600] text-black font-nohemi tracking-wide">
            crafting next-gen web experiences
          </span>{" "}
          {fadeInWords("that blend creativity with cutting-edge technology.", "text-[#667185]")}
        </p>

        <p className="text-[32px] font-nohemi font-[500] leading-[116%] tracking-wide">
          <span className="font-[600] text-black font-nohemi tracking-wide">
            We deliver tailored solutions
          </span>
          {fadeInWords(" for upgrading your site or creating a new digital platform.", "text-[#667185]")}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
