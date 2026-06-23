import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    // Responsive padding add ki hai taake content center mein rahay
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

      {/* Why Choose Us Section */}
      <div className='text-3xl py-8 text-center'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 text-sm mb-28 border border-gray-100 rounded-xl overflow-hidden'>

        {/* Box 1 */}
        <div className='group border-b md:border-b-0 md:border-r px-10 md:px-16 py-12 flex flex-col gap-5 hover:bg-black transition-all duration-500 cursor-pointer'>
          <b className="text-gray-800 group-hover:text-white transition-colors duration-500">Quality Assurance:</b>
          <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
            Every CADA battery undergoes rigorous testing to meet international
            safety standards, ensuring long-lasting performance and maximum
            safety for your devices.
          </p>
        </div>

        {/* Box 2 */}
        <div className='group border-b md:border-b-0 md:border-r px-10 md:px-16 py-12 flex flex-col gap-5 hover:bg-black transition-all duration-500 cursor-pointer'>
          <b className="text-gray-800 group-hover:text-white transition-colors duration-500">Innovation:</b>
          <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
            We combine US-standard engineering with modern lithium-ion
            technology to provide energy storage solutions that are more
            efficient and compact than traditional options.
          </p>
        </div>

        {/* Box 3 */}
        <div className='group px-10 md:px-16 py-12 flex flex-col gap-5 hover:bg-black transition-all duration-500 cursor-pointer'>
          <b className="text-gray-800 group-hover:text-white transition-colors duration-500">Bilateral Trust:</b>
          <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
            Backed by a strong Pakistan-US partnership, we prioritize
            transparency and professional support to build lasting
            relationships with our global customers.
          </p>
        </div>

      </div>
    </main>
  );
};

export default About;