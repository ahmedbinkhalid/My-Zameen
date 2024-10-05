import React from 'react';
import { AreaGuides } from '../../atoms/AreaGuides';

export const AreaGuidesMain = () => {
  return (
    // <section className='grid grid-cols-2'>
    //     <img src="https://www.graana.com/_next/image/?url=%2Fhome-page-images%2Fground.png&w=1920&q=75" alt="Background" className="relative object-cover w-full h-fit" />

    //     <AreaGuides />
    // </section>

    <section
  className="relative lg:h-[60vh] h-auto w-full bg-cover bg-center grid grid-cols-2 max-sm:grid-cols-1 xl:gap-48 lg:items-center xl:px-48 gap-10 mx-auto max-sm:p-10 md:p-10 lg:py-0"
  style={{
    backgroundImage: `url('https://www.graana.com/_next/image/?url=%2Fhome-page-images%2Fground.png&w=1920&q=75')`,
  }}
>

      <AreaGuides />

      <div className=" flex items-center justify-center">
    {/* <div className=""> */}
      <img
        src="https://www.graana.com/_next/image/?url=%2Fhome-page-images%2Fmap.png&w=1920&q=75"
        alt="Sample"
        className="object-cover w-auto h-auto"
      />
    {/* </div> */}
  </div>
  
    </section>
  )
}
