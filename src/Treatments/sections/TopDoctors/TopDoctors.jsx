import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import doctorsData from "./top-doctors.json"
// import FreeConsultationForm from "../../../Components/Treatment/FreeConsultationForm/FreeConsultationForm";
import "./TopDoctors.css"
const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const handleDoctorsNavigation = ()=>{
    navigate(`/doctor/${doctor.name}`)
  }
  return (
    <div className="doctor__card cursor-pointer" onClick={handleDoctorsNavigation}>
      <div className="doctor__card__info">
      <div className="doctor__image">
        <img src={doctor.avatar} alt={doctor.name} />
      </div>
      <div className="doctor__info">
        <p className="doctor__info__name">{doctor.name}</p>
        <p>{doctor.position}</p>
        <p>{doctor.exp}</p>
   
        {doctor.hospitalID && <p>{doctor.hospitalID.name}</p>}


      </div>
      </div>
      <button className="doctor__request__appointment__button">
        Request an Appointment
      </button>
    </div>
  );
};
const TopDoctors=({data})=>{
    return (
        <div className="top__doctors__container">
         <p className="top__doctors__heading">
        Top Doctors For{" "}
        <span className="top__doctors__heading__treatment">{data.departmentID.treatment}</span>
      </p>
          <div className="top__doctors__content">
          <div className="top__doctors__list">
            {data.doctors.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
          </div>
          {/* <FreeConsultationForm /> */}
          </div>
        </div>
      );
}
export default TopDoctors;