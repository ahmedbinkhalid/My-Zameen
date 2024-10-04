import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { SlArrowDown } from "react-icons/sl";

export const AreaGuides = () => {
  return (
    <div className=' absolute flex flex-col gap-2'>
        <h1 className='text-[#37474F] font-sans font-bold text-xl'> Area Guides </h1>
        <p className='text-base italic'> View schools, health services, parks, security index and other details of any area </p>

        <div className='flex p-2 rounded-lg border-2 border-[#37474F] justify-between text-[#37474F] font-sans'>
            <div className='flex gap-2'>
            <FaSearch className="object-cover  text-xl" />
            <input type='text' placeholder='Search by city or area' className='text-base  placeholder:font-normal w-auto rounded-2xl px-10 outline-none' >
            </input>
            </div>

            <div className='flex gap-2'>
                <p className='text-sm font-semibold'> Islamabad </p>
                <SlArrowDown className="object-cover text-base" />
            </div>
        </div>
    </div>
  )
}