import React from "react";
import TopBar from '../Global/Navbar/TopBar';
import Navbar from '../Global/Navbar/Navbar';
import Footer from '../Global/Footer/Footer';
import HospitalsComponent from "./Components/HospitalComponent";
import { WhatsappIconComponent } from "../Global/WhatsappIcon";

function AllTreatment() {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-10">
        <TopBar />
        <Navbar />
      </div>
      <div className="flex justify-center items-center">
        <HospitalsComponent />
      </div>
      <Footer/>
      <WhatsappIconComponent/>
    </>
  );
}

export default AllTreatment;
