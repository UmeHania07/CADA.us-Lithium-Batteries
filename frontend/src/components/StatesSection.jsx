import React, { useEffect, useState, useRef } from 'react';
import Title from './Title'; // Sahi path check kar lijiyega
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

// Ek chota sa reusable component numbers ko animate karne ke liye
const CountUp = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                let start = 0;
                const duration = 2000; // 2 seconds mein counter complete hoga
                const totalFrames = 60;
                const increment = end / totalFrames;
                const frameDuration = duration / totalFrames;

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        setCount(end);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, frameDuration);
            }
        }, { threshold: 0.2 });

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [end]);

    return <span ref={elementRef}>{count}{suffix}</span>;
};

const StatsSection = () => {
    return (
        <div className='w-full py-16 border-t border-gray-100 bg-white'>
            {/* 1. Header Portion (Jaise About aur Contact ka hai) */}
            <div className='text-3xl text-center pb-12'>
                <Title text1={"WHY"} text2={"CHOOSE US"} />
                <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto leading-relaxed">
                    Empowering Pakistan with USA's premium lithium technology. Our expert
                    solutions are engineered for world-class efficiency and clean energy.
                </p>
            </div>

            {/* 2. Main Grid Layout (Left: Stats, Center/Right: Image & Text) */}
            <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-6'>

                {/* LEFT COLUMN: Numbers Counting (4 columns width) */}
                <div className='md:col-span-4 flex flex-col justify-center space-y-8 text-center md:text-left border-r border-gray-100 pr-4'>
                    <div>
                        <h3 className='text-3xl font-extrabold text-green-600 prata-regular'>
                            <CountUp end={10} suffix="GWh" />
                        </h3>
                        <p className='text-xs font-bold text-gray-700 uppercase tracking-wider mt-1'>Global Deployment</p>
                    </div>

                    <div>
                        <h3 className='text-3xl font-extrabold text-green-600 prata-regular'>
                            <CountUp end={15} suffix="+" />
                        </h3>
                        <p className='text-xs font-bold text-gray-700 uppercase tracking-wider mt-1'>Tech Innovation</p>
                    </div>

                    <div>
                        <h3 className='text-3xl font-extrabold text-green-600 prata-regular'>
                            <CountUp end={12} suffix="K+" />
                        </h3>
                        <p className='text-xs font-bold text-gray-700 uppercase tracking-wider mt-1'>Enterprise Clients</p>
                    </div>

                    <div>
                        <h3 className='text-3xl font-extrabold text-green-600 prata-regular'>
                            <CountUp end={24} suffix="/7" />
                        </h3>
                        <p className='text-xs font-bold text-gray-700 uppercase tracking-wider mt-1'>System Monitoring</p>
                    </div>
                </div>

                {/* RIGHT COLUMN: Image & Description (8 columns width) */}
                <div className='md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/* Image box with rounded corners jaise screenshot mein hai */}
                    <div className='rounded-2xl overflow-hidden shadow-lg h-[350px]'>
                        <img
                            src={assets.statesection}
                            alt="CADA Lithium Battery"
                            className='w-full h-full object-cover'
                        />
                    </div>

                    {/* Right side content & Button */}
                    <div className='flex flex-col justify-center space-y-4'>
                        <span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>About Cada Batteries</span>
                        <h2 className='text-2xl font-bold text-gray-900 leading-tight'>
                            Premium Solutions For High-Demand Energy Programs
                        </h2>
                        <p className='text-gray-500 text-sm leading-relaxed'>
                            We specialize in high-performance lithium modules. From residential backups to massive industrial grids, Cada Batteries provides the backbone for reliable, uninterrupted power.
                        </p>
                        <Link to='/about' className='w-3'>
                            <button className='w-max px-6 py-2.5 bg-black text-white font-semibold text-xs rounded-lg uppercase  hover:bg-gray-800 tracking-wider transition-all duration-300 shadow-md mt-2'>
                                More...
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StatsSection;