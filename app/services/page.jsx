'use client';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  { 
    id: 1, 
    slug: 'branding',
    title: 'Branding', 
    description: 'Transform your brand with powerful, visually stunning designs that make a lasting impact. We offer from basic (logo only) to premium (Full branding + Brand guide doc) services.', 
    image: '/images/branding.jpg' 
  },
  { 
    id: 2, 
    slug: 'ui-ux-design',
    title: 'UI/UX Design', 
    description: 'Create user-centric, engaging interfaces that boost customer retention and elevate user experiences. Intuitive design that turns visitors into loyal users.', 
    image: '/images/uiux.jpg' 
  },
  { 
    id: 3, 
    slug: 'web-development',
    title: 'Web Development', 
    description: 'Develop high-performance websites with robust, scalable architectures. Optimize your online presence for speed, functionality, and success.', 
    image: '/images/webdev.jpg' 
  },
  { 
    id: 4, 
    slug: 'e-commerce-applications',
    title: 'eCommerce Applications', 
    description: 'Build dynamic, conversion-driven online stores with seamless user experiences. Empower your business with custom e-commerce solutions.', 
    image: '/images/ecommerce.jpg' 
  },
  { 
    id: 5, 
    slug: 'consultations',
    title: 'Consultations', 
    description: 'Receive expert digital strategy guidance to refine your vision and achieve your goals. Tailored solutions for impactful results.', 
    image: '/images/consult.jpg' 
  },
  { 
    id: 6, 
    slug: 'custom-dashboards',
    title: 'Custom Dashboards', 
    description: 'Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions.', 
    image: '/images/dashboards.jpg' 
  },
  { 
    id: 7, 
    slug: 'seo-optimization',
    title: 'SEO Optimization', 
    description: 'Maximize your online visibility and climb search engine rankings. We transform traffic into measurable growth.', 
    image: '/images/seo.jpg' 
  },
  { 
    id: 8, 
    slug: 'web-development-training',
    title: 'Web Development Training', 
    description: 'Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects.', 
    image: '/images/training.jpg' 
  },
  { 
    id: 9, 
    slug: 'devops-and-sre',
    title: 'DevOps & SRE', 
    description: 'Achieve continuous integration and deployment pipelines with robust infrastructure management. Ensure the reliability, scalability, and performance of your applications and services with best practices for DevOps and Site Reliability Engineering (SRE).', 
    image: '/images/devops.jpg' 
  },
];

export default function ServicesPage() {

  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta
          name="description"
          content="Explore a wide range of digital services including Branding, UI/UX Design, Web Development, SEO, and more tailored to your business goals."
        />
      </Head>

      <main className="pt-16 md:pt-20">
        {/* Banner */}
        <section className="relative h-[200px] md:h-[275px] w-full">
          <Image
            src="/images/bg-pattern.webp"
            alt="Services Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-black text-4xl md:text-6xl font-bold font-vastago">
              Our Services
            </h1>
          </div>
        </section>

        {/* Services List */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-screen-xl mx-auto px-6 pb-20 mt-16"
        >
          <div className="mt-8 flex flex-col divide-y">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col cursor-pointer py-6 group"
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
                      className="text-2xl group-hover:text-blue-600 transition-all duration-300"
                    >
                      +
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        {/* Your Book a Call section stays same */}
      </main>
    </>
  );
}
