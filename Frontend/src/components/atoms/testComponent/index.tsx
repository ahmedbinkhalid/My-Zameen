import React from 'react'

export const TestComponent = () => {
  return (
    <div className="relative w-full h-[100vh] bg-cover  bg-center" style={{ backgroundImage: `url('https://www.graana.com/_next/image/?url=%2Fhome-page-images%2FHeaderImage.png&w=1920&q=75')` }}>
      {/* Overlay for centering */}
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

        {/* Button row */}
        <div className="flex space-x-4 mb-6">
            
        </div>

        {/* Search bar */}
        <div className="w-full max-w-md">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-2 border border-gray-300 rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
