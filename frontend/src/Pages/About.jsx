import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { Check, Settings, Star } from "lucide-react"; // Ensure lucide-react is installed

const About = () => {
  return (
    // Responsive padding
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Header Section */}
      <div className='text-3xl text-center pt-10 border-t border-gray-100'>
        <Title text1={"OUR"} text2={"STORY"} />

        <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          Driven by expert engineering and a vision for sustainable power,
          CADA brings premium lithium-ion technology from the USA to Pakistan.
          Our experts are dedicated to revolutionizing energy storage with
          world-class efficiency.
        </p>
      </div>

      {/* Story Section */}
      <div className='my-16 flex flex-col md:flex-row items-center gap-16'>
        <div className="w-full md:max-w-[450px] flex justify-center">
          <img
            className='w-full rounded-2xl shadow-lg'
            src={assets.statesection}
            alt='about image'
          />
        </div>

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-relaxed'>
          <p>
            CADA Lithium Batteries was born from a vision to bridge the gap between
            international engineering excellence and local energy needs. We specialize
            in high-performance lithium-ion solutions that empower homes and
            businesses across Pakistan and the USA.
          </p>
          <p>
            With a focus on durability and efficiency, our products are designed to
            withstand demanding environments while providing clean, sustainable energy.
            From solar storage to portable power, CADA is committed to leading the
            charge in the global energy revolution.
          </p>
          <b className='text-gray-800 text-xl'>Our Mission</b>
          <p>
            Our mission is to foster a stronger bilateral partnership by delivering
            cutting-edge battery technology that is reliable, eco-friendly, and
            accessible to everyone, ensuring a brighter and more powered future.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section Styled Like Brand Personality */}
      <div className='text-3xl py-8 text-center mt-20'>
        <Title text1={"OUR"} text2={"BRAND PERSONALITY"} />
        <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
          We build trust through consistency, innovation, and reliability in every energy solution we deliver.
        </p>
      </div>

      {/* Modern Cards Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 mt-10'>

        {/* Card 1 - Reliable */}
        <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100/60 p-8 flex flex-col items-center text-center relative overflow-hidden transform hover:-translate-y-3 cursor-pointer transition-all duration-300'>
          {/* Top Corner Shape Hint */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-50/30 rounded-bl-full pointer-events-none" />

          {/* Icon Circle Box */}
          <div className='w-14 h-14 bg-gradient-to-tr  from-green-600/90 to-blue-500/90 rounded-xl flex items-center justify-center text-white shadow-sm mb-6'>
            <Check className="w-6 h-6" />
          </div>

          <h3 className='text-xl font-bold text-gray-800 uppercase tracking-wider'>Reliable</h3>
          <div className="w-8 h-0.5 bg-blue-600 my-3 rounded-full" /> {/* Accent Line */}

          <p className='text-gray-500 text-sm leading-relaxed mt-2'>
            Our systems deliver stable and dependable performance across residential, commercial,
            and industrial energy applications with long-term durability.
          </p>
        </div>

        {/* Card 2 - Capable */}
        <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100/60 p-8 flex flex-col items-center text-center relative overflow-hidden transform hover:-translate-y-3 cursor-pointer transition-all duration-300'>
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-50/30 rounded-bl-full pointer-events-none" />

          <div className='w-14 h-14 bg-gradient-to-tr  from-green-600/90 to-blue-500/90 rounded-xl flex items-center justify-center text-white shadow-sm mb-6'>
            <Settings className="w-6 h-6" />
          </div>

          <h3 className='text-xl font-bold text-gray-800 uppercase tracking-wider'>Capable</h3>
          <div className="w-8 h-0.5 bg-blue-600 my-3 rounded-full" />

          <p className='text-gray-500 text-sm leading-relaxed mt-2'>
            Backed by advanced engineering and global expertise, we provide scalable energy
            solutions designed for modern power demands.
          </p>
        </div>

        {/* Card 3 - Reputable */}
        <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100/60 p-8 flex flex-col items-center text-center relative overflow-hidden transform hover:-translate-y-3 cursor-pointer transition-all duration-300'>
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-50/30 rounded-bl-full pointer-events-none" />

          <div className='w-14 h-14 bg-gradient-to-tr from-green-600/90 to-blue-500/90 rounded-xl flex items-center justify-center text-white shadow-sm mb-6'>
            <Star className="w-6 h-6" />
          </div>

          <h3 className='text-xl font-bold text-gray-800 uppercase tracking-wider'>Reputable</h3>
          <div className="w-8 h-0.5 bg-blue-600 my-3 rounded-full" />

          <p className='text-gray-500 text-sm leading-relaxed mt-2'>
            Trusted worldwide for quality, safety, and innovation — our solutions are built to earn
            long-term customer confidence.
          </p>
        </div>

      </div>    </main>
  );
};

export default About;