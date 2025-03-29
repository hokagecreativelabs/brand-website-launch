import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer mt-24 w-full h-auto bg-[#1A0632] px-6 md:px-24 py-10">
            <div className="w-full max-w-[1248px] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 rounded-[32px] border border-gray-600 p-8">
                {/* Left Side (Logo) */}
                <div className="w-full md:w-[298px] h-[208px] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-600">
                    <img 
                        src="/images/footer-logo.webp" 
                        alt="Logo" 
                        className="h-auto w-auto max-h-[40px] object-contain" 
                    />
                </div>


                {/* Right Side (Content) */}
                <div className="w-full md:w-[950px] flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
                        {/* Top Left (Nav Links) */}
                        <div className="w-full md:w-[462px] flex items-center justify-around">
                            <a href="#" className="font-nohemi text-white text-base font-medium">Projects</a>
                            <a href="#" className="font-nohemi text-white text-base font-medium">About</a>
                            <a href="#" className="font-nohemi text-white text-base font-medium">Contact</a>
                        </div>

                        {/* Top Right (Email) */}
                        <div className="w-full md:w-[488px] h-[148px] flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-600">
                            <span className="text-white text-lg font-medium font-nohemi">hello@hokage.com</span>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between pt-5 border-t border-gray-600 space-y-6 md:space-y-0">
                        {/* Bottom Left (Link) */}
                        <a href="#" className="text-white text-sm font-medium font-nohemi">Services</a>

                        {/* Bottom Center (Social Icons) */}
                        <div className="flex gap-6 mt-2 md:mt-0">
                            <FaFacebook className="text-white text-xl cursor-pointer" />
                            <FaInstagram className="text-white text-xl cursor-pointer" />
                            <FaTwitter className="text-white text-xl cursor-pointer" />
                            <FaEnvelope className="text-white text-xl cursor-pointer" />
                        </div>

                        {/* Bottom Right (Copyright) */}
                        <span className="text-white text-sm font-medium font-nohemi">© 2025 Hokage</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
