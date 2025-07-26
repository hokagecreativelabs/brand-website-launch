"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX, FiLoader } from "react-icons/fi";

// Navigation links
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "https://academy.hokagecreativelabs.com", label: "Academy", target: "_blank" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const openCalendlyPopup = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCalendlyOpen(true);
    }, 1000);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMobileMenuOpen &&
        !(e.target).closest(".mobile-menu-container") &&
        !(e.target).closest(".menu-toggle-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (isMobileMenuOpen && e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const NavLink = ({ href, label, className = "" }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={handleLinkClick}
        className={`font-nohemi text-base font-medium transition-colors duration-200 ${
          isActive ? "text-purple" : "text-[#101928] hover:text-purple/80"
        } ${className}`}
      >
        {label}
      </Link>
    );
  };

  const BookCallButton = ({ isMobile = false }) => (
    <button
      onClick={openCalendlyPopup}
      disabled={isLoading}
      className={`font-nohemi font-medium flex items-center gap-2 transition duration-300 ${
        isMobile
          ? "justify-start text-[#101928] w-full"
          : "justify-center bg-purple text-white w-full h-full px-4 rounded-full hover:bg-white hover:text-purple hover:shadow-md"
      } ${isLoading ? "opacity-75" : ""}`}
    >
      {isLoading ? (
        <>
          <FiLoader className="animate-spin" />
          <span className="font-vastago">Loading...</span>
        </>
      ) : (
        <>
          <span className="font-vastago">Book a Call</span>
          {!isMobile && (
            <div className="relative w-6 h-6 flex-shrink-0">
              <Image
                src="/images/call-icon.webp"
                alt="Call Icon"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
          )}
        </>
      )}
    </button>
  );

  return (
    <>
      <nav
        className={`w-full h-[84px] px-4 sm:px-6 md:px-24 fixed top-0 left-0 right-0 z-40 flex items-center justify-center transition-all duration-300 ${
          isScrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-white"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="w-full max-w-[1248px] h-full flex items-center justify-between relative">
          {/* Logo */}
          <a href="/" className="relative w-[120px] sm:w-[150px] h-[50px] sm:h-[60px]" aria-label="Home page">
            <Image
              src="/images/LOGO.webp"
              alt="Company Logo"
              fill
              sizes="(max-width: 640px) 120px, 150px"
              priority
              className="object-contain pl-2 sm:pl-4"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 bg-[#F0F2F5] min-w-0 flex-grow max-w-md mx-4 h-[55px] px-4 lg:px-10 rounded-full">
            <div className="flex items-center justify-between w-full overflow-x-auto no-scrollbar">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block w-[150px] h-[56px] flex-shrink-0">
            <BookCallButton />
          </div>

          {/* Mobile Hamburger + Menu */}
          <div className="relative md:hidden z-50">
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 bg-[#F4F4F4] border border-[#EEEEEE] rounded-[20px] shadow-[0px_2px_10px_rgba(27,27,27,0.1)] z-20 menu-toggle-button transition-colors hover:bg-[#EEEEEE]"
            >
              {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
<div
  id="mobile-menu"
  role="menu"
  aria-hidden={!isMobileMenuOpen}
  className="absolute top-full right-0 mt-2 transition-all duration-200 ease-out mobile-menu-container"
  style={{ transformOrigin: "top right" }}
>
  <div
    className={`bg-white w-[90vw] max-w-[280px] py-6 px-6 rounded-[20px] border border-[#EEEEEE] shadow-[0px_10px_30px_rgba(27,27,27,0.1)] flex flex-col gap-6 text-left z-10 relative transition-opacity duration-200 ${
      isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
    aria-hidden={!isMobileMenuOpen}
  >
    {NAV_LINKS.map((link) => (
      <NavLink
        key={link.href}
        href={link.href} 
        label={link.label}
        className="py-1"
        tabIndex={isMobileMenuOpen ? 0 : -1}
      />
    ))}

    <div className="mt-2" tabIndex={isMobileMenuOpen ? 0 : -1}>
      <BookCallButton isMobile />
    </div>
  </div>
</div>

          </div>
        </div>
      </nav>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-[600px] h-[80vh] p-6 relative">
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-4 right-4 text-xl p-2 h-10 w-10 flex items-center justify-center"
              aria-label="Close calendar"
            >
              &times;
            </button>
            <iframe
              src="https://calendly.com/hokagecreativelabs001/30mins"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              title="Calendly Scheduling"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
