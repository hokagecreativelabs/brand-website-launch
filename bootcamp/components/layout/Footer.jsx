import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-24 w-full h-auto bg-[#1A0632] px-2 md:px-8 lg:px-24 py-10 pt-24">
      <div className="w-full max-w-[1248px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 rounded-[32px] border border-gray-600 p-8">
        {/* Content Side Only (No Logo) */}
        <div className="w-full flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
            {/* Nav Links - Flexible */}
            <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <a href="/about" className="font-nohemi text-white text-base font-medium whitespace-nowrap">About</a>
              <a href="/courses" className="font-nohemi text-white text-base font-medium whitespace-nowrap">Courses</a>
              <a href="/register" className="font-nohemi text-white text-base font-medium whitespace-nowrap">Register</a>
              <a href="/cohorts" className="font-nohemi text-white text-base font-medium whitespace-nowrap">Cohorts</a>
              <a href="/contact" className="font-nohemi text-white text-base font-medium whitespace-nowrap">Contact</a>
            </div>

            {/* Email */}
            <div className="w-full md:w-1/2 h-[148px] flex items-center justify-center border-t md:border-t-0 lg:border-l border-gray-600">
              <a 
                href="mailto:hokagecreativelabs001@gmail.com" 
                className="text-white text-lg font-medium font-nohemi hover:underline text-center md:text-right"
              >
                academy@hokagecreativelabs.com
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-center pt-5 border-t border-gray-600 space-y-6">
            <span className="text-white text-sm font-medium font-nohemi text-center">
              © {new Date().getFullYear()} Hokage
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
