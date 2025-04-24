"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const openCalendly = useCallback(() => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/hokagecreativelabs001/30mins",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-[104px] px-6 md:px-24 fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1248px] h-full flex items-center justify-between relative">
        {/* Logo */}
        <div className="relative w-[150px] h-[60px]">
          <Image
            src="/images/LOGO.webp"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 120px, (max-width: 1200px) 150px, 180px"
            priority
            className="object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-[#F0F2F5] w-[318px] h-[55px] px-10 rounded-full">
          <Link href="/about" className="font-nohemi text-[#101928] text-base font-medium">About</Link>
          <Link href="/services" className="font-nohemi text-[#101928] text-base font-medium">Services</Link>
          <Link href="/projects" className="font-nohemi text-[#101928] text-base font-medium">Projects</Link>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={openCalendly}
          className="hidden md:flex font-nohemi font-medium items-center justify-center gap-2 bg-purple text-white w-[150px] h-[56px] px-4 rounded-full transition duration-300 hover:bg-white hover:text-purple"
        >
          <span className="font-vastago">Book a Call</span>
          <Image src="/images/call-icon.webp" alt="Call Icon" width={24} height={24} loading="lazy" />
        </button>

        {/* Mobile Hamburger */}
        <div className="relative flex md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 bg-[#F4F4F4] border border-[#EEEEEE] rounded-[20px] shadow-[0px_24px_80px_rgba(27,27,27,0.1)] z-20"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Floating Modal Menu */}
          <div
            className={`absolute top-[60px] right-0 transition-all duration-200 ease-out ${
                isMobileMenuOpen
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }`}
          >
            {/* Triangle/Nub */}
            <div className="relative">
                <div className="absolute right-4 -top-2 w-3 h-3 rotate-45 bg-white border-t border-l border-[#EEEEEE] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] z-0" />

                {/* Floating Menu Card */}
                <div className="bg-white w-[250px] py-6 px-6 rounded-[20px] border border-[#EEEEEE] shadow-[0px_24px_80px_rgba(27,27,27,0.1)] flex flex-col gap-6 text-left z-10 relative">
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-nohemi text-[#101928]">About</Link>
                  <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-nohemi text-[#101928]">Services</Link>
                  <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-nohemi text-[#101928]">Projects</Link>
                  <button onClick={() => { openCalendly(); setIsMobileMenuOpen(false); }} className="text-base font-nohemi text-[#101928] text-left">Book a Call</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;