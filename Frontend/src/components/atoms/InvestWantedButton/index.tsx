import React from 'react';

interface BtnData {
    data: string;  // Explicitly define the type of 'data'
}

export const InvestWantedButton: React.FC<BtnData> = ({ data }) => {
  return (
    <button
      className={`rounded-lg py-3 text-white bg-[#37474F] uppercase text-sm font-sans font-bold self-center w-32 ${! (data === "Login" || "CREATE Account") ? "mt-8" : "h-full w-full"}`}
    >
      {data}
    </button>
  );
}
