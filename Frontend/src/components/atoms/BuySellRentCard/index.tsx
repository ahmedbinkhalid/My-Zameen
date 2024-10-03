import React from 'react';

interface CardData {
    imagePath : string;
    heading : string;
    mainData : string;
    btnData : string;
}

export const BuySellRentCard : React.FC <CardData> = ({imagePath, heading, mainData, btnData}) => {
  return (
    <div className='bg-white rounded-2xl py-16 justify-center '>
        <div className='flex flex-col gap-6 font-sans text-[#37474F]'>
      <div className='self-center'>
      <img alt='InvestWantedCard' src={imagePath} className='object-cover h-auto w-auto '/>
      </div>
      <h1 className='text-xl font-bold text-center'> {heading}</h1>
      <p className='text-base italic text-center h-8 w-1/2 self-center mb-4'> {mainData} </p>
      <button className='border-[0.5px] border-[#37474F] rounded-lg px-6 py-2 font-semibold self-center'>
         {btnData}
        </button>
    </div>
    </div>
  )
}
