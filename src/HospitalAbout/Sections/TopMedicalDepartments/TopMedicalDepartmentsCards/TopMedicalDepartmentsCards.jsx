import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function TopMedicalDepartmentsCards({  name, link }) {
  return (
    <Card
      sx={{
        width: 150,
        height: 200,
        margin: 2,
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Link to={link} sx={{ height: "100%" }}>
      <CardActionArea to={link} sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "100%",
            padding: 2,
          }}
        >
          {/* <Box
            component="img"
            sx={{
              height: 120,
              width: 120,
              margin: "auto",
              border: "1px solid blue",
              padding: "10px"
            }}
            alt={name}
            src={`../../../Assets/${iconPath}.png`}
          /> */}
          <CardContent sx={{ paddingTop: 2 }}>
            <Typography variant="h6" component="div" align="center">
              {name}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
      </Link>
    </Card>
  );
}
