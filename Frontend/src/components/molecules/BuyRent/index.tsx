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
    <div className="relative w-full h-[100vh] bg-cover  bg-center" style={{ backgroundImage: `url('https://www.graana.com/_next/image/?url=%2Fhome-page-images%2FHeaderImage.png&w=1920&q=75')` }}>

    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      
      {/* Heading with two parts */}
      <div className="text-white mb-6">
        <h1 className="text-2xl md:text-4xl font-bold">
        Buy or rent vetted properties at the
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold mt-4 ">
        most trusted online real estate portal
        </h1>
      </div>
      <div className="flex space-x-4 mb-6">
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
