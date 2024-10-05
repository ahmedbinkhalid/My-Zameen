import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

export const AreaGuides = () => {
  return (
    // <div className="flex justify-center items-center">
    <div className="flex flex-col gap-3 justify-center">
      <h1 className="text-[#37474F] font-sans font-bold text-xl xl:text-3xl">
        Area Guides
      </h1>
      <p className="text-base xl:text-lg italic">
        View schools, health services, parks, security index and other details
        of any area
      </p>

      <div className="my-4 flex px-4 py-3 rounded-sm border-[0.5px] border-[#37474F] justify-between text-[#37474F] font-sans items-center gap-2 bg-white">
        <IoSearchOutline className="object-cover text-4xl" />
        <input
          type="text"
          placeholder="Search area"
          className="text-base w-full bg-transparent outline-none"
        />

        <p className="text-sm font-bold">Islamabad</p>
        <FaChevronDown className="object-cover text-lg mt-1 text-red-400 font-extrabold " />
      </div>
    </div>
    // </div>
  );
};
