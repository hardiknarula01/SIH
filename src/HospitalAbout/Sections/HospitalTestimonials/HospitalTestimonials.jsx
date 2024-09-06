import { Typography } from "@mui/material";
import React from "react";
import ReviewList from "./ReviewList";

function HospitalTestimonials({hospital}) {
  return (
    <div className="w-full mt-[7rem] p-4 ml-6 flex flex-col justify-start items-center gap-10 mb-10">
      <Typography sx={{ fontSize: "30px", color: "#28a2ed", fontWeight: 600 }}>
        Testimonials for {hospital?.name}
      </Typography>
      <ReviewList reviews = {hospital?.patientReviews} />
    </div>
  );
}

export default HospitalTestimonials;
