'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function RenderedServices() {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const openCalendlyPopup = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCalendlyOpen(true);
    }, 1000);
  };

  useEffect(() => {
    gsap.fromTo(
      '.section-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="w-full max-w-[1440px] px-6 md:px-16 py-20 mx-auto">
      <div className="max-w-[1088px] mx-auto flex flex-col gap-20">
        
        {/* Title & Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="font-vastago section-title text-[32px] md:text-[78px] font-medium leading-[104%] tracking-[-4%] text-black text-left">
            What We Can <br className="hidden md:block" /> 
            <span className="text-[#667185]">Do for You</span>
          </h2>
          <p className="text-[14px] md:text-[16px] leading-[132%] tracking-[-2%] text-[#1B1B1B] max-w-[280px] text-left">
            Discover various services designed to fit your needs, providing clear details on each one of them.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Starter Card */}
          <motion.div
            className="h-auto md:h-[330px] w-full md:w-[532px] bg-[#F0F2F5] border rounded-[32px] p-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-7 rounded-2xl border border-[#D0D5DD] w-full bg-white text-left">
              <h3 className="font-medium tracking-tight text-[20px] md:text-[24px]">
                Starter 
                {/* Fixed contrast for Small Projects tag */}
                <span className="bg-green-100 px-[12px] py-[6px] ml-2 rounded-full text-[#07753F] text-[12px] md:text-[14px] font-semibold tracking-wide">
                  Small Projects
                </span>
              </h3>
              <h4 className="font-medium text-[24px] md:text-[32px] max-w-[344px] mt-[24px] md:mt-[32px]">
                <span className="text-[#475367]">Ideal for </span> Small Businesses & Startups
              </h4>
            </div>
            <ul className="p-7 flex flex-col md:grid md:grid-cols-2 gap-x-4 gap-y-3 text-left">
              {["Branding", "UI/UX Design", "Basic Development", "eCommerce Shop"].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#98A2B3] rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professional Card */}
          <motion.div
            className="h-auto md:h-[380px] w-full md:w-[532px] bg-black text-white border rounded-[32px] p-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-7 rounded-2xl border border-[#323232] w-full bg-[#101928] text-left">
              <h4 className="font-medium tracking-tight text-[20px] md:text-[24px]">
                Professional 
                {/* Fixed contrast for Big Projects tag */}
                <span className="bg-gray-800 px-[12px] ml-2 py-[6px] rounded-full text-[#4AE58C] text-[12px] md:text-[14px] font-semibold tracking-wider">
                  Big Projects
                </span>
              </h4>
              <h3 className="font-medium text-[24px] md:text-[32px] max-w-[394px] mt-[24px] md:mt-[32px]">
                <span className="text-[#98A2B3]">Great for </span> Scaling Businesses & Ventures
              </h3>
            </div>
            <ul className="p-7 flex flex-col md:grid md:grid-cols-2 gap-x-4 gap-y-3 text-left">
              {["Branding", "UI/UX Design", "App/Dashboard Revamp", "Advanced Development", "eCommerce Shop", "SEO Optimization"].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#98A2B3] rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="w-full max-w-[1088px] -mt-[32px] bg-white border rounded-[32px] p-[16px] flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[18px] md:text-[24px] font-medium text-gray-900 text-left md:text-left w-full">
            Need a custom solution for your brand?
          </p>
          <button
            role="button"
            onClick={openCalendlyPopup}
            className="w-full md:w-[200px] h-[56px] px-4 py-4 font-medium tracking-relaxed font-nohemi flex items-center justify-center gap-2 bg-purple text-white rounded-full transition duration-300 ease-out hover:bg-white hover:text-purple flex-col md:flex-row"
          >
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              <>
                <span className="font-vastago text-center md:text-left w-full md:w-auto">
                  Book a Call
                </span>
                <Image
                  src="/images/call-icon.webp"
                  alt="Call Icon"
                  width={24}
                  height={24}
                  className="flex-shrink-0 hidden md:block"
                />
              </>
            )}
          </button>
        </motion.div>

      </div>

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
    </section>
  );
}