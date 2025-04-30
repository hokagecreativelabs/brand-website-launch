import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer mt-24 w-full h-auto bg-[#1A0632] px-2 md:px-8 lg:px-24 py-10 pt-24">
            <div className="w-full max-w-[1248px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 rounded-[32px] border border-gray-600 p-8">
                {/* Content Side Only (No Logo) */}
                <div className="w-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
                        {/* Nav Links */}
                        <div className="w-full md:w-1/2 flex items-center justify-around">
                            <a href="/projects" className="font-nohemi text-white text-base font-medium">Projects</a>
                            <a href="/services" className="font-nohemi text-white text-base font-medium">Services</a>
                            <a href="/contact" className="font-nohemi text-white text-base font-medium">Contact</a>
                        </div>

                        {/* Email */}
                        <div className="w-full md:w-1/2 h-[148px] flex items-center justify-center border-t md:border-t-0 lg:border-l border-gray-600">
                            <a 
                                href="mailto:hokagecreativelabs001@gmail.com" 
                                className="text-white text-lg font-medium font-nohemi hover:underline text-center md:text-right"
                            >
                                hokagecreativelabs001@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col items-center justify-center pt-5 border-t border-gray-600 space-y-6">
                       
                        {/* <div className="flex gap-6">
                            <a href="mailto:hokagecreativelabs001@gmail.com" aria-label="Email" className="hover:opacity-80 transition-opacity">
                                <FaEnvelope className="text-white text-xl" />
                            </a>
                        </div> */}

                        {/* Centered Copyright */}
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
