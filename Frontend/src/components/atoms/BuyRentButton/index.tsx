import React from 'react';

interface ButtonData {
  data: string;
  isActive: boolean;
  onClick: () => void;  // Prop for click handler
}

export const BuyRentButton: React.FC<ButtonData> = ({ data, isActive, onClick }) => {

    return (
      <button
      className={`rounded-lg px-10 py-3 bg-white text-[#37474F] uppercase text-base font-sans font-bold ${isActive ? 'opacity-100' : 'opacity-50'}`}
      onClick={onClick}  // Call the provided click handler
  >
      {data}
  </button>

    );
}
