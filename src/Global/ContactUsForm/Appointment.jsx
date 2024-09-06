import React from "react";
import AppointmentForm from "./AppointmentForm";
import Navbar from "../Navbar/Navbar";
import TopBar from "../Navbar/TopBar";

function Appointment() {

  return <>
    <TopBar />
    <Navbar />
    <AppointmentForm />;
  </>
}

export default Appointment;
