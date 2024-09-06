import React, { useState, useRef } from "react";
import {
  Container,
  Stack,
  Typography,
  IconButton,
  useMediaQuery,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CountryCard from "./CountryCard";
import HospitalList from "./HospitalList";
import hospitalsData from "../../../data/hospitaldata.json";
import "../no-scroll.css";
import { useNavigate } from "react-router-dom";

const HospitalRecommendation = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hospitalData, setHospitalData] = useState(hospitalsData);
  const scrollRefCountries = useRef(null);
  const scrollRefHospitals = useRef(null);
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");
  const navigate = useNavigate();

  const scroll = (ref, scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  if (!hospitalData) {
    return <div>Loading...</div>;
  }

  const firstHospitals = hospitalsData.countries.map(
    (country) => country.hospitals[0]
  );

  const handleHospitalClick = (hospital) => {
    navigate(`/hospitals/${hospital}`)

  }
  return (
    <Container>
      <Typography
        variant="h3"
        sx={{
          marginTop: 4,
          color: "black",
          marginBottom: 4,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <p className="text-zinc-500">
          Explore <span className="text-sky-500">Hospitals by Country</span>
        </p>
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!isLargeScreen ? (
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
                "&::-webkit-scrollbar": { display: "none" },
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
                display: "flex",
                justifyContent: "center",
              }}
              ref={scrollRefCountries}
            >
              {hospitalData.countries.map((country) => (
                <Box key={country.name} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <CountryCard
                    country={country}
                    onSelect={setSelectedCountry}
                  />
                </Box>
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
          </>
        ) : (
          <Box className="grid-cols-1 md:grid-cols-4 hidden md:grid" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {hospitalData.countries.map((country) => (
              <Box key={country.name} sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 1 }}>
                <CountryCard
                  country={country}
                  onSelect={setSelectedCountry}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Typography
        variant="h4"
        sx={{
          marginTop: 4,
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
        }}
      >
        {selectedCountry ? `Hospitals in ${selectedCountry.name}` : "Hospitals"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={() => scroll(scrollRefHospitals, -320)}
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
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            display: "flex",
            justifyContent: "center",
          }}
          ref={scrollRefHospitals}
        >
          {(selectedCountry ? selectedCountry.hospitals : firstHospitals).map((hospital) => (
            <Box key={hospital.name} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} onClick = {() => handleHospitalClick(hospital.name)}>
              <HospitalList hospital={hospital}  />
            </Box>
          ))}
        </Stack>
        <IconButton
          onClick={() => scroll(scrollRefHospitals, 320)}
          sx={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "50%",
            marginRight: 2,
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default HospitalRecommendation;
