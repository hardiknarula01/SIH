import { Typography } from "@mui/material";
import React from "react";
import doctorsData from "./doctorsData.json";
import DoctorsCard from "./DoctorsCard/DoctorsCard";
import { Link } from "react-router-dom";
function HospitalDoctors({doctors , hospital}) {
  console.log( doctors)
  return (
    <>
      <div className="w-full p-4 ml-6 flex flex-col justify-start items-center">
        <Typography
          sx={{ fontSize: "30px", color: "#28a2ed", fontWeight: 600 }}
        >
          Top Doctors from {hospital?.name}
        </Typography>
        <div className="grid lg:grid-cols-2 mt-10 mb-10 gap-16 h-[37rem] overflow-x-scroll hospitalcontainer sm:grid-cols-1">
          {doctors?.map((doctor, index) => (
            
              <DoctorsCard
              key={index}
              name={doctor?.name}
              designation={doctor?.position}
              exp={doctor?.exp}
              hospital={hospital?.name}
              imagePath={doctor?.avatar}
              // whatsappLink={doctor.whatsappLink}
            />
            
          ))}
        </div>
      </div>
    </>
  );
}

export default HospitalDoctors;
