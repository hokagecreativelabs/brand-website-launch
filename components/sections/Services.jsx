'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { 
    id: 1, 
    title: 'Branding', 
    description: 'Transform your brand with powerful, visually stunning designs that make a lasting impact.', 
    image: '/images/branding.jpg' 
  },
  { 
    id: 2, 
    title: 'UI/UX Design', 
    description: 'Create user-centric, engaging interfaces that boost customer retention and turn visitors into loyal users.', 
    image: '/images/uiux.jpg' 
  },
  { 
    id: 3, 
    title: 'Web Development', 
    description: 'Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and success.', 
    image: '/images/webdev.jpg' 
  },
  { 
    id: 4, 
    title: 'eCommerce Applications', 
    description: 'Build dynamic, conversion-driven online stores with seamless user experiences. Empower your business with custom e-commerce solutions.', 
    image: '/images/ecommerce.jpg' 
  },
  { 
    id: 5, 
    title: 'Custom Dashboards', 
    description: 'Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions.', 
    image: '/images/dashboards.jpg' 
  },
  { 
    id: 6, 
    title: 'SEO Optimization', 
    description: 'Maximize your online visibility and climb search engine rankings. We transform traffic into measurable growth.', 
    image: '/images/seo.jpg' 
  },
  { 
    id: 7, 
    title: 'Consultations', 
    description: 'Receive expert digital strategy guidance to refine your vision and achieve your business goals. Tailored solutions for impactful results.', 
    image: '/images/consult.jpg' 
  },
  { 
    id: 8, 
    title: 'Web Development Training', 
    description: 'Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects.', 
    image: '/images/training.jpg' 
  },
  { 
    id: 9, 
    title: 'DevOps & SRE', 
    description: 'Ensure the reliability, scalability, and performance of your applications and services with best practices for DevOps and Site Reliability Engineering (SRE).', 
    image: '/images/devops.jpg' 
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-screen-xl mx-auto px-6 pb-20"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold leading-[120%] text-[#101010] tracking-tight"
      >
        Our Services
      </motion.h2>

      {/* Services List */}
      <div className="mt-8 flex flex-col divide-y">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col cursor-pointer py-6 group"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center space-x-4">
                <span className="text-[16px] font-normal">
                  {String(service.id).padStart(2, '0')}
                </span>
                <span className="text-[32px] font-normal tracking-tighter transition-all duration-300 group-hover:text-purple">
                  {service.title}
                </span>
              </div>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl group-hover:text-blue-600 transition-all duration-300"
              >
                {activeIndex === index ? '-' : '+'}
              </motion.span>
            </div>

            {/* Animated Accordion Content */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 flex gap-4"
                >
                  {/* <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={120} 
                    height={80} 
                    className="rounded-lg shadow-lg"
                  /> */}
                  <p className="font-light text-xl leading-relaxed tracking-wider">
                    {service.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
  