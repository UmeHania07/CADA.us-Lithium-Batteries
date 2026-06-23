import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);

  // Database ke pehle 3 products safely select kiye
  const homeProducts = products ? products.slice(0, 3) : [];

  return (
    <div className='max-w-7xl mx-auto mt-12 mb-16 px-4 font-sans'>
      {/* Section Header */}
      <div className='text-center py-8 text-3xl'>
        <Title text1={'OUR'} text2={'PRODUCTS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 mt-2'>
          Explore CADA's premium USA-engineered lithium battery lineup.
        </p>
      </div>

      {/* 3 Products Grid Box */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {homeProducts.length > 0 ? (
          homeProducts.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)}
              className='border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 cursor-pointer group bg-white flex flex-col justify-between'
            >
              <div>
                {/* Image Container */}
                <div className='overflow-hidden bg-slate-50/50 rounded-xl h-64 flex items-center justify-center mb-5 p-4 border border-gray-50/50'>
                  <img
                    src={product.image && product.image[0] ? product.image[0] : ''}
                    alt={product.name}
                    className='h-full w-full object-contain group-hover:scale-105 transition-transform duration-500'
                  />
                </div>

                {/* Product Title */}
                <h3 className='font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors duration-300 line-clamp-1'>
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className='text-sm text-gray-400 mt-1.5 line-clamp-2 leading-relaxed min-h-[40px]'>
                  {product.description}
                </p>
              </div>

              {/* Price and Details Section */}
              <div className='flex justify-between items-center mt-5 pt-4 border-t border-slate-50'>
                <span className='text-xl font-black text-slate-900'>
                  Rs. {product.price}
                </span>
                <span className='text-xs bg-slate-100 text-slate-800 group-hover:bg-blue-600 group-hover:text-white px-3.5 py-1.5 rounded-xl font-bold uppercase tracking-wider transition-all duration-300'>
                  View Details
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-500 text-center col-span-full py-10'>No products available</p>
        )}
      </div>

      {/* Show More Button */}
      <div className='text-center mt-14'>
        <button
          onClick={() => navigate('/shop')}
          className='px-10 py-3.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all duration-300 uppercase tracking-widest shadow-md shadow-slate-100 hover:shadow-blue-100'
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default LatestCollection;