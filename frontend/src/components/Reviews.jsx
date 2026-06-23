import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets'; // Apne assets ka path check kar lein
import Title from './Title';
import {reviews} from '../Data/mockData'

const Reviews = () => {
    // Fake Reviews Data (Aap isse change kar sakti hain)
  const review = reviews

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatic Slider Logic (Har 3 second baad slide badlega)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % review.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [review.length]);

    return (
        <div className='my-20 px-4'>
            {/* Section Title */}
            <div className='text-center py-8 text-3xl'>
                <Title text1={'CLIENT'} text2={'REVIEWS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Trusted by hundreds of families and industries across the country.
                </p>
            </div>

            {/* Slider Container */}
            <div className='relative max-w-4xl mx-auto overflow-hidden bg-gray-50 rounded-2xl shadow-sm border border-gray-100'>
                <div
                    className='flex transition-transform duration-700 ease-in-out'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {review.map((item) => (
                        <div key={item.id} className='w-full flex-shrink-0 p-8 sm:p-12 flex flex-col items-center text-center'>
                            {/* Client Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-20 h-20 rounded-full border-4 border-white shadow-md mb-4 object-cover'
                            />

                            {/* Star Rating */}
                            <div className='flex gap-1 mb-3'>
                                {[...Array(item.rating)].map((_, i) => (
                                    <span key={i} className='text-yellow-400 text-xl'>★</span>
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className='text-gray-700 italic text-lg md:text-xl leading-relaxed mb-6'>
                                "{item.comment}"
                            </p>

                            {/* Name & Role */}
                            <div>
                                <h4 className='font-bold text-gray-900 text-lg'>{item.name}</h4>
                                <p className='text-blue-600 text-sm font-medium'>{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div className='flex justify-center gap-2 pb-6'>
                    {reviews.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;