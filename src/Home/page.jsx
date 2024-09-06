import React from "react";
import TopBar from "../Global/Navbar/TopBar";
import Navbar from "../Global/Navbar/Navbar";
import Footer from "../Global/Footer/Footer";

import BookAppointmentButton from "./Components/Buttons/StickyButton";
// import HeroSection from "./Components/Hero"; // local components from Home directory
import WhatsAppButton from "./Components/Buttons/WhatsappIcon";

import WhyChooseUs from "./Components/WhyChooseUs";
import HospitalRecommendation from "./Components/HospitalReccomender/HospitalReccomendation";
import Doctors from "./Components/Doctor/Doctors";
import HowWeWork from "./Components/HowWeWork";
import MedWander from "./Components/Service";
import MedicalAreaSelection from "./Components/MedicalAreaSelection/MedicalAreaSelection";
import ReviewList from "./Components/Reviews/ReviewList";
import FAQ from "./Components/Faq/FAQ";
import { useState } from "react";
import Certification from "./Components/Certification";
import HeroSection from "./Components/Hero";

const HomeNew = () => {
  const [isHeroSection, setIsHeroSection] = useState(true);
  return (
    <div>
      <TopBar transparent={isHeroSection} />
      <Navbar transparent={isHeroSection} showSearch={!isHeroSection} />
      <HeroSection setIsHeroSection={setIsHeroSection} />

      <BookAppointmentButton />
      <WhatsAppButton />

      <WhyChooseUs />
      {/* <About /> */}
      {/* <Certification /> */}

      <HowWeWork />
      <MedWander />

      <MedicalAreaSelection />
      <ReviewList />
      <FAQ />
      <HospitalRecommendation />
      <Doctors />
      <Footer />
    </div>
  );
};

export default HomeNew;
