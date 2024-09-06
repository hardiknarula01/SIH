import React from "react";
import video from "../../Assets/site_video_draft1.mp4";

const MedWander = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col justify-center items-center lg:w-1/2 p-6 lg:p-8">
          <p className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
            MedWander service is absolutely free
          </p>
          <p className="text-lg lg:text-xl mb-6 text-center lg:text-left">
            MedWander services are free. You pay the same rates for treatment as
            in the hospital's original price list.
          </p>
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md">
            Get a Free Quote
          </button>
        </div>
        <div className="lg:w-1/2">
          <video
            className="w-full h-auto lg:h-full max-h-64 lg:max-h-none"
            src={video}
            loop
            autoPlay
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default MedWander;
