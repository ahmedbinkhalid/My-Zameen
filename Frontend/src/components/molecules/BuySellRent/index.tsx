import React from 'react';
import { BuySellRentData } from './constants';
import { BuySellRentCard } from '../../atoms/BuySellRentCard';

export const BuySellRent = () => {
  return (
    <section className='px-20 py-24'>
        <section className='flex flex-col justify-between gap-64 relative'>
            <div className='bg-[#37474F] opacity-35 rounded-full h-36 w-36 self-start mt-10'></div>
            <div className='bg-red-400 rounded-full h-32 w-32 self-end mr-4'></div>
        <main className='grid grid-cols-3 gap-16 items-center px-16 bg-gray-100  py-24 rounded-2xl absolute z-50 w-auto right-20 left-16 '>
      {
        BuySellRentData.map((objData, index) => (
          <BuySellRentCard 
            key={index}  // Always provide a unique key when mapping over arrays
            imagePath={objData.imagePath}
            heading={objData.heading}
            mainData={objData.mainData}
            btnData={objData.btnData}
          />
        ))
      }
    </main>
        </section>
    </section>
  )
}
