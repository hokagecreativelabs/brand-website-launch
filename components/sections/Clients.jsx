"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Sample client logos with their respective dimensions
const clientLogos = [
  { src: "/images/clients/1.webp", width: 120, height: 50 },
  { src: "/images/clients/1.webp", width: 150, height: 40 },
  { src: "/images/clients/1.webp", width: 80, height: 60 },
  { src: "/images/clients/1.webp", width: 100, height: 45 },
  { src: "/images/clients/1.webp", width: 130, height: 40 },
  { src: "/images/clients/1.webp", width: 90, height: 55 },
];

const TrustedBy = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-8 px-6 md:px-[104px] py-12">
      {/* Heading */}
      <h3 className="font-vastago text-gray-700 text-[18px] md:text-[22px] font-normal leading-[150%] tracking-tight text-center">
        Trusted By These Clients
      </h3>

      {/* Swiper for Infinite Scrolling */}
      <div className="w-full overflow-hidden">
        <Swiper
          slidesPerView="auto"
          spaceBetween={48}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000} // Smooth scrolling
          modules={[Autoplay]}
          className="w-full"
        >
          {/* Logos - Doubled for seamless infinite scroll */}
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <SwiperSlide 
              key={index} 
              className="!w-auto flex items-center justify-center"
              style={{ height: '80px' }} // Fixed height container for all logos
            >
              <div className="h-full flex items-center justify-center px-4">
                <Image
                  src={logo.src}
                  alt={`Client Logo ${index % clientLogos.length + 1}`}
                  width={logo.width}
                  height={logo.height}
                  className="grayscale hover:grayscale-0 transition-all duration-300 max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedBy;