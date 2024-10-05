import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { SideBar } from "../SideBar";

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer visibility

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle drawer state
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-[#37474F] uppercase text-base flex lg:justify-around justify-normal items-center py-3 font-bold font-sans cursor-pointer shadow-lg">
       {/* Hamburger Menu Icon on the Right */}
       <div
        className="lg:hidden flex items-center cursor-pointer mx-4"
        onClick={toggleDrawer}
      >
        {!isDrawerOpen ? <FaBarsStaggered size={24} /> : null}
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

      <SideBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </nav>
  );
};
