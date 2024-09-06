import React, { useState } from "react";
import {
  FaBrain,
  FaBone,
  FaRibbon,
  FaSmile,
  FaStethoscope,
  FaEye,
  FaTooth,
  FaBaby,
  FaDumbbell,
  FaWeight,
  FaLungs,
  FaUserMd,
  FaTransgender,
  FaCapsules,
  FaCommentMedical,
  // FaArrowRight,
  // FaArrowLeft,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { GiKidneys, GiHeartOrgan, GiLiver } from "react-icons/gi";

import { useNavigate } from "react-router-dom";
const medicalAreas = [
  // { icon: <FaBrain />, label: "Brain / Neuro" },
  // { icon: <FaBone />, label: "Bone Marrow" },
  // { icon: <FaRibbon />, label: "Cancer" },
  // { icon: <FaSmile />, label: "Cosmetics" },
  // { icon: <FaStethoscope />, label: "ENT" },
  // { icon: <FaEye />, label: "Eye" },
  // { icon: <GiHeartOrgan />, label: "Heart" },
  // { icon: <FaTooth />, label: "Hair" },
  // { icon: <FaUserMd />, label: "Prostatitis" },
  // { icon: <FaBaby />, label: "Infertility (IVF)" },
  // { icon: <FaCommentMedical />, label: "Intestine" },
  // { icon: <GiKidneys />, label: "Kidney" },
  // { icon: <FaDumbbell />, label: "Ortho" },
  // { icon: <FaLungs />, label: "Lungs" },
  // { icon: <GiLiver />, label: "Liver" },
  // { icon: <FaWeight />, label: "Obesity" },
  // { icon: <FaTransgender />, label: "Spine" },
  // { icon: <FaCapsules />, label: "Others or Unknown" },
  { icon: <FaBrain />, label: 'Brain / Neuro', department:'NEUROSURGERY' },
  { icon: <FaBone />, label: 'Bone Marrow', department:'HEMATOLOGY'},
  { icon: <FaRibbon />, label: 'Cancer' ,department:'ONCOLOGY'},
  { icon: <FaSmile />, label: 'Cosmetics' ,department:'COSMETIC'},
  { icon: <FaStethoscope />, label: 'ENT' ,department:'ENT'},
  { icon: <FaEye />, label: 'Eye' ,department:''},
  { icon: <GiHeartOrgan />, label: 'Heart',department:'CARDIOLOGY' },
  { icon: <FaTooth />, label: 'Hair' ,department:''},
  { icon: <FaUserMd />, label: 'Prostatitis',department:'' },
  { icon: <FaBaby />, label: 'Infertility (IVF)' ,department:'IVF'},
  { icon: <FaCommentMedical />, label: 'Intestine',department:'' },
  { icon: <GiKidneys />, label: 'Kidney' ,department:'UROLOGY'},
  { icon: <FaDumbbell />, label: 'Ortho' ,department:'ORTHOPEDICS'},
  { icon: <FaLungs />, label: 'Lungs' ,department:''},
  { icon: <GiLiver />, label: 'Liver' ,department:''},
  { icon: <FaWeight />, label: 'Obesity' ,department:''},
  { icon: <FaTransgender />, label: 'Spine',department:'SPINE SURGERY' },
  { icon: <FaCapsules />, label: 'Others or Unknown' ,department:''}
];

const hospitalsData = {
  "Brain / Neuro": [
    { name: "Brain Hospital A", location: "Location A" },
    { name: "Brain Hospital B", location: "Location B" },
  ],
  "Bone Marrow": [
    { name: "Bone Hospital A", location: "Location A" },
    { name: "Bone Hospital B", location: "Location B" },
  ],
  // Add similar data for other medical areas
  // ...
};

const MedicalAreaSelection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 8, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 8, medicalAreas.length - 8)
    );
  };
  const navigate = useNavigate();
  const handleAreaClick = (areaLabel) => {
    setSelectedArea(areaLabel);
    navigate(`/treatment`, { state: { department: areaLabel } });
  };
  // onClick={() => handleAreaClick(area.label)}
  return (
    <div className="text-center p-8">
      <h2 className="text-center text-3xl font-bold text-zinc-500 mb-8">
        Book <span className="text-primary">Your Appointment</span> 
      </h2>
      <h3 className="text-xl mb-8">Select your area of medical problem</h3>
      <div className="flex justify-center items-center ">
        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className={`text-black rounded-full hover:bg-slate-100  px-2 py-2 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaArrowLeft size={30} />
        </button>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 w-full max-w-screen-lg">
          {medicalAreas
            .slice(currentIndex, currentIndex + 8)
            .map((area, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg bg-blue-100 hover:bg-blue-200 transition transform hover:scale-105 cursor-pointer"
                onClick={() => handleAreaClick(area.department)}
              >
                <div className="text-5xl mb-2 text-blue-900">{area.icon}</div>
                <div className="text-sm font-semibold text-gray-700">
                  {area.label}
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={handleNextClick}
          disabled={currentIndex >= medicalAreas.length - 8}
          className={`text-black rounded-full hover:bg-slate-100  px-2 py-2 ${
            currentIndex >= medicalAreas.length - 8
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <FaArrowRight size={30} />
        </button>
      </div>
      {selectedArea && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">
            Best Hospitals for {selectedArea}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalsData[selectedArea]?.map((hospital, index) => (
              <div key={index} className="p-4 rounded-lg bg-white shadow-md">
                <h4 className="text-xl font-bold">{hospital.name}</h4>
                <p className="text-gray-600">{hospital.location}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalAreaSelection;
