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
  <div className="flex flex-col items-center text-center p-4">
  <img 
    src={path} 
    alt="Invest Wanted" 
    className="w-auto h-auto object-cover rounded-md"
  />
  <h2 className="text-xl font-bold mt-4">{heading}</h2>
  <p className="text-gray-600 mt-2 md:h-24 xl:h-12 lg:mx-20">{data}</p>
  <InvestWantedButton data={btnData} />
</div>
  
  )
}
