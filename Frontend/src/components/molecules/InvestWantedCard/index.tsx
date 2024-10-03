import React from 'react';
import { InvestWantedButton } from '../../atoms/InvestWantedButton';

interface CardData {
  path : string;
  heading : string;
  data : string,
  btnData : string
}

export const InvestWantedCard : React.FC<CardData> = ({path, heading, data, btnData}) => {
  return (
    <div className='flex flex-col gap-10 font-sans text-[#37474F]'>
      <div className='self-center'>
      <img alt='InvestWantedCard' src={path} className='object-cover h-auto w-auto '/>
      </div>
      <h1 className='text-4xl font-bold text-center'> {heading}</h1>
      <p className='text-base italic text-center h-20'> {data} </p>
      <InvestWantedButton data={btnData} />
    </div>
  )
}
