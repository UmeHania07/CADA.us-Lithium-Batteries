import React from "react";
import Title from "../components/Title";

const OurPolicy = () => {
  return (
    <section className='py-20 max-w-7xl mx-auto px-4'>

      {/* Title Section */}
      <div className='text-3xl text-center pt-10 border-t border-gray-100 mb-16'>
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className='text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto leading-relaxed'>
          At CADA, we prioritize reliability and long-term partnership. Our policies are designed
          to ensure you receive world-class support and energy solutions you can trust,
          wherever you are in the world.
        </p>
      </div>

      {/* Modern Active Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>

        {/* Policy 1: Customer Care */}
        <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100/60 p-8 flex flex-col items-center text-center relative overflow-hidden transform hover:-translate-y-3 cursor-pointer transition-all duration-300'>
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-50/30 rounded-bl-full pointer-events-none" />

          {/* Custom SVG Icon (Heart Handshake / Care) */}
          <div className='w-14 h-14 bg-gradient-to-tr  from-green-600/90 to-blue-500/90 rounded-xl flex items-center justify-center text-white shadow-sm mb-6'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
          </div>

          <p className='text-xl font-bold text-gray-800 uppercase tracking-wider'>Dedicated Customer Care</p>
          <div className="w-8 h-0.5 bg-blue-600 my-3 rounded-full" />
          <p className='text-gray-500 text-sm leading-relaxed mt-2'>Personalized guidance for all your energy and product requirements.</p>
        </div>

        {/* Policy 2: Warranty */}
        <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100/60 p-8 flex flex-col items-center text-center relative overflow-hidden transform hover:-translate-y-3 cursor-pointer transition-all duration-300'>
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-50/30 rounded-bl-full pointer-events-none" />

          {/* Custom SVG Icon (Shield Check / Warranty) */}
          <div className='w-14 h-14 bg-gradient-to-tr from-green-600/90 to-blue-500/90 rounded-xl flex items-center justify-center text-white shadow-sm mb-6'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 11 2 2 4-4" /></svg>
          </div>

          <p className='text-xl font-bold text-gray-800 uppercase tracking-wider'>Certified 5-Year Warranty</p>
          <div className="w-8 h-0.5 bg-blue-600 my-3 rounded-full" />
          <p className='text-gray-500 text-sm leading-relaxed mt-2'>Guaranteed long-term efficiency and peace of mind with every battery.</p>
        </div>

        {/* Policy 3: Technical Support */}
        <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100/60 p-8 flex flex-col items-center text-center relative overflow-hidden transform hover:-translate-y-3 cursor-pointer transition-all duration-300'>
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-50/30 rounded-bl-full pointer-events-none" />

          {/* Custom SVG Icon (Headphones / Support) */}
          <div className='w-14 h-14 bg-gradient-to-tr  from-green-600/90 to-blue-500/90 rounded-xl flex items-center justify-center text-white shadow-sm mb-6'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></svg>
          </div>

          <p className='text-xl font-bold text-gray-800 uppercase tracking-wider'>Engineering Support</p>
          <div className="w-8 h-0.5 bg-blue-600 my-3 rounded-full" />
          <p className='text-gray-500 text-sm leading-relaxed mt-2'>Expert technical assistance from our Pakistan and USA based teams.</p>
        </div>

      </div>
    </section>
  );
};

export default OurPolicy;