import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer mt-24 w-full h-auto bg-[#1A0632] px-2 md:px-24 py-10 pt-24">
            <div className="w-full max-w-[1248px] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 rounded-[32px] border border-gray-600 p-8">
                {/* Left Side (Logo) */}
                <div className="w-full md:w-[298px] h-[208px] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-600">
                    <div className="relative w-[180px] h-[40px]">
                        <Image 
                            src="/images/footer-logo.webp" 
                            alt="Logo" 
                            fill
                            sizes="180px"
                            className="object-contain"
                            priority={false}
                        />
                    </div>
                </div>

                {/* Right Side (Content) */}
                <div className="w-full md:w-[950px] flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
                        {/* Top Left (Nav Links) */}
                        <div className="w-full md:w-[462px] flex items-center justify-around">
                            <Link href="/projects" className="font-nohemi text-white text-base font-medium">Projects</Link>
                            <Link href="/about" className="font-nohemi text-white text-base font-medium">About</Link>
                            <Link href="/contact" className="font-nohemi text-white text-base font-medium">Contact</Link>
                        </div>

                        {/* Top Right (Email) */}
                        <div className="w-full md:w-[488px] h-[148px] flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-600">
                            <a 
                                href="mailto:hello@hokage.com" 
                                className="text-white text-lg font-medium font-nohemi hover:underline"
                            >
                                hokagecreativelabs001@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between pt-5 border-t border-gray-600 space-y-6 md:space-y-0">
                        {/* Bottom Left (Link) */}
                        <Link href="/services" className="text-white text-sm font-medium font-nohemi">Services</Link>

                        {/* Bottom Center (Social Icons) */}
                        <div className="flex gap-6 mt-2 md:mt-0">
                            {/* <a href="https://facebook.com" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                                <FaFacebook className="text-white text-xl" />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                                <FaInstagram className="text-white text-xl" />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
                                <FaTwitter className="text-white text-xl" />
                            </a> */}
                            <a href="mailto:hello@hokage.com" aria-label="Email" className="hover:opacity-80 transition-opacity">
                                <FaEnvelope className="text-white text-xl" />
                            </a>
                        </div>

                        {/* Bottom Right (Copyright) */}
                        <span className="text-white text-sm font-medium font-nohemi">© {new Date().getFullYear()} Hokage</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;