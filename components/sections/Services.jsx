'use client';

import { useState } from 'react';

const services = [
  { id: 1, title: 'UI/UX Design' },
  { id: 2, title: 'Branding' },
  { id: 3, title: 'Web Development' },
  { id: 4, title: 'eCommerce Applications' },
  { id: 5, title: 'Consultations' },
  { id: 6, title: 'Web Development Training' },
  { id: 7, title: 'Custom Dashboards' },
  { id: 8, title: 'SEO Optimization' },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 pb-20">
      <h2 className="text-4xl font-normal leading-[120%] text-[#101010] tracking-tight">
        Our Services
      </h2>
      <div className="mt-8 flex flex-col divide-y">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="flex flex-col cursor-pointer py-6"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-500 font-light font-['Plus Jakarta Sans']">
                  {String(service.id).padStart(2, '0')}
                </span>
                <span className="text-2xl font-['Plus Jakarta Sans'] font-normal tracking-tighter">
                  {service.title}
                </span>
              </div>
              <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600 font-light text-base">
                This is a brief description of {service.title}. Customize this text.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
