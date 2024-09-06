import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
function FindHospital({
  country,
  city,
  department,
  selectedCountry,
  selectedCity,
  selectedDepartment,
  handleCountryChange,
  handleCityChange,
  handleDepartmentChange,
  handleRefreshButton,
}) {
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
        <span style={{ color: "#28a2ed" }}>Hospitals</span>
      </Typography>
      <Box
        sx={{
          width: "73%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignSelf: "center",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid #aaaaaa",
          gap: 1,
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
            Country
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 300 }} size="small">
            <InputLabel sx={{ fontWeight: "medium", color: "#aaaaaa" }}>
              Select Country
            </InputLabel>
            <Select
              value={selectedCountry}
              onChange={handleCountryChange}
              label="Select Country"
              sx={{ borderRadius: "11px" }}
            >
              {country.map((country, index) => {
                if (country)
                  return (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  );
              })}
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
            City
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 300 }} size="small">
            <InputLabel sx={{ fontWeight: "medium", color: "#aaaaaa" }}>
              Select City
            </InputLabel>
            <Select
              value={selectedCity}
              onChange={handleCityChange}
              label="Select City"
              sx={{ borderRadius: "11px" }}
            >
              {city.map((city, index) => {
                if (city)
                  return (
                    <MenuItem key={index} value={city}>
                      {city}
                    </MenuItem>
                  );
              })}
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
            Department
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 300 }} size="small">
            <InputLabel sx={{ fontWeight: "medium", color: "#aaaaaa" }}>
              Select Department
            </InputLabel>
            <Select
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              label="Select Department"
              sx={{ borderRadius: "11px" }}
            >
              {department.map((dept, index) => {
                if (department)
                  return (
                    <MenuItem key={index} value={dept}>
                      {dept} Department
                    </MenuItem>
                  );
              })}
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
}

export default FindHospital;
