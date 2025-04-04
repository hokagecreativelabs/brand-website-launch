"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientLogos = [
  "/images/clients/1.webp",
  "/images/clients/1.webp",
  "/images/clients/1.webp",
  "/images/clients/1.webp",
  "/images/clients/1.webp",
  "/images/clients/1.webp",
];

const TrustedBy = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-8 px-6 md:px-[104px] py-12">
      {/* Heading */}
      <h3 className="font-vastago text-gray-700 text-[18px] md:text-[22px] font-normal leading-[150%] tracking-tight text-center">
        Trusted By These Clients
      </h3>

      {/* Swiper for Infinite Scrolling */}
      <Swiper
        slidesPerView={1} // 1 logo per view on mobile
        breakpoints={{
          640: { slidesPerView: 2 }, // Show 2 logos on small tablets
          768: { slidesPerView: 3 }, // Show 3 logos on larger tablets
          1024: { slidesPerView: 5 }, // Show 5 logos on desktop
        }}
        spaceBetween={48}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4000} // Smooth scrolling
        modules={[Autoplay]}
        className="w-full"
      >
        {/* Logos - Doubled for seamless infinite scroll */}
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center w-auto">
            <Image
              src={logo}
              alt={`Client Logo ${index + 1}`}
              width={120}
              height={50}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrustedBy;
