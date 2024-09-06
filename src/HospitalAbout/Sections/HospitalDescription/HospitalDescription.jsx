import React from "react";

const HospitalDescription = ({ hospital }) => {
  return (
    <>
      <div className="details w-[65vw] mt-8 p-4 h-[80vh] ml-6 flex flex-col justify-around items-center">
        <div className="description w-[100%]">
          <h1 className="font-semibold text-3xl text-[#28a2ed] ml-4 mb-4">
            About {hospital?.name} :{" "}
          </h1>
          <ul className="text-black text-xl list-disc flex flex-col gap-6 ml-9 text-wrap font-medium">
            {hospital?.description?.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>

        <div className="teamAndSpecialties w-[100%] mb-5  ">
          <h1 className="font-semibold text3xl text-[#28a2ed] ml-4 text-3xl my-4">
            Facilities:
          </h1>
          {hospital?.facilityDetails?.map((facility, index) => (
            <ul className="text-black text-xl list-disc flex flex-col gap-6 ml-9 text-wrap font-medium">
              <h4
                key={index}
                className="font-semibold text-2xl text-[#28a2ed] ml-4 mb-4"
              >
                {" "}
                {facility.facilityType}
              </h4>
              {facility.facilities.map((facilities, index) => (
                <div
                  key={index}
                  className=" flex flex-row gap-1 ml-9  font-medium w-full"
                >
                  <li key={index}>{facilities}</li>
                </div>
              ))}
            </ul>
          ))}
        </div>
        <div className="teamAndSpecialties w-[100%]  mb-5  ">
          <h1 className="font-semibold text3xl text-[#28a2ed] ml-4 text-3xl my-4">
            Infrastructure:
          </h1>
          <ul className="text-black text-xl list-disc flex flex-col gap-6 ml-9 text-wrap font-medium">
            {hospital?.infrastructure?.map((infrastructure, index) => (
              <li key={index}>{infrastructure}</li>
            ))}
          </ul>
        </div>
        <div className="teamAndSpecialties w-[100%]   ">
          <h1 className="font-semibold text3xl text-[#28a2ed] ml-4 text-3xl my-4">
            Locations Detail:
          </h1>
          <ul className="text-black text-xl list-disc flex flex-col gap-6 ml-9 text-wrap font-medium">
            {hospital?.locationDetails?.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
        {/* <div className="teamAndSpecialties w-[100%]   ">
          <h1 className="font-semibold text3xl text-[#28a2ed] ml-4 text-3xl my-4">
            Team and Specialties:
          </h1>
          <ul className="text-black text-xl list-disc flex flex-col gap-6 ml-9 text-wrap font-medium">
            <li>
              Experienced and renowned doctors in Cardiac Sciences (Cardiology &
              Cardio-thoracic Surgery) and Neurological Sciences (Neurology &
              Neuro-surgery).
            </li>
            <li>
              Cardiology team achieved a 99.6% success rate in cardiac bypass
              surgeries amongst which 91% were beating heart surgeries.
            </li>
            <li>
              Transplant team completed over 500 Liver transplants in Feb, 2011.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default HospitalDescription;
