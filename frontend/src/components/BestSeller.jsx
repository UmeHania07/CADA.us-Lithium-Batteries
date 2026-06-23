import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const BestSeller = () => {
  return (
    <section className='my-20 px-4 sm:px-10 max-w-7xl mx-auto'>
      
      {/* --- Top Centered Title Section --- */}
      <div className='text-3xl text-center pt-10 border-t border-gray-100 mb-16'>
        <Title text1={"OUR"} text2={"FOOTPRINT"} />
        
        {/* Sub-heading agar aap dena chahen to */}
        <h2 className='prata-regular text-2xl sm:text-4xl text-gray-700 mt-4'>
          Global Strategic Presence
        </h2>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-12'>

        {/* Left Side: Map Image */}
        <div className='w-full md:w-1/2'>
          <img
            src={assets.map} 
            alt="Cada Global Map"
            className='w-full h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105'
          />
        </div>

        {/* Right Side: Brand Text */}
        <div className='w-full md:w-1/2 text-left'>
          <h3 className='prata-regular text-3xl leading-tight text-gray-800 mb-6'>
            CADA: Empowering <br />
            <span className='text-green-700'>Global Energy</span>
          </h3>

          <p className='text-gray-600 text-base md:text-lg leading-relaxed mb-6'>
            From the bustling markets of Pakistan to the advanced industrial hubs of the USA,
            Cada is bridging the gap with high-performance lithium solutions. We aren't just
            selling batteries; we are powering a sustainable bilateral future.
          </p>

          <div className='grid grid-cols-2 gap-6 pt-6 border-t border-gray-200'>
            <div>
              <h4 className='font-bold text-2xl text-gray-800'>USA</h4>
              <p className='text-sm text-gray-500'>Engineering & Design</p>
            </div>
            <div>
              <h4 className='font-bold text-2xl text-gray-800'>Pakistan</h4>
              <p className='text-sm text-gray-500'>Distribution & Support</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BestSeller;