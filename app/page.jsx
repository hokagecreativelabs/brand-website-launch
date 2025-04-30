"use client";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import SelectedWorks from "@/components/sections/Projects";
import TestimonialSection from "@/components/sections/Testimonials";
import RenderedServices from "@/components/sections/RenderedServices";
import FAQSection from "@/components/sections/FAQs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SelectedWorks />
      <TestimonialSection />
      <RenderedServices />
      <FAQSection />
    </>
  );
}
