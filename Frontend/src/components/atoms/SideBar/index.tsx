import React from 'react';
import { SideBarProps } from './types';
import { FiX } from "react-icons/fi";

export const SideBar : React.FC<SideBarProps> = ({isDrawerOpen, toggleDrawer}) => {
  return (

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

  )
}
