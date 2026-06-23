import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "16062355448";
    const defaultMessage = encodeURIComponent("Hi CADA Batteries! I am interested in your lithium battery products. Please provide more details.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            // 🌟 Custom shake/bounce handle karne ke liye animate-bounce add kiya aur spacing perfect ki
            className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:bg-[#20ba59] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group cursor-pointer animate-bounce animate-duration-[3000ms]"
            title="Chat on WhatsApp"
        >
            {/* 🌟 1. Outer Floating Radar Ring Effect (Yeh icon ke peeche circles phenkega) */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none"></span>

            {/* Pyara floating text jo hover karne par bahar aayega */}
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 text-sm font-bold uppercase tracking-wider transition-all duration-500 ease-in-out whitespace-nowrap relative z-10">
                Contact Us
            </span>

            {/* Main WhatsApp Icon (Icon size thoda bada kiya aur high contrast rakha) */}
            <FaWhatsapp size={32} className="relative z-10 drop-shadow-md" />
        </a>
    );
};

export default WhatsAppButton;