import React, { useRef, useState } from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../../../Assets/profile-1.png";
import profile2 from "../../../Assets/profile-2.png";
import profile3 from "../../../Assets/profile-3.png";
import profile4 from "../../../Assets/profile-4.png";
import { Box, Typography, Container, Stack, IconButton, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Doctors.css";
import CountryCard from "../HospitalReccomender/CountryCard";

const doctors = [
  {
    name: "USA",
    image: "images/usaliberty.jpg",
    doctors: [
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile2,
        name: "Dr. Jacob Jones",
        title: "Hematologist",
        stars: "4.8",
        reviews: "700",
      },
      {
        img: profile3,
        name: "Dr. Jenny Wilson",
        title: "Endocrinologist",
        stars: "4.7",
        reviews: "450",
      },
      {
        img: profile4,
        name: "Dr. Albert Flores",
        title: "Hematologist",
        stars: "4.8",
        reviews: "500",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
    ]
  },
  {
    name: "Canada",
    image: "./images/canada.jpg",
    doctors: [
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile2,
        name: "Dr. Jacob Jones",
        title: "Hematologist",
        stars: "4.8",
        reviews: "700",
      },
      {
        img: profile3,
        name: "Dr. Jenny Wilson",
        title: "Endocrinologist",
        stars: "4.7",
        reviews: "450",
      },
      {
        img: profile4,
        name: "Dr. Albert Flores",
        title: "Hematologist",
        stars: "4.8",
        reviews: "500",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
    ]
  },
  {
    name: "UK",
    image: "./images/uk.jpg",
    doctors: [
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile2,
        name: "Dr. Jacob Jones",
        title: "Hematologist",
        stars: "4.8",
        reviews: "700",
      },
      {
        img: profile3,
        name: "Dr. Jenny Wilson",
        title: "Endocrinologist",
        stars: "4.7",
        reviews: "450",
      },
      {
        img: profile4,
        name: "Dr. Albert Flores",
        title: "Hematologist",
        stars: "4.8",
        reviews: "500",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
    ]
  },
  {
    name: "India",
    image: "./images/taj.jpg",
    doctors: [
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile2,
        name: "Dr. Jacob Jones",
        title: "Hematologist",
        stars: "4.8",
        reviews: "700",
      },
      {
        img: profile3,
        name: "Dr. Jenny Wilson",
        title: "Endocrinologist",
        stars: "4.7",
        reviews: "450",
      },
      {
        img: profile4,
        name: "Dr. Albert Flores",
        title: "Hematologist",
        stars: "4.8",
        reviews: "500",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
      {
        img: profile1,
        name: "Dr. Kathryn Murphy",
        title: "General Surgeon",
        stars: "4.9",
        reviews: "1800",
      },
    ]
  },

];

function Doctors() {
  const scrollRef = useRef(null);
  const [doctorsData, setDoctorsData] = useState(doctors)
  const [doctorsByCountry, setDoctorsByCountry] = useState(doctors[0].doctors)
  const [selectedCountry, setSelectedCountry] = useState(doctors[0].name);
  const scrollRefCountries = useRef(null);
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Box className="doctor-section bg-white py-8 relative" id="doctors">
      <Container maxWidth="lg">
        <Box className="dt-title-content mb-16 text-center">
          <Typography variant="h3" component="h3" marginBottom={"10px"} className="font-bold ">
            <span className="mb-4 font-bold text-zinc-500">Meet <span className="text-sky-500"> Our Doctors</span></span>
          </Typography>

          <Typography
            variant="body1"
            className="dt-description  text-gray-700 "
          >
            Meet our exceptional team of specialist doctors, dedicated to
            providing top-notch healthcare services at Health Plus. Trust in
            their knowledge and experience to lead you towards a healthier and
            happier life.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",

            flexDirection: "column"

          }}
        >{!isLargeScreen ?

          <>
            <IconButton
              onClick={() => scroll(scrollRefCountries, -320)}
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
                marginLeft: 2,
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </IconButton>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                overflowX: "auto",
                flexGrow: 1,
                mx: 2,
                "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome, Safari, and Opera
                "-ms-overflow-style": "none", // Hide scrollbar for IE and Edge
                "scrollbar-width": "none", // Hide scrollbar for Firefox
              }}
              ref={scrollRefCountries}
            >

              {doctorsData.map((country) => (
                <CountryCard
                  key={country.name}
                  country={country}
                  onSelect={setSelectedCountry}
                />
              ))}

            </Stack>
            <IconButton
              onClick={() => scroll(scrollRefCountries, 320)}

              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
                marginRight: 2,
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </IconButton>
          </> :

          <div className=" grid-cols-1 md:grid-cols-4 hidden md:grid">

            {doctorsData.map((country) => (
              <CountryCard
                key={country.name}
                country={country}
                onSelect={setSelectedCountry}
              />
            ))}
          </div>
          }

          <Typography
            variant="h4"
            sx={{
              marginTop: 4,
              fontWeight: "bold",
              textAlign: "center",
              color: "black",
            }}
          >
            Doctors {doctorsData ? `in ${selectedCountry.name}` : ""}
          </Typography>
          <Box className="flex items-center">
            <IconButton
              onClick={() => scroll(-320)}
              color="primary"
              className=" h-9 w-9 bg-gray-900 rounded-full"
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
                marginLeft: 2,
                zIndex: 10,
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </IconButton>

            <Box
              className="dt-cards-content overflow-x-auto relative  p-2"
              sx={{ whiteSpace: "nowrap", position: "relative" }}
              ref={scrollRef}
            >
              <Stack direction="row" spacing={2}>
                {doctorsByCountry.map((doctor, index) => (
                  <Box key={index} className="inline-block">
                    <DoctorCard
                      img={doctor.img}
                      name={doctor.name}
                      title={doctor.title}
                      stars={doctor.stars}
                      reviews={doctor.reviews}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>

            <IconButton
              onClick={() => scroll(320)}
              className=" h-9 w-9 bg-gray-900 rounded-full"
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
                marginLeft: 2,
                zIndex: 10,
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Doctors;