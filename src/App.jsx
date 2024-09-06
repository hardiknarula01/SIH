import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Global/Layout/Layout";
import Appointment from "./Global/ContactUsForm/Appointment";
import HomeNew from "./Home/page";
import AllTreatment from "./AllTreatment/Page"
import Hospital from "./AllHospital/Page";
import SingleTreatmentPage from "./Treatments/SingleTreatmentPage";
import DoctorPage from "./Doctors/DoctorPage";
import DoctorsPage from "./DoctorPage/page";
import HospitalAbout from './HospitalAbout/HospitalAbout';
import BlogDefault from "./BlogPage/Blogs/BlogDefault";
import Page from "./BlogPage/BlogPage/Page";
import Legal from "./Global/Footer/Legal/Legal";
import EditorialPolicy from "./Global/Footer/editorialPolicy/EditorialPolicy";
import NotFound from "./Global/NotFound";

function App() {
  return (
    <div className="App">
      <Router basename="/MedWander/">
        <Routes>
          <Route path="/" element={<Layout />} />

          <Route path="/appointment" element={<Appointment />} />

          <Route index element={< HomeNew />} />
          <Route path="/treatment" element={<AllTreatment />} />
          <Route path="/hospitals" element={<Hospital />} />
          <Route path="/treatment/:treatmentName/:treatmentCountry" element={<SingleTreatmentPage />} />




          
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:doctorName" element={<DoctorPage />} />
          <Route path="/hospitals/:hospitalName" element={<HospitalAbout />} />
          <Route path="/defaultblog" element={<BlogDefault />} />
          <Route path="/blogs/:id" element={<Page />} />

          <Route path="/legal" element={<Legal />} />
          <Route path="/contentpolicy" element={<EditorialPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
