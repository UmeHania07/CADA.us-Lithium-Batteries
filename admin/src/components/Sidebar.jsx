import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <aside className='w-[18%] min-h-screen border-r-2 bg-white'>
      <div className='flex flex-col items-start gap-4 pt-6 pl-[20%] w-full text-sm'>

        {/* 1. Add Product Link */}
        <NavLink
          to='/add'
          className={({ isActive }) =>
            `flex items-center w-full gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l transition-all duration-200 ${isActive ? "bg-amber-50 border-amber-600 text-amber-600 font-medium" : "hover:bg-gray-50"
            }`
          }
        >
          <img className='w-5 h-5' src={assets.add_icon} alt='add icon' />
          <p className='hidden sm:block'>Add Product</p>
        </NavLink>

        {/* 2. List Products Link */}
        <NavLink
          to='/list'
          className={({ isActive }) =>
            `flex items-center w-full gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l transition-all duration-200 ${isActive ? "bg-amber-50 border-amber-600 text-amber-600 font-medium" : "hover:bg-gray-50"
            }`
          }
        >
          <img className='w-5 h-5' src={assets.order_icon || assets.add_icon} alt='list icon' />
          <p className='hidden sm:block'>List Products</p>
        </NavLink>

      </div>
    </aside>
  );
};

export default Sidebar;