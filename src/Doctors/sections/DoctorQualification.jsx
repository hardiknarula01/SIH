import React from 'react'

const DoctorQualification =({doctor})=>{
    return(
        <>
        {doctor.education.length >0 && (
          <div className="mt-4 ml-24 w-7/12">
          <h1 className="text-3xl font-bold mb-2">Doctor's Qualifications</h1>
          <ul className="list-disc text-lg">
            {doctor.education.map((point, index) => (
              <li key={index} className="text-gray-700 flex items-center">
                <span className="text-green-500">&#x2714;</span>
                <span className="ml-2">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        )} 
        </>
    )
}
export default DoctorQualification;