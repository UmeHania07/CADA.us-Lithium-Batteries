import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    /* w-full aur left-0 se ye poori screen cover karega */
    <section className='relative w-full h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden border-b border-gray-200 z-0'>

      {/* Background Image - Object-cover ensures it fills the space */}
      <div
        className='absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105'
        style={{
          backgroundImage: `url(${assets.statesection})`,
          filter: 'brightness(0.6)'
        }}
      ></div>

      {/* Content Overlay - Isme 'animate-fadeInUp' class add kar di hai */}
      <div className='relative z-10 text-center px-4 sm:px-8 animate-fadeInUp'>
        <div className='flex flex-col items-center gap-3'>

          {/* Top Subtitle with Lines */}
          <div className='flex items-center gap-2 mb-1'>
            <p className='w-6 md:w-9 h-[1px] bg-white opacity-80'></p>
            <p className='font-semibold text-[20px] md:text-xs tracking-[0.4em] uppercase text-white opacity-90'>
              Cada Lithium Batteries
            </p>
            <p className='w-6 md:w-9 h-[1px] bg-white opacity-80'></p>
          </div>

          {/* 🌟 Optimized Main Heading: Elegant 6xl instead of oversized 7xl */}
          <h1 className='prata-regular text-4xl sm:text-6xl lg:text-6xl leading-[1.15] text-white drop-shadow-md tracking-wide'>
            Pakistan-USA <br /> Powerhouse
          </h1>

          {/* Subtitle Description */}
          <p className='text-gray-200 font-normal text-xs sm:text-sm md:text-base max-w-lg leading-relaxed mt-1 opacity-90'>
            Premium energy solutions built on a trusted bilateral partnership. <br className='hidden sm:block' />
            Reliable power at your doorstep.
          </p>

          {/* Premium Action Button */}
          <div className='mt-6'>
            <Link to='/shop'>
              <button className='px-8 py-3 border border-white text-white rounded-full text-xs font-bold bg-transparent hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest shadow-sm'>
                Upgrade Your Power
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;