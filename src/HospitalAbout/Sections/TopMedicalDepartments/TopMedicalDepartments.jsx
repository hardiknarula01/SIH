import { Typography } from "@mui/material";
import React from "react";
import TopMedicalDepartmentsCards from "./TopMedicalDepartmentsCards/TopMedicalDepartmentsCards";
import topmedicaldepartments from "./topmedicaldepartments.json";//not used
export default function TopMedicalDepartments({hospital}) {
    const dummyData = [{
        iconPath: "../../../Assets/Neurology.png",
        name: "Neurology",
        link: ""
    },{
        iconPath: "../../../Assets/Infertility.png",
        name: "Infertility",
        link: ""
    },{
        iconPath: "../../../Assets/Oncology.png",
        name: "Oncology",
        link: ""
    },
    {
        iconPath: "../../../Assets/Transplant.png",
        name: "Transplant",
        link: ""
    },
    {
        iconPath: "../../../Assets/Ortho.png",
        name: "Orthopedic",
        link: ""
    }
    ];//used this dummy data 
  return (
    <>
      {hospital?.departments.length >0 &&(
        <div className="w-full mt-[7rem] p-4 ml-6 flex flex-col justify-start items-center">
        <Typography
          sx={{ fontSize: "30px", color: "#28a2ed", fontWeight: 600 }}
        >
          Top Medical Departments in {hospital?.name}
        </Typography>

        
          <div className="flex gap-3 mt-10">
          {hospital?.departments.map((dept, index) => {
            return <TopMedicalDepartmentsCards key={index} link={"/treatment"}  name={dept}  />;
          })}
        </div>
      </div>
        )}
    </>
  );
}
