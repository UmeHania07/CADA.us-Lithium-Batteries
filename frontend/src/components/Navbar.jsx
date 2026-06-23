import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <header className="relative z-50 bg-white">
            <nav className='flex items-center justify-between py-5 px-4 sm:px-10 font-medium max-w-7xl mx-auto'>
                <Link to='/'>
                    <img className='w-40 md:w-36' src={assets.logo} alt='logo' />
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden sm:flex text-sm gap-5 text-gray-700'>
                    <NavLink to='/' className='flex flex-col items-center gap-1'>
                        <p>HOME</p>
                        <hr className='hidden h-0.5 w-3/4 border-none bg-gray-700' />
                    </NavLink>
                    <NavLink to='/shop' className='flex flex-col items-center gap-1'>
                        <p>SHOP</p>
                        <hr className='hidden h-0.5 w-3/4 border-none bg-gray-700' />
                    </NavLink>
                    <NavLink to='/about' className='flex flex-col items-center gap-1'>
                        <p>OUR STORY</p>
                        <hr className='hidden h-0.5 w-3/4 border-none bg-gray-700' />
                    </NavLink>
                    <NavLink to='/service' className='flex flex-col items-center gap-1'>
                        <p>SERVICE</p>
                        <hr className='hidden h-0.5 w-3/4 border-none bg-gray-700' />
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                        <p>CONTACT</p>
                        <hr className='hidden h-0.5 w-3/4 border-none bg-gray-700' />
                    </NavLink>
                </ul>

                <div className='flex items-center gap-6'>
                    {/* Maine 'hidden md:block' hata kar sirf 'block' rakha hai taake har screen par dikhe */}
                    <Link to='/contact' className='block'>
                        <button className='px-4 sm:px-7 py-2 border border-gray-900 text-gray-900 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-900 hover:text-white transition duration-300 whitespace-nowrap'>
                            Talk to an Expert
                        </button>
                    </Link>

                    <img
                        onClick={() => setOpenModal(true)}
                        className='sm:hidden w-5 cursor-pointer'
                        src={assets.menu_icon}
                        alt='menu icon'
                    />
                </div>

                {/* -------- Mobile Sidebar (Fixed Fix) -------- */}
                {/* sm:hidden lagane se ye Large screen par khud hi gayab ho jayega */}
                <div
                    className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 z-[100] sm:hidden ${openModal ? "w-full" : "w-0 overflow-hidden"
                        }`}
                >
                    <div className='flex flex-col text-gray-600 h-full'>
                        <div
                            onClick={() => setOpenModal(false)}
                            className='flex items-center gap-4 p-5 cursor-pointer border-b'
                        >
                            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
                            <p className='text-lg font-medium text-gray-900'>Back</p>
                        </div>

                        <div className="flex flex-col">
                            <NavLink onClick={() => setOpenModal(false)} to='/' className='py-4 pl-10 border-b'><p>HOME</p></NavLink>
                            <NavLink onClick={() => setOpenModal(false)} to='/shop' className='py-4 pl-10 border-b'><p>SHOP</p></NavLink>
                            <NavLink onClick={() => setOpenModal(false)} to='/about' className='py-4 pl-10 border-b'><p>OUR STORY</p></NavLink>
                            <NavLink onClick={() => setOpenModal(false)} to='/service' className='py-4 pl-10 border-b'><p>SERVICE</p></NavLink>
                            <NavLink onClick={() => setOpenModal(false)} to='/contact' className='py-4 pl-10 border-b'><p>CONTACT</p></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;