import React, { useEffect, useState, useContext } from 'react'; // 🔋 STEP 1: useContext ko add kiya
import { useParams, useNavigate } from 'react-router-dom';
// import { temporaryProducts } from '../Data/mockData'; // 💡 Ab iski zaroorat nahi
import { ShopContext } from '../context/ShopContext'; // 🔋 STEP 2: ShopContext ko import kiya

const ProductDetail = () => {
    // 🔋 Dynamic URL matching ke liye '_id' format ya 'productId' jo bhi App.jsx mein rakha ho
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    // 🔋 STEP 3: Context se real products nikale
    const { products } = useContext(ShopContext);

    useEffect(() => {
        if (products && products.length > 0) {
            // 🔋 MongoDB unique id '_id' se matching ki
            const foundProduct = products.find((item) => String(item._id) === String(productId));
            setProduct(foundProduct);
        }
    }, [productId, products]); // products dependency lagayi taake data aate hi run ho

    if (!product) {
        return <div className='text-center my-40 text-xl font-bold text-gray-500'>Loading Product Details...</div>;
    }

    const handleWhatsAppInquiry = () => {
        const phoneNumber = "16062355448";

        const message = `Hello CADA Batteries, I want to inquire about this product:\n\n*Product Name:* ${product.name}\n*Price:* Rs. ${product.price}`;
        const encodedMessage = encodeURIComponent(message);

        window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    };

    return (
        <div className='max-w-6xl mx-auto mt-6 mb-20 px-4 animate-[fadeInUp_0.8s_ease-out_forwards]'>
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className='text-sm font-bold text-gray-600 hover:text-black mb-8 flex items-center gap-2 transition-colors'
            >
                ← Back to Lineup
            </button>

            {/* Main Full Screen Row */}
            <div className='flex flex-col md:flex-row gap-12 items-center md:items-start'>

                {/* Left Side: Large Product Image Box */}
                <div className='w-full md:w-1/2 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-center h-[350px] md:h-[450px] shadow-sm'>
                    <img
                        /* 🔋 Correction: Backend array ki pehli image use ki */
                        src={product.image && product.image[0] ? product.image[0] : ''}
                        alt={product.name}
                        className='max-w-full max-h-full object-contain rounded-xl'
                    />
                </div>

                {/* Right Side: Descriptions & Price */}
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <span className='text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-md w-max'>
                        Premium Lithium Technology
                    </span>
                    <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900'>{product.name}</h1>

                    {/* Star Rating decoration */}
                    <div className='text-yellow-400 text-lg flex gap-1'>★★★★★ <span className='text-gray-400 text-xs my-auto ml-2'>(Trusted USA Grade)</span></div>

                    <hr className='my-2 border-gray-200' />

                    <div className='text-2xl md:text-3xl font-black text-gray-900'>
                        Rs. {product.price}
                    </div>

                    <p className='text-gray-600 leading-relaxed text-base mt-2'>
                        {product.description}
                    </p>

                    {/* Dynamic Specifications Box */}
                    <div className='bg-gray-50 p-4 rounded-xl border border-gray-100 grid grid-cols-2 gap-4 mt-4 text-sm'>
                        <div><span className='text-gray-500'>Category:</span> <strong className='text-gray-800 ml-1'>{product.category}</strong></div>
                        <div><span className='text-gray-500'>Chemistry:</span> <strong className='text-gray-800 ml-1'>LiFePO4</strong></div>
                        <div><span className='text-gray-500'>Origin:</span> <strong className='text-gray-800 ml-1'>USA Engineered</strong></div>
                        <div><span className='text-gray-500'>Warranty:</span> <strong className='text-gray-800 ml-1'>5 Years Trust</strong></div>
                    </div>

                    {/* Action Button */}
                    <div className='mt-6'>
                        <button
                            onClick={handleWhatsAppInquiry}
                            className='w-full md:w-auto px-12 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all shadow-sm'
                        >
                            Inquire Now / Order
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;