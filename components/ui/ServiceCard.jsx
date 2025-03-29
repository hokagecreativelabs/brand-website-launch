"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ServiceCard = ({ title, description, image, wide }) => {
  return (
    <motion.div
      className={`flex flex-col gap-6 ${
        wide ? "w-full" : "w-full"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="overflow-hidden rounded-[16px] md:rounded-[25px]">
        <Image
          src={image}
          alt={title}
          width={wide ? 612 : 400}
          height={300}
          loading="lazy"
          className="object-cover w-full h-[300px]"
          style={{ aspectRatio: "4 / 3" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-vastago text-[32px] font-medium leading-[140%] tracking-[-1px]">
          {title}
        </h3>
        <p className="font-nohemi text-[18px] font-normal leading-[150%] text-[#667185]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
