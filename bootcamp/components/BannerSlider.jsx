"use client";

import { useEffect, useState } from "react";

export default function BannerSlider() {
  const [hasMounted, setHasMounted] = useState(false);

  const announcements = [
    "🚀 Build your first website in 6 weeks! Enroll now for FREE.",
    "🔗 Register now: academy.hokagecreativelabs.com/register",
  ];

  const continuousText = announcements.join("     •     ");

  const handleClick = () => {
    window.open("https://academy.hokagecreativelabs.com/register", "_blank");
  };

  useEffect(() => {
    // Wait until client-side hydration is complete
    setHasMounted(true);
  }, []);

  return (
    <div
      className="bg-purple h-[7vh] text-white font-medium fixed top-0 left-0 w-full z-50 overflow-hidden cursor-pointer hover:bg-purple-700 transition-colors"
      onClick={handleClick}
      title="Click to register - academy.hokagecreativelabs.com/register"
    >
      <div className="w-full h-full flex items-center relative">
        <div className="w-full overflow-hidden relative">
          {hasMounted && (
            <div className="marquee-content">
              <span className="marquee-item">{continuousText}</span>
              <span className="marquee-item">{continuousText}</span>
              <span className="marquee-item">{continuousText}</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: scroll 40s linear infinite;
        }

        .marquee-item {
          display: inline-block;
          padding-right: 8rem;
          flex-shrink: 0;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 768px) {
          .marquee-item {
            padding-right: 6rem;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .marquee-item {
            padding-right: 4rem;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
