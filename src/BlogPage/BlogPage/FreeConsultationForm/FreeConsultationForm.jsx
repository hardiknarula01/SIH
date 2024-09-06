import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
function FreeConsultationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [medicalIssue, setMedicalIssue] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, phoneNumber, medicalIssue });
  };
  return (
    <Container
      sx={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "30px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        width: "400px",
        margin: "0 auto",
        height: "430px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontSize: "1.7rem",
          textAlign: "center",
          fontWeight: "bold",
          paddingBottom: "10px",
          color: "#e97132",
        }}
      >
        Book Appointment Now
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: "10px" }}>
          <TextField
            fullWidth
            label="Patient Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ marginBottom: "10px" }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ borderRadius: "30px" }}
            required
          />
        </Box>
        <Box sx={{ display: "flex", gap: 1, marginBottom: "10px" }}>
          <TextField
            label="+91"
            variant="outlined"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            placeholder="+91"
            required
            sx={{ flex: 1, borderRadius: "30px" }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            fullWidth
            sx={{ flex: 4, borderRadius: "30px" }}
          />
        </Box>
        <Box sx={{ marginBottom: "10px" }}>
          <TextField
            fullWidth
            label="Describe your Medical Issue"
            variant="outlined"
            multiline
            rows={2}
            value={medicalIssue}
            onChange={(e) => setMedicalIssue(e.target.value)}
            sx={{ borderRadius: "30px" }}
            required
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "45%",
              height: "45px",
              borderRadius: "15px",
              backgroundColor: "#e97132",
              "&:hover": {
                backgroundColor: "#e66900",
              },
              fontSize: "20px",
              textTransform: "capitalize",
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default FreeConsultationForm;
