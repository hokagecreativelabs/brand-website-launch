"use client";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import TestimonialSection from "@/components/sections/Testimonials";
import RenderedServices from "@/components/sections/RenderedServices";
import FAQSection from "@/components/sections/FAQs";
import Loader from "@/components/ui/Loader";
import BrandingProjectsSection from "@/components/sections/Projects";
import BannerSlider from "@/components/BannerSlider";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BrandingProjectsSection />
      <TestimonialSection />
      <RenderedServices />
      <FAQSection />
    </>
  );
}
