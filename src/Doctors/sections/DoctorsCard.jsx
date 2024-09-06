import React from "react";
import { Link } from "react-router-dom";

const DoctorsCard = ({ doctor }) => {
  return (
    <div className="w-full md:w-8/12 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row md:h-auto max-full">
        {/* Left Column: Picture */}
        <div className="flex-shrink-0 mr-0 md:mr-24 mb-4 md:mb-0">
          <img
            className="h-32 w-32 object-cover"
            src={doctor.avatar}
            alt={`${doctor.name}'s picture`}
          />
        </div>

        {/* Middle Column: Name and Description */}
        <div className="flex-grow flex flex-col mb-4 md:mb-0 md:mr-4">
          <div className="flex items-center mb-2">
            <h2 className="text-xl font-bold">
              {doctor.name || "Unknown Doctor"}
            </h2>
            <span className="ml-2 text-green-500">&#9989;</span>
            <span className="ml-4 bg-blue-200 text-black text-sm px-2 py-1 rounded-full">
              {doctor.position || "Specialty"}
            </span>
          </div>
          <div className="text-gray-700 mb-2">
            <strong>{doctor.position || "N/A"}</strong>
          </div>
          <div className="text-gray-700">
            <p>{doctor.education || "N/A"}</p>
          </div>
          <div className="text-gray-700">
            <p>{doctor.rating ? `${"⭐".repeat(doctor.rating)}` : "N/A"}</p>
          </div>
          <div className="text-gray-700">
            <p>{doctor.experience || "N/A"} years of Experience</p>
          </div>
          <div className="text-gray-700">
            <p>Surgeries Performed: {doctor.surgeries || "N/A"}</p>
          </div>
          <div className="text-gray-700">
            <p>Languages Known: {doctor.languages || "N/A"}</p>
          </div>
          <div className="text-gray-700">
            <p>Works At: {doctor.hospitalID.name || "N/A"}</p>
          </div>
        </div>

        {/* Right Column: Buttons */}
        <div className="flex-shrink-0 ml-0 md:ml-4 flex flex-col justify-center">
          <Link to={`/appointment`}>
            <button className="bg-orange-600 text-white px-4 py-2 rounded mb-2">
              Request an Appointment
            </button>
          </Link>
          <Link to={`/appointment`}>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              <i className="fab fa-whatsapp mr-2"></i> Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
