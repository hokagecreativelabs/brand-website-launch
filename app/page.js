"use client"
import { useEffect } from "react";
import gsap from "gsap";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import SelectedWorks from "@/components/sections/Projects";
import TestimonialSection from "@/components/sections/Testimonials";
import RenderedServices from "@/components/sections/RenderedServices";
import FAQSection from "@/components/sections/FAQs";
// import TrustedBy from "@/components/sections/Clients"; // Uncomment if needed

export default function Home() {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".hero-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );

    gsap.fromTo(
      ".hero-paragraph",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
    );

    gsap.fromTo(
      ".cta-button",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 1.5 }
    );

    // Scroll-triggered animations for other sections
    gsap.fromTo(
      ".about-section",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, scrollTrigger: ".about-section" }
    );

    gsap.fromTo(
      ".services-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: ".services-section" }
    );

    gsap.fromTo(
      ".projects-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: ".projects-section" }
    );

    gsap.fromTo(
      ".testimonials-section",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: ".testimonials-section" }
    );
  }, []);

  return (
    <>
      <Hero />
      <AboutSection className="about-section" />
      <ServicesSection className="services-section" />
      {/* <TrustedBy /> */}
      <SelectedWorks className="projects-section" />
      <TestimonialSection className="testimonials-section" />
      <RenderedServices />
      <FAQSection />
    </>
  );
}
