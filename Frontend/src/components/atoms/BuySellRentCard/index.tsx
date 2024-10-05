import React from 'react';

interface CardData {
    imagePath : string;
    heading : string;
    mainData : string;
    btnData : string;
}

export const BuySellRentCard : React.FC <CardData> = ({imagePath, heading, mainData, btnData}) => {
  return (
     <div className='bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between p-6 md:p-8'>

    <div className='flex justify-center mb-4'>
      <img 
        alt='Invest Wanted Card' 
        src={imagePath} 
        className='object-cover w-auto h-auto rounded-md'
      />
    </div>

    <h1 className='text-lg md:text-xl font-bold text-center mb-2'>{heading}</h1>

    <p className='text-sm md:text-base text-gray-600 text-center mb-4'>{mainData}</p>

      <button className='border-[0.5px] border-[#37474F] rounded-lg px-6 py-2 font-semibold self-center max-sm:my-auto'>
         {btnData}
        </button>
  </div>
  )
}
