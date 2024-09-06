import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    IconButton
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import RefreshIcon from "@mui/icons-material/Refresh";

  
  const FindDoctor = ({
    countries,
    cities,
    departments,
    selectedCountry,
    selectedCity,
    selectedDepratment,
    onCountryChange,
    onCityChange,
    onDepartmentChange,
    handleRefreshButton,
  }) => {
    return (
      <Box
        sx={{
          width: "100%",
          paddingY: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="medium"
          mb={5}
          gutterBottom
        >
          <span style={{ color: "#838383" }}>Find</span>{" "}
          <span style={{ color: "#28a2ed" }}>Doctors</span>
        </Typography>
        <Box
          sx={{
            width: "fit",
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            border: "1px solid #aaaaaa",
            paddingY: 2,
            paddingX: 3,
            borderRadius: "13px",
          }}
        >
          <Box>
            <Typography
              sx={{
                ml: "10px",
                fontWeight: "medium",
                color: "#838383",
                fontSize: "18px",
              }}
            >
              Select Country
            </Typography>
            <FormControl variant="outlined" sx={{ minWidth: 400 }} size="small">
              <InputLabel sx={{ fontWeight: "medium", color: "#aaaaaa" }}>
                Select Country
              </InputLabel>
              <Select
                onChange={onCountryChange}
                value={selectedCountry}
                label="Select Country"
                sx={{ borderRadius: "11px" }}
              >
                {countries.map((country, index) => (
                <MenuItem key={index} value={country}>
                  {country}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ borderLeft: "2px dotted #aaaaaa", height: "auto", mx: 2 }} />
          <Box>
            <Typography
              sx={{
                ml: "10px",
                fontWeight: "medium",
                color: "#838383",
                fontSize: "18px",
              }}
            >
              Select City
            </Typography>
            <FormControl variant="outlined" sx={{ minWidth: 400 }} size="small">
              <InputLabel sx={{ fontWeight: "medium", color: "#aaaaaa" }}>
                Select City
              </InputLabel>
              <Select
                value={selectedCity}
                onChange={onCityChange}
                label="Select City"
                sx={{ borderRadius: "11px" }}
              >
                {cities.map((city, index) => (
                  <MenuItem value={city} key={index}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ borderLeft: "2px dotted #aaaaaa", height: "auto", mx: 2 }} />
          <Box>
            <Typography
              sx={{
                ml: "10px",
                fontWeight: "medium",
                color: "#838383",
                fontSize: "18px",
              }}
            >
              Select Department
            </Typography>
            <FormControl variant="outlined" sx={{ minWidth: 400 }} size="small">
              <InputLabel sx={{ fontWeight: "medium", color: "#aaaaaa" }}>
                Select Department
              </InputLabel>
              <Select
                value={selectedDepratment}
                onChange={onDepartmentChange}
                label="Select Country"
                sx={{ borderRadius: "11px" }}
              >
                {departments.map((dept, index) => (
                  <MenuItem key={index} value={dept}>
                    {dept}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            mx: 2,
          }}
        >
          <IconButton
            sx={{ alignSelf: "center", border: "1px solid black" }}
            onClick={handleRefreshButton}
          >
            <RefreshIcon />
          </IconButton>
        </Box>
        </Box>
      </Box>
    );
  };
  
  export default FindDoctor;
  