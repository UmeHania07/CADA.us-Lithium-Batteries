import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    // 💡 items-center add kiya hai taake logo aur button upar-neeche na lagin, bilkul center mein aayin
    <header className='flex py-2 px-[4%] justify-between items-center bg-white shadow-sm'>
      <img className='w-[max(10%,80px)]' src={assets.Logo} alt='logo' />
      <button
        onClick={() => setToken("")}
        className='bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 sm:px-7 sm:py-1 rounded-full transition-colors duration-200'
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;