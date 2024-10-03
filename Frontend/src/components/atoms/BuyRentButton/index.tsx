import React from 'react';

interface ButtonData {
    data : string
}

export const BuyRentButton : React.FC<ButtonData> = ({data}) => {
  return (
    <button className='rounded-lg px-6 py-2'>
                {data}
            </button>
  );
}
