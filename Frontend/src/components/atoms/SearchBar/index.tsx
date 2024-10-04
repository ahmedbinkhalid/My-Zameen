import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

export const SearchBar : React.FC = () => {
  return (
    <div className='w-8/12 bg-white flex rounded-2xl'>
        <input type='text' placeholder='Search by city or area' className='text-base text-[#37474F] font-sans placeholder:font-normal w-full rounded-2xl px-10 max-sm:px-4 max-xs:px-1 outline-none max-sm:placeholder:text-sm max-xs:placeholder:text-[5px]' >
        </input>
        <div className='bg-[#e85451] flex items-center justify-center p-7 rounded-e-2xl'>
        <FaSearch className="object-cover text-white text-2xl" />
        </div>
    </div>
  )
}
