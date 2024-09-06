import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HospitalDescription from "./Sections/HospitalDescription/HospitalDescription";
import HospitalDetails from "./Sections/HospitalDetails/HospitalDetails";
import FreeConsultationForm from "./FreeConsultationForm/FreeConsultationForm";
import HospitalImages from "./Sections/HospitalImages/HospitalImages";
import HospitalDoctors from "./Sections/HospitalDoctors/HospitalDoctors";
import HospitalTestimonials from "./Sections/HospitalTestimonials/HospitalTestimonials";
import TopMedicalDepartments from "./Sections/TopMedicalDepartments/TopMedicalDepartments";
import TopBar from "../Global/Navbar/TopBar";
import Navbar from "../Global/Navbar/Navbar";

const HospitalAbout = () => {
  const [ data, setData ] = useState([]);
  const { hospitalName } = useParams(); // USED TO GET HOSPITAL NAME FROM THE QUERY STRING
  // let decodedString = decodeURIComponent(hospitalName.split('/').pop());
  console.log("hospitalName:",hospitalName);
  const fetchHospitalData = async () => {
    const {data} = await axios.get(`http://localhost:9000/hospital/${hospitalName}`)
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    fetchHospitalData()
  }, [hospitalName])
  

  return (
    <>
      <TopBar/>
      <Navbar/>
      <div className="flex flex-row w-screen py-4">
      <div className="relative flex flex-col w-screen py-4">
        <HospitalDetails hospital={data.hospital} />
        <HospitalDescription hospital={data.hospital} />
        <HospitalImages hospitalImage = {data.hospital}/>
        <HospitalDoctors doctors = {data.doctors} hospital={data.hospital}/>
        <TopMedicalDepartments hospital={data.hospital}/>
        <HospitalTestimonials  hospital={data.hospital}/>
      </div>
      <div className="fixed-form  p-5">
        <FreeConsultationForm/>
      </div>
      </div>
    </>
  );
};

export default HospitalAbout;
