import React from "react";
import hospitalsData from './top-hospitals.json'
import "./TopHospitals.css"
import { useNavigate } from "react-router-dom";
// import FreeConsultationForm from "../../../Components/Treatment/FreeConsultationForm/FreeConsultationForm";
function HospitalCard({ hospital }) {
    const navigate = useNavigate();
    const handleHospitalNavigation = ()=>{
      navigate(`/hospitals/${hospital.name}`)
    }
    return (
      <div className="hospital__card cursor-pointer" onClick={handleHospitalNavigation}>
        <img src={hospital.imageLink} alt={hospital.name} />
        <div className="hospital__card__content">
          <p className="hospital__card__content__name">{hospital.name}</p>
          <p className="hospital__card__content__specialty">{hospital.type}</p>
          <button className="hospital__card__contact__button">Contact Hospital Now</button>
        </div>
      </div>
    );
  }
const TopHospitals= ({data})=>{
    return <div className="top__hospitals__container">
   <p className="top__hospitals__heading">
        Top Hospitals for treatment of{" "}
        <span className="top__hospitals__dynamic__heading">{data.departmentID.treatment}</span> 
        {/* as of now we hard code the second part of heading , once nav bar gets fixed we can make it dynamic */}
      </p>

    <div className="top__hospitals__content overflow-y-auto scrol ">
    <div className="hospitals__cards__container">
      {data.hospitals.map((hospital, index) => (
        <HospitalCard key={index} hospital={hospital} />
      ))}
    </div>
  {/* <FreeConsultationForm /> */}
    </div>
    </div>
}
export default TopHospitals;