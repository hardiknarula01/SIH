import React from "react";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const HospitalDetails = ({ hospital }) => {
  return (
    <>
      <div className="text-[#28a2ed] text-center text-5xl py-2 font-semibold mt-[120px]">
        <h1>{hospital?.name}</h1>
      </div>
      <div className="flex w-screen mt-2 mb-3 ml-2">
        <img alt="hospital image" src={hospital?.images[0]?.imageLink} className="w-[45%] h-[360px]" />
        <img alt="hospital image" src={hospital?.images[1]?.imageLink} className="w-[50%] h-[360px]" />
      </div>
      <div className="about_hospital w-screen bg-[#d0f4fc] px-10 py-5 flex justify-left gap-24 items-center">
        <div className="flex gap-1 justify-center items-center text-2xl">
          <StarIcon className=" text-[#ffc000]" style={{ fontSize: "40px" }} />
          <h1 className=" font-semibold text-[#2e79a8]">4.8 Rating</h1>
        </div>
        <div className="flex gap-1 justify-center items-center text-2xl">
          <LocationOnIcon
            className="text-[#2e79a8] "
            style={{ fontSize: "40px" }}
          />
          <h1 className=" font-semibold text-[#2e79a8]">{hospital?.city}</h1>
        </div>
        <div className="flex gap-1 justify-center items-center text-2xl">
          <HotelIcon className=" text-[#2e79a8]" style={{ fontSize: "40px" }} />
          <h1 className=" font-semibold text-[#2e79a8]">1200 Beds</h1>
        </div>
        <div className="flex gap-1 justify-center items-center text-2xl">
          <ControlPointIcon
            className=" text-[#2e79a8]"
            style={{ fontSize: "40px" }}
          />
          <h1 className=" font-semibold text-[#2e79a8]">{hospital?.type}</h1>
        </div>
      </div>
      <div className="Logos w-[95%] p-5 ml-4 flex gap-6 justify-center items-center mt-2">
        {hospital?.awards?.map((award) => {
          return <img src={award.accredition_imageLink} alt={award.title} className="w-[100px]" />;
        })}
      </div>
    </>
  );
};

export default HospitalDetails;
