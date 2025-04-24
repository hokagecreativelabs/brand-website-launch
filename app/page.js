import AboutSection from "@/components/sections/About";
import TrustedBy from "@/components/sections/Clients"; // ✅ Import fixed
import FAQSection from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import SelectedWorks from "@/components/sections/Projects";
import RenderedServices from "@/components/sections/RenderedServices";
import ServicesSection from "@/components/sections/Services";
import TestimonialSection from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      {/* <TrustedBy /> */}
      <SelectedWorks />
      <TestimonialSection />
      <RenderedServices />
      <FAQSection />
    </>
  );
}
