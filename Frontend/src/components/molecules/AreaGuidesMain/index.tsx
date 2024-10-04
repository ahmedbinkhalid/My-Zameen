import React from 'react';
import { AreaGuides } from '../../atoms/AreaGuides';

export const AreaGuidesMain = () => {
  return (
    <section className='grid grid-cols-2'>
        <img src="https://www.graana.com/_next/image/?url=%2Fhome-page-images%2Fground.png&w=1920&q=75" alt="Background" className="relative object-cover w-full h-fit" />

        <AreaGuides />
    </section>
  )
}
