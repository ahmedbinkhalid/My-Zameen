import React from "react";
import { BuySellRentData } from "./constants";
import { BuySellRentCard } from "../../atoms/BuySellRentCard";

export const BuySellRent = () => {
  return (
    <section className="md:px-24 px-20 py-24 relative overflow-hidden "> 
    
  <main className='flex flex-col justify-between gap-16 relative z-10'> 
    <div className='bg-[#37474F] opacity-35 rounded-full md:h-32 md:w-32 h-24 w-24 absolute top-0 left-0 transform -translate-x-1/2 translate-y-1/2'></div> 
    <div className='bg-red-400 rounded-full md:h-32 md:w-32 h-24 w-24 absolute bottom-0 right-0 transform translate-x-1/2 -translate-y-1/2'></div> 

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 items-center w-full bg-gray-100 py-24 rounded-2xl z-20 md:px-16 px-8"> {/* Removed absolute positioning and set width to full */}
      {BuySellRentData.map((objData, index) => (
        <BuySellRentCard
          key={index} // Always provide a unique key when mapping over arrays
          imagePath={objData.imagePath}
          heading={objData.heading}
          mainData={objData.mainData}
          btnData={objData.btnData}
        />
      ))}
    </div>
    
  </main>
</section>

  );
};
