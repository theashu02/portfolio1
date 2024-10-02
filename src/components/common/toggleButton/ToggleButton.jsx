import React, { useState } from 'react';

export default function ToggleButton() {
  const [selectedFeature, setSelectedFeature] = useState('customer');

  return (
    <div className="relative mt-8 mb-5 w-1/2">
      <div className="absolute inset-0 bg-teal-300 filter blur-xl opacity-30"></div>
      <div className="relative bg-white bg-opacity-50 p-1 rounded-full shadow-md">
        <div className="flex relative z-0">
          <button
            className={`relative w-1/2 z-10 py-2 px-6 text-lg font-bold transition-all duration-300 rounded-full font-sans ${
              selectedFeature === 'manager'
                ? 'text-black shadow-[inset_0px_1px_7px_rgba(0,0,0,0.25)]' // Use closest shadow
                : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={() => setSelectedFeature('manager')}
          >
            Manager Feature
          </button>
          <button
            className={`relative w-1/2 z-10 py-2 px-6 text-lg font-bold transition-all duration-300 rounded-full font-sans ${
              selectedFeature === 'customer'
                ? 'text-black shadow-[inset_0px_1px_7px_rgba(0,0,0,0.25)]' // Use closest shadow
                : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={() => setSelectedFeature('customer')}
          >
            Customer Feature
          </button>
          <div
            className={`absolute inset-0 w-1/2 bg-teal-300 bg-opacity-60 rounded-full transition-transform duration-200 ease-in-out ${
              selectedFeature === 'customer' ? 'transform translate-x-full' : ''
            }`}
          >
            <div className="absolute inset-0 shadow-inner rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
