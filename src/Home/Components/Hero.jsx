import React, { useState, useEffect } from "react";
import ConsultationForm from "./Form";
import arrow from "../../Assets/down-arrow.png";
import home_vid from "../../Assets/bg-video.mp4";
import Typewriter from "typewriter-effect";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
// import home_vid from "../../../Assets/bg-video.mp4";
const mockResults = [
  "Doctor John Doe",
  "Doctor Jane Smith",
  "Doctor Robert Brown",
  "Treatment for Flu",
  "Treatment for COVID-19",
  "Treatment for Diabetes",
  "Best Hospitals in New York",
  "Hospitals with MRI Facilities",
  "Hospitals with Emergency Services"
];
const HeroSection = ({ setIsHeroSection }) => {
  const [isInView, setIsInView] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // adjust the value to your hero section height
        setIsInView(false);
      } else {
        setIsInView(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsHeroSection(isInView);
  }, [isInView]);

  const [one, setOne] = useState(false);

  const handleOne = () => {
    setOne(true);
  };

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (searchInput) {
        try {
          const response = await axios.get(`http://localhost:9000/home/search/?search=${searchInput}`);
          const data = response.data;
          console.log(data);

          if (data) {
            const treatments = data.treatments.map(treatment => ({ type: 'treatment', name: treatment.treatment, country:treatment.country }));
            const doctors = data.doctors.map(doctor => ({ type: 'doctor', name: doctor.name }));
            const hospitals = data.hospitals.map(hospital => ({ type: 'hospital', name: hospital.name }));


            const combinedList = [
              ...treatments,
              ...doctors,
              ...hospitals
            ];

            console.log(combinedList);
            setSearchResults(combinedList);
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);


  const handleOption = (result) => {
    if (result.type === 'treatment') {
      console.log(`Navigating to treatment link for ${result.name}`);
      navigate(`/treatment/${result.name}/${result.country}`);
    } else if (result.type === 'hospital'){
      
      console.log(`Handling other type: ${result.type} for ${result.name}`);
      navigate(`/hospitals/${result.name}`);
    }
    else
    {
      console.log(`Handling other type: ${result.type} for ${result.name}`);
      navigate(`/doctors/${result.name}`);
    }
  };


  return (
    <div className={`w-full h-screen top-0 absolute`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={home_vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col pt-24 items-center justify-center w-full h-full bg-black bg-opacity-50 text-white">
        {/* Your hero content here */}
        <div className="text-center my-8">
          <h1 className="text-4xl md:text-5xl mb-2 font-semibold">
            Your partner for safe and affordable medical treatments
          </h1>
          <h1 className="text-4xl md:text-5xl font-semibold">
            <Typewriter
              options={{
                strings: [
                  "in India",
                  "in Turkey",
                  "in Thailand",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>
          {/* <p className="text-md md:text-xl font-semibold mt-6">
            MedWander simplifies your medical travel with personalized
            assistance from beginning to end
          </p> */}
        </div>

        <div className="w-4/5 md:w-3/5 lg:w-1/3 mx-auto mt-24">
          <div className="bg-white border-2 border-neutral-400 px-6 py-4 rounded-full flex items-center shadow-lg relative">
            <input
              className="flex-grow outline-none text-gray-700"
              placeholder="Search Doctors, Treatments, Hospitals"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 text-gray-700 ml-4"
            >
              <path
                fill="#231f20"
                d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
              ></path>
              <path
                fill="#231f20"
                d="M322.36,58.4c-68.1-73-182.91-77-255.92-8.91A181.08,181.08,0,0,0,307.87,319.32q2.84-2.43,5.59-5c1.84-1.71,3.63-3.46,5.38-5.23A181.08,181.08,0,0,0,322.36,58.4Zm14.73,128.7a147.21,147.21,0,0,1-147,142.1q-2.61,0-5.19-.1A146.89,146.89,0,1,1,337.09,187.1Z"
              ></path>
              <path
                fill="#231f20"
                d="M510.9,487.81l-99.66-81.47a35.63,35.63,0,0,0-50.09,5.37L325.24,479.27a35.63,35.63,0,0,0,5.37,50.09l99.66,81.47A35.63,35.63,0,0,0,480.36,605.2l36.91-44.57a35.63,35.63,0,0,0-6.37-50.09Zm-36.91,44.57-36.91,44.57a12.23,12.23,0,0,1-17.21,1.84L320.23,507.94a12.23,12.23,0,0,1-1.84-17.21l36.91-44.57a12.23,12.23,0,0,1,17.21-1.84L466,470.44A12.23,12.23,0,0,1,474,487.3Z"
              ></path>
            </svg>
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-neutral-400 rounded-lg mt-1 z-10 text-black">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleOption(result)}
                  >
                    {`${result.name} (${result.type})`}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        <div className="flex flex-col items-center mt-10 md:mt-20">
          {!one && (
            <div className="flex flex-col items-center">
              {" "}
              {/* Added 'flex-col' and 'items-center' classes */}
              <button
                className="bg-[#ec7636] border-2 border-white text-white rounded-3xl py-2 px-4 md:p-4 text-lg md:text-xl font-semibold"
                onClick={handleOne}
              >
                Book Free Consultation
              </button>
              <div className="mt-2">
                {" "}
                {/* Added margin top for spacing */}
                <img src={arrow} className="w-20 h-20" alt="Down Arrow" />
              </div>
            </div>
          )}

          {one && <ConsultationForm />}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
