import React, { useEffect, useState } from 'react'
import CostInIndia from './sections/CostInIndia'
import AboutTreatment from './sections/AboutTreatment'
import CostOfTreatment from './sections/CostOfTreatment'
import ReviewList from './sections/Reviews/ReviewList'
import TopHospitals from './sections/TopHospital/TopHospitals'
import TopDoctors from './sections/TopDoctors/TopDoctors'
import axios from "axios"
import { useParams } from 'react-router-dom'
import TopBar from '../Global/Navbar/TopBar';
import Navbar from '../Global/Navbar/Navbar';
import Footer from '../Global/Footer/Footer';

const SingleTreatmentPage = () => {

  const [data, setData] = useState(null);
  const { treatmentName, treatmentCountry } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:9000/treatment/${treatmentName}/${treatmentCountry}`)

      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <>
    <TopBar/ >
    <Navbar />
      <div className=' flex flex-col m-6 gap-y-12 mt-[2rem]'>
        <CostInIndia data={data} />
        <AboutTreatment data={data} />
        <TopDoctors data={data} />
        <TopHospitals data={data} />
        <CostOfTreatment data={data} />
        <ReviewList />
      </div>
      <Footer/>
    </>

  )
}

export default SingleTreatmentPage