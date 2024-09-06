import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DoctorCard({ img, name, title, stars, reviews }) {
  return (
    // <div className="w-[220px]  border-2 border-[#1d3453]  rounded-md overflow-hidden shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 duration-300 ease-in-out">
    //   <img src={img} alt={name} className="w-full h-40 object-contain bg-gray-800  hover:bg-slate-700" />
    //   <div className="px-6 py-4 bg-gray-300">
    //     <div className="font-bold text-lg mb-2">{name}</div>
    //     <p className="text-gray-600 text-base">{title}</p>
    //     <div className="flex items-center mt-4">
    //       <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
    //       <span className="font-bold text-xl">{stars}</span>
    //       <span className="text-gray-600 ml-2">{reviews}+ Reviews</span>
    //     </div>
    //   </div>
    // </div>
    <div className="w-[220px]  rounded-md overflow-hidden shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 duration-300 ease-in-out">
    <img src={img} alt={name} className="w-full h-40 object-contain bg-gray-800  hover:bg-slate-700" />
    <div className="px-6 py-4 bg-white">
      <div className="font-bold text-lg mb-2">{name}</div>
      <p className="text-gray-600 text-base">{title}</p>
      <div className="flex items-center mt-4">
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
        <span className="font-bold text-xl">{stars}</span>
        <span className="text-gray-600 ml-2">{reviews}+ Reviews</span>
      </div>
    </div>
  </div>
  );
}

export default DoctorCard;
