import React from 'react';
import { BsAlexa } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 border-b border-gray-900">
          <div className="flex items-center gap-3">
            <BsAlexa />
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white">Chatikaa</span>
            </div>
            <div className='flex border rounded-full px-3 items-center w-[150px] py-0.5'>
                <input type="text" placeholder='Search...' className='bg-transparent rounded-full w-full text-sm outline-none' />
                <IoSearchOutline />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
