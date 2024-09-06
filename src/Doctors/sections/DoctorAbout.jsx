import React from "react";

const DoctorAbout = ({ doctor }) => {
  

  return (
    
    <>
      {doctor.about.length > 0 && (<div className="mt-4 ml-24 w-7/12">
      <h1 className="text-3xl font-bold mb-2">About {doctor.name}</h1>
      <ul className="list-disc text-xl space-y-4">
        {doctor.about.map((point, index) => (
          <li key={index} className="text-gray-700 flex items-center">
            <span className="text-green-500">&#x2714;</span>
            <span className="ml-2">{point}</span>
          </li>
        ))}
      </ul>
    </div>)}
    </>
  );
};

export default DoctorAbout;
