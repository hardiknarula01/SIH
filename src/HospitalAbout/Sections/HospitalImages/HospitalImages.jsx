import { Typography } from "@mui/material";
import React from "react";
import HospitalImagesCarousel from "./HospitalImagesCarousel/HospitalImagesCarousel";

function HospitalImages({hospitalImage}) {

  return (
    <div className="w-full mt-16 p-4 h-[65vh] ml-6 flex flex-col justify-center items-center">
        <Typography
          sx={{ fontSize: "30px", color: "#28a2ed", fontWeight: 600 }}
        >
          More Pictures from the Hospital
        </Typography>
        <div className="mr-[200px]">
          <div className="h-[80vh] p-4 w-[60vw]">
            <HospitalImagesCarousel>
              {hospitalImage?.relatedImages.map((s, index) => {
                return <img src={s.imageLink} alt="Hospital" className="w-[522px]" />;
              })}
            </HospitalImagesCarousel>
          </div>
        </div>
    </div>
  );
}

export default HospitalImages;
