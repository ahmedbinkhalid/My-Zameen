import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger menu and close icons

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer visibility

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle drawer state
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-[#37474F] uppercase text-base flex lg:justify-around justify-normal items-center py-3 font-bold font-sans cursor-pointer border-b-[1px] border-[#37474F] ">
       {/* Hamburger Menu Icon on the Right */}
       <div
        className="lg:hidden flex items-center cursor-pointer mx-4"
        onClick={toggleDrawer}
      >
        {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <img
        alt="logo"
        src="https://www.graana.com/home-page-images/GraanaLogo.svg"
        className="object-cover p-2 w-48" // Adjust size as needed
      />

     

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row gap-6 items-center">
        <li>buy</li>
        <li>sell</li>
        <li>invest</li>
        <li>building materials</li>
        <li>more</li>
      </ul>

      {/* Right Side Options */}
      <div className="hidden lg:flex justify-between items-center gap-6">
        <p>wanted</p>
        <button className="border-[0.5px] border-[#37474F] rounded-lg px-6 py-2">
          Sign In
        </button>
      </div>

      {/* Drawer for Mobile Screens */}
      <div
        className={` rounded-lg fixed top-20 left-0 w-[24%] max-sm:w-1/2 h-auto bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="rounded-lg flex justify-between items-center p-4 border-b bg-[#37474F] text-gray-300">
          <h2 className="font-bold text-lg text-center">Choose your Favorite </h2>
          <button onClick={toggleDrawer} className="text-xl mx-1">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col p-4 text-center space-y-2">
          <li className="py-2 border-b-2 border-[#37474F] hover:bg-gray-100 transition-colors">
            buy
          </li>
          <li className="py-2 border-b-2 border-[#37474F] hover:bg-gray-100 transition-colors">
            sell
          </li>
          <li className="py-2 border-b-2 border-[#37474F] hover:bg-gray-100 transition-colors">
            invest
          </li>
          <li className="py-2 border-b-2 border-[#37474F] hover:bg-gray-100 transition-colors">
            building materials
          </li>
          <li className="py-2 border-b-2 border-[#37474F] hover:bg-gray-100 transition-colors">
            more
          </li>

          <li className="py-2 border-b-2 border-[#37474F] hover:bg-gray-100 transition-colors">
          wanted
          </li>

        </ul>

        <button className="border-[0.5px] border-[#37474F] rounded-lg px-6 max-sm:px-4 py-2 max-sm:py-1 mx-9 max-sm:my-7 my-2">
          Sign In
        </button>

      </div>
    </nav>
  );
};
