import React from "react";
import hospitaldata from "../../data/hospitaldata.json";
import HospitalsCard from "./HospitalsCard";
function HospitalCardSection({ countryName, filteredHospitalData }) {
  if (!countryName) {
    return (
      <div className="grid lg:grid-cols-5 mt-14 mb-10 w-[100vw] gap-2 h-[19rem] overflow-x-scroll hospitalcontainer sm:grid-cols-1">
        {hospitaldata.countries.map((country, index) => {
          return country.hospitals.map((hospital, index) => {
            return (
              <HospitalsCard
                key={index}
                name={hospital.name}
                image={hospital.image}
              />
            );
          });
        })}
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-5 mt-14 mb-10 w-[100vw] gap-2 h-[19rem] overflow-x-scroll hospitalcontainer sm:grid-cols-1">
      {filteredHospitalData.map((hospital, index) => {
        return (
          <HospitalsCard
            key={index}
            name={hospital.name}
            image={hospital.images[0]?.imageLink}
          />
        );
      })}
    </div>
  );
}

export default HospitalCardSection;
