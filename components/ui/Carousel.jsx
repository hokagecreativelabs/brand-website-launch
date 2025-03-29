"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Carousel = ({ images }) => {
  const slidesPerView = Math.min(images.length, 3);
  const enableLoop = images.length > 3;

  return (
    <div className="hidden lg:flex relative w-full max-w-[1832px] h-[338px] mt-[60px] justify-center items-center overflow-hidden">
      <Swiper
        spaceBetween={24}
        loop={enableLoop}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        slidesPerView={slidesPerView}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-[600px] h-[338px] rounded-[24px] border border-gray-300 overflow-hidden">
              <img
                srcSet={`/optimized/${image}-300.webp 300w,
                        /optimized/${image}-600.webp 600w,
                        /optimized/${image}-900.webp 900w,
                        /optimized/${image}-1200.webp 1200w`}
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
                src={`/optimized/${image}-600.webp`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
