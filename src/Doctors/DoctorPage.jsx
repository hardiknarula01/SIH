import React, { useEffect, useState } from 'react'
import DoctorsCard from './sections/DoctorsCard';
import doctor from "../data/doctordata.json"
import DoctorAbout from './sections/DoctorAbout';
import DoctorQualification from './sections/DoctorQualification';
import Layout from '../Global/Layout/Layout';


import DoctorWorksAt from "./sections/DoctorWorksAt";
import DoctorTestimonials from './sections/DoctorsTestimonials';
import StickyForm from '../Treatments/Components/StickyForm';
import '../index.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const DoctorPage = () =>{

  const [data, setData] = useState(null);
  const {doctorName} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:9000/doctor/${doctorName}`)
    
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


    return(
        <Layout>

        <div className=" pt-32 ">
       <DoctorsCard doctor={data.doctor} />
        </div>
       <DoctorAbout doctor={data.doctor}/>
       <DoctorQualification doctor={data.doctor}/>  
        <div>
          <DoctorWorksAt doctor={data.doctor} />
        </div>
        {data.doctor.reviews.length > 0 && <div>
      <DoctorTestimonials testimonials={data.doctor.reviews} />
        </div>}
       <div className="show-form-mobile">
        <StickyForm />
       </div>
      </Layout>

    
        
    )
}
export default DoctorPage;