import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { WhatsApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
function DoctorsCard({
  name,
  designation,
  exp,
  hospital,
  imagePath,
  whatsappLink,
}) {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 400,
          height: 220,
          margin: "auto",
          marginTop: 2,
          border: "1px solid #C0C0C0",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 2,
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          },
          cursor: "pointer",
        }}
      >
        <CardContent>
          <Link to={`/doctors/${name}`}>
            <Grid container spacing={2} alignItems="center">
              <Grid sx={{ width: "150px" }} item>
                <Avatar
                  alt={name}
                  src={imagePath}
                  sx={{ width: 90, height: 90, borderRadius: "20px" }}
                />
              </Grid>
              <Grid item xs>
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {designation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hospital}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Link to={"/appointment"}>
            <Button
              sx={{
                backgroundColor: "#e97132",
                color: "#fff",
                width: "70%",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#c35e28",
                },
              }}
              fullWidth
            >
              Request an appointment
            </Button>
          </Link>
          <Link to={'/appointment'}>
          <IconButton
            sx={{
              color: "#fff",
              bgcolor: "#25D366",
              "&:hover": {
                backgroundColor: "#1eac5b",
              },
            }}
          >
            <WhatsApp />
          </IconButton>
        </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default DoctorsCard;
