"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Carousel = ({ images }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slidesPerView = Math.min(images.length, 3);
  const enableLoop = images.length > 3;

  if (!mounted) return null;

  return (
    <div className="w-full max-w-full mt-0 h-[450px]">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        loop={enableLoop}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: slidesPerView,
            spaceBetween: 20,
          },
        }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative overflow-hidden rounded-[24px] h-full">
          <div className="relative w-full h-full">
            <Image
              src={`/images/${image}.webp`}
              alt={`Project Image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
