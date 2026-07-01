import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
    return (
        <footer className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            {/* Grid structure handles pushing columns right appropriately */}
            <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-10 md:gap-14 my-10 mt-40 text-sm items-start'>

                {/* Brand & Social Section - Stays aligned to the left */}
                <div className='flex flex-col gap-5'>
                    <img className='w-32 md:w-36' src={assets.logo} alt='logo' />
                    <p className='w-full md:w-[85%] text-gray-600 leading-relaxed'>
                        Powering the future with reliable lithium energy solutions. Stay connected with CADA Batteries for innovations, product updates, and industry insights.
                    </p>
                    {/* Social Media Icons */}
                    <div className='flex items-center gap-4 mt-2'>
                        <a href="https://www.facebook.com/Cadabatteries/" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300'>
                            <FaFacebookF size={16} />
                        </a>
                        <a href="https://www.instagram.com/cadabatteries" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-100 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300'>
                            <FaInstagram size={16} />
                        </a>
                        <a href="https://www.linkedin.com/company/cadabatteries/" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-100 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-300'>
                            <FaLinkedinIn size={16} />
                        </a>
                    </div>
                </div>

                {/* Navigation Links - Shifted and padded towards right */}
                <div className='md:pl-10'>
                    <p className='font-bold text-gray-800 text-lg mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <Link to='/' className="hover:text-black transition-colors"><li>Home</li></Link>
                        <Link to='/shop' className="hover:text-black transition-colors"><li>Shop</li></Link>
                        <Link to='/about' className="hover:text-black transition-colors"><li>Our Story</li></Link>
                        <Link to='/service' className="hover:text-black transition-colors"><li>Service</li></Link>
                        <Link to='/contact' className="hover:text-black transition-colors"><li>Contact</li></Link>
                    </ul>
                </div>

                {/* Contact Info - Takes up the remaining right side perfectly on single lines */}
                <div>
                    <p className='font-bold text-gray-800 text-lg mb-5'>GET IN TOUCH</p>
                    <ul className='space-y-3 text-gray-600 whitespace-nowrap'>
                        {/* flex, items-center aur gap lagane se icons aur text ek row mein perfectly align ho jayenge */}
                        <li className="flex items-center gap-3 hover:text-black cursor-pointer">
                            <FaLocationDot className="text-gray-700 shrink-0" size={16} />
                            <span>30 N Gould St Ste 100, Sheridan, Wyoming, USA</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-black cursor-pointer">
                            <FaPhoneAlt className="text-gray-700 shrink-0" size={14} />
                            <span>+1-606-235-5448</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-black cursor-pointer">
                            <IoMdMail className="text-gray-700 shrink-0" size={16} />
                            <span className="underline decoration-gray-300">info@cadabattery.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='w-full'>
                <hr className="border-gray-200" />
                <div className="flex flex-col md:flex-row justify-center items-center py-6 text-xs text-gray-500 gap-4">
                    <p>Copyright © {new Date().getFullYear()} Cada Batteries - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;