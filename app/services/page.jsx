'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

// Only register plugin on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    slug: 'branding',
    title: 'Branding',
    description: 'Transform your brand with powerful, visually stunning designs that make a lasting impact. We offer from basic (logo only) to premium (Full branding + Brand guide doc) services.',
    image: '/images/branding.jpg',
  },
  {
    id: 2,
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Create user-centric, engaging interfaces that boost customer retention and elevate user experiences. Intuitive design that turns visitors into loyal users.',
    image: '/images/uiux.jpg',
  },
  {
    id: 3,
    slug: 'web-development',
    title: 'Web Development',
    description: 'Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and success.',
    image: '/images/webdev.jpg',
  },
  {
    id: 4,
    slug: 'e-commerce-applications',
    title: 'eCommerce Applications',
    description: 'Build dynamic, conversion-driven online stores with seamless user experiences. Empower your business with custom e-commerce solutions.',
    image: '/images/ecommerce.jpg',
  },
  {
    id: 5,
    slug: 'consultations',
    title: 'Consultations',
    description: 'Receive expert digital strategy guidance to refine your vision and achieve your goals. Tailored solutions for impactful results.',
    image: '/images/consult.jpg',
  },
  {
    id: 6,
    slug: 'custom-dashboards',
    title: 'Custom Dashboards',
    description: 'Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions.',
    image: '/images/dashboards.jpg',
  },
  {
    id: 7,
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Maximize your online visibility and climb search engine rankings. We transform traffic into measurable growth.',
    image: '/images/seo.jpg',
  },
  {
    id: 8,
    slug: 'web-development-training',
    title: 'Web Development Training',
    description: 'Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects.',
    image: '/images/training.jpg',
  },
  {
    id: 9,
    slug: 'devops-and-sre',
    title: 'DevOps & SRE',
    description: 'Achieve continuous integration and deployment pipelines with robust infrastructure management. Ensure the reliability, scalability, and performance of your applications and services with best practices for DevOps and Site Reliability Engineering (SRE).',
    image: '/images/devops.jpg',
  },
];

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Create refs for GSAP animations
  const sectionTitleRef = useRef(null);

  const openCalendlyPopup = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCalendlyOpen(true);
    }, 1000);
  };

  // Initialize GSAP animations after component mounts
  useEffect(() => {
    // Make sure we have the DOM elements before initializing GSAP
    if (sectionTitleRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionTitleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionTitleRef.current,
              start: 'top 80%',
            },
          }
        );
      });
      
      // Cleanup function
      return () => ctx.revert();
    }
  }, [isLoaded]);

  useEffect(() => {
    setIsLoaded(true);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    });

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Our Services | Hokage Creative Labs</title>
        <meta
          name="description"
          content="Explore a wide range of digital services including Branding, UI/UX Design, Web Development, SEO, and more tailored to your business goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="pt-16 md:pt-20 w-full overflow-hidden">
        {/* Banner */}
        <section className="relative h-[150px] sm:h-[175px] md:h-[225px] lg:h-[275px] w-full">
          <Image
            src="/images/bg-pattern.webp"
            alt="Services Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 
              ref={sectionTitleRef}
              className="section-title text-black text-5xl sm:text-4xl md:text-6xl lg:text-6xl font-bold font-vastago tracking-tight"
            >
              Our Services
            </h1>
          </div>
        </section>

        {/* Services */}
        <motion.section
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 mt-8 sm:mt-12 md:mt-16"
        >
          <div className="-mt-12 sm:-mt-16 md:-mt-24 flex flex-col divide-y">
            {services.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id} passHref>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col cursor-pointer py-4 sm:py-6 group"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group-hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0">
                      <span className="text-[14px] sm:text-[16px] text-gray-500">
                        {String(service.id).padStart(2, '0')}
                      </span>
                      <span className="text-[22px] sm:text-[26px] md:text-[32px] group-hover:text-purple transition-colors duration-300">
                        {service.title}
                      </span>
                    </div>
                    <motion.span className="text-lg sm:text-xl md:text-2xl underline group-hover:text-blue-600 transition-colors duration-300 mt-1 sm:mt-0">
                      see details
                    </motion.span>
                  </div>
                  <div className="mt-2 pr-4 block sm:hidden">
                    <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
           className="w-full max-w-[1088px] -mt-[32px] bg-white border rounded-[32px] p-[16px] flex flex-col md:flex-row justify-between items-center gap-6 mx-auto"
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
         >
           <p className="text-[18px] md:text-[24px] text-center font-medium text-gray-900 text-left md:text-left w-full">
             Need a custom solution for your brand?
           </p>
           <button
             role="button"
             onClick={openCalendlyPopup}
             className="w-full md:w-[200px] h-[56px] px-4 py-4 font-medium tracking-relaxed font-nohemi flex items-center justify-center gap-2 bg-purple text-white rounded-full transition duration-300 ease-out hover:bg-white hover:text-purple flex-col md:flex-row"
           >
             {isLoading ? (
               <FiLoader className="animate-spin" />
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

        {/* Calendly Modal */}
        {isCalendlyOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-[600px] h-[80vh] p-6 relative rounded-lg shadow-xl">
              <button
                onClick={() => setIsCalendlyOpen(false)}
                className="absolute top-4 right-4 text-xl"
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
      </main>
    </>
  );
}