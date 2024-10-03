import React, {useState} from 'react';
import { BuyRentButton } from '../../atoms/BuyRentButton';
import { SearchBar } from '../../atoms/SearchBar';

const BuyRent: React.FC = () => {

  const [isFirstButtonActive, setFirstButtonActive] = useState(true); // Initial state for the first button
  const [isSecondButtonActive, setSecondButtonActive] = useState(false); // Initial state for the second button

  const handleFirstButtonClick = () => {
      setFirstButtonActive(true);
      setSecondButtonActive(false);
  };

  const handleSecondButtonClick = () => {
      setFirstButtonActive(false);
      setSecondButtonActive(true);
  }; 

  return (
    <div className="relative flex justify-center">
      <img src="https://www.graana.com/_next/image/?url=%2Fhome-page-images%2FHeaderImage.png&w=1920&q=75" alt="Background" className="absolute object-cover w-full h-fit" />

      <div className="relative flex flex-col items-center text-white text-center gap-8 py-36">
        <h1 className="text-4xl font-bold w-[52%] leading-[3.75rem]">Buy or rent vetted properties at the most trusted online real estate portal</h1>
        <div className="flex gap-4">
        <BuyRentButton 
                data="Buy" 
                isActive={isFirstButtonActive} 
                onClick={handleFirstButtonClick} 
            />
            <BuyRentButton 
                data="Rent" 
                isActive={isSecondButtonActive} 
                onClick={handleSecondButtonClick} 
            />
        </div>
        <SearchBar />
      </div>
      
    </div>
      
  )
}

export default BuyRent;
