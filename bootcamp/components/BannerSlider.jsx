"use client";

import { useState, useEffect } from "react";

export default function BannerSlider() {
  const announcements = [
    "🚀 Build your first website in 6 weeks! Enroll now for FREE.",
    // "📅 Class starts: Friday, August 1st, 2025.",
    "🔗 Register now: academy.hokagecreativelabs.com/register",
  ];

  // Create a continuous string with much better spacing
  const continuousText = announcements.join("     •     ");

  const handleClick = () => {
    window.open("https://academy.hokagecreativelabs.com/register", "_blank");
  };

  return (
    <div 
      className="bg-purple h-[7vh] text-white font-medium fixed top-0 left-0 w-full z-50 overflow-hidden cursor-pointer hover:bg-purple-700 transition-colors"
      onClick={handleClick}
      title="Click to register - academy.hokagecreativelabs.com/register"
    >
      <div className="relative w-full h-full flex items-center">
        {/* CTA Button - Fixed position */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
          {/* <div className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition-colors">
            👆 Click to Register
          </div> */}
        </div>
        
        {/* Scrolling Text */}
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {/* Multiple copies for seamless loop with proper spacing */}
            <span className="marquee-item">{continuousText}</span>
            <span className="marquee-item">{continuousText}</span>
            <span className="marquee-item">{continuousText}</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .marquee-wrapper {
          width: calc(100% - 140px); /* Leave space for CTA button */
          overflow: hidden;
          position: relative;
          padding: 0 20px;
        }
        
        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: scroll 40s linear infinite;
        }
        
        .marquee-item {
          display: inline-block;
          padding-right: 8rem; /* Much more spacing between repetitions */
          flex-shrink: 0;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .marquee-wrapper {
            width: calc(100% - 120px);
          }
          
          .marquee-wrapper + div div {
            font-size: 12px;
            padding: 4px 8px;
          }
        }
        
        @media (max-width: 480px) {
          .marquee-wrapper {
            width: calc(100% - 100px);
            padding: 0 10px;
          }
          
          .marquee-item {
            padding-right: 6rem;
          }
        }
      `}</style>
    </div>
  );
}