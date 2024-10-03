import React from 'react';

export const Header: React.FC = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white text-[#37474F] uppercase text-base flex justify-evenly py-3 font-bold font-sans cursor-pointer border-b-[1px] border-[#37474F]'>
      <img
        alt='logo'
        src='https://www.graana.com/home-page-images/GraanaLogo.svg'
        className='object-cover p-2'
      />
      <ul className='flex flex-row gap-8 items-center'>
        <li className="">buy</li>
        <li className="">sell</li>
        <li className="">invest</li>
        <li className="">building materials</li>
        <li className="">more</li>
      </ul>
      <div className='flex justify-between flex-row gap-8 items-center ml-8'>
        <p>wanted</p>

        <button className='border-[0.5px] border-[#37474F] rounded-lg px-6 py-2'>
          Sign In
        </button>
      </div>
    </nav>
  );
};
