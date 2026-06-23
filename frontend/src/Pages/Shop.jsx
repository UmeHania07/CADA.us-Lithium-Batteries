import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
// import { temporaryProducts } from '../Data/mockData'; // 💡 Ab iski zaroorat nahi, comment kar sakte hain
import { ShopContext } from '../context/ShopContext';

const Shop = () => {
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);

  return (
    <div className='max-w-7xl mx-auto mt-6 mb-20 px-4 border-t border-gray-100'>
      {/* Page Header */}
      <div className='text-center py-8 text-3xl'>
        <Title text1={'ALL'} text2={'PRODUCTS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Explore our complete lineup of USA-grade lithium storage systems built for the future.
        </p>
      </div>

      {/* Complete Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-10'>
        {/* 🔋 Correction 3: Safety Check lagaya taake load hote waqt crash na ho */}
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id} // 🔋 Correction 1: 'id' ki jagah '_id' kiya
              onClick={() => navigate(`/product/${product._id}`)} // 🔋 Correction 1: 'id' ki jagah '_id' kiya
              className='border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group bg-white'
            >
              <div className='overflow-hidden bg-gray-50 rounded-lg h-64 flex items-center justify-center mb-4 p-2'>
                <img
                  /* 🔋 Correction 2: Image array ka pehla element nikala aur placeholder safety lagayi */
                  src={product.image && product.image[0] ? product.image[0] : ''}
                  alt={product.name}
                  className='h-full w-full object-contain rounded-md group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <h3 className='font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors'>{product.name}</h3>
              <p className='text-sm text-gray-500 mt-1 line-clamp-2'>{product.description}</p>
              <div className='flex justify-between items-center mt-4'>
                <span className='text-xl font-extrabold text-gray-900'>Rs. {product.price}</span>
                <span className='text-xs bg-blue-50 group-hover:text-blue-600 transition-colors px-2.5 py-1 rounded-full font-semibold uppercase'>View Details</span>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-500 text-center col-span-full py-10'>No products found in database</p>
        )}
      </div>
    </div>
  );
};

export default Shop;