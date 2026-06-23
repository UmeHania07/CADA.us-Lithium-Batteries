import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { GiLifeSupport } from "react-icons/gi";

const OurPolicy = () => {
  return (
    <section className='py-20'>

      {/* 1. Title Section: pt-10 border ke liye, mb-20 icons se gap ke liye */}
      <div className='text-3xl text-center pt-10 border-t border-gray-100 mb-20'>
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className='text-gray-500 text-base md:text-lg mt-3 max-w-2xl mx-auto leading-relaxed'>
          At CADA, we prioritize reliability and long-term partnership. Our policies are designed
          to ensure you receive world-class support and energy solutions you can trust,
          wherever you are in the world.
        </p>
      </div>

      {/* 2. Icons Container: Isme flex-row hai taake icons line mein ayein */}
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center text-xs sm:text-sm md:text-base text-gray-700 max-w-7xl mx-auto px-4'>

        {/* Policy 1: Customer Care */}
        <div className='flex flex-col items-center flex-1'>
          <div className="h-12 w-12 flex items-center justify-center mb-6">
            <GiLifeSupport className='text-5xl text-gray-800' />
          </div>
          <p className='font-semibold text-gray-800 uppercase tracking-wide'>Dedicated Customer Care</p>
          <p className='text-gray-400 text-sm mt-2'>Personalized guidance for all your energy and product requirements.</p>
        </div>

        {/* Policy 2: Warranty */}
        <div className='flex flex-col items-center flex-1'>
          <div className="h-12 w-12 flex items-center justify-center mb-6">
            <img className='w-12' src={assets.quality_icon} alt='warranty' />
          </div>
          <p className='font-semibold text-gray-800 uppercase tracking-wide'>Certified 5-Year Warranty</p>
          <p className='text-gray-400 text-sm mt-2'>Guaranteed long-term efficiency and peace of mind with every battery.</p>
        </div>

        {/* Policy 3: Technical Support */}
        <div className='flex flex-col items-center flex-1'>
          <div className="h-12 w-12 flex items-center justify-center mb-6">
            <img className='w-12' src={assets.support_img} alt='support' />
          </div>
          <p className='font-semibold text-gray-800 uppercase tracking-wide'>Engineering Support</p>
          <p className='text-gray-400 text-sm mt-2'>Expert technical assistance from our Pakistan and USA based teams.</p>
        </div>

      </div>
    </section>
  );
};

export default OurPolicy;