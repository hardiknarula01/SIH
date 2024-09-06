import React from 'react';
import googlereview from '../../Assets/googlereview-removebg-preview.png';

const ReviewHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly">
      <div className="flex items-center mb-2 md:mb-0 md:mr-2">
        <img src={googlereview} alt="google review" className="object-contain w-32 sm:w-44" />
      </div>
      <div className="flex items-center mb-2 md:mb-0">
        <span className="text-lg sm:text-xl font-bold mr-2 h-10 sm:h-14">4.8</span>
        <div className="flex h-10 sm:h-14">
          <span className="text-yellow-500 mr-0.5">&#9733;</span>
          <span className="text-yellow-500 mr-0.5">&#9733;</span>
          <span className="text-yellow-500 mr-0.5">&#9733;</span>
          <span className="text-yellow-500 mr-0.5">&#9733;</span>
          <span className="text-yellow-500">&#9733;</span>
        </div>
      </div>
      <div className="mb-2 md:mb-0">
        <span className="text-gray-600 text-lg font-bold sm:text-xl">MedWander is Highly Recommended</span>
      </div>
    </div>
  );
};

export default ReviewHeader;