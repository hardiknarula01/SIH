
import React, { useState } from 'react';
import './StickyForm.css'
import axios from "axios";

const StickyForm = ({procedure}) => {
    console.log(procedure);
    const [patientName, setPatientName] = useState('');
    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [medicalIssue, setMedicalIssue] = useState('');
    // const [department]

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted:", { patientName, email, phoneNumber, medicalIssue });
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const data = await axios.post(
            "http://localhost:9000/user/userform",
            { patientName, email, phoneNumber, medicalIssue },
            config
          );
    
          console.log("submited: ",data);
        } catch (error) {
          console.log(error.message);
        }
      };
    return (
        <div className='flex flex-col gap-3 bg-white border-2 rounded-xl shadow-md p-6 basis-3/12 fixed z-10 top-124 right-14 sticky-responsive' style={{width: "25%"}}>
            <div className="font-semibold text-2xl text-[#e97132] text-center">{procedure}</div>
            
            <input 
                className='border-2 rounded-2xl mx-6 p-2'
                placeholder='Patient name'
                type='text'
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
            />

            <input 
                className='border-2 rounded-2xl mx-6 p-2'
                placeholder='Email' 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className='flex'>
                <input 
                    className='border-2 rounded-2xl ml-6 p-1 mr-1 w-14 text-center'
                    placeholder='+91'
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                />

                <input 
                    className='border-2 rounded-2xl mr-6 p-2 ml-1 w-fit'
                    placeholder='Number'
                    type='text'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            <input 
                className='border-2 rounded-2xl mx-6 p-2'
                placeholder='Describe your medical issue'
                value={medicalIssue}
                onChange={(e) => setMedicalIssue(e.target.value)}
            />

            <button onClick={handleSubmit} className='bg-[#e97132] p-3 text-white rounded-xl mx-6 text-lg font-semibold'>Get Free Consultation</button>
        </div>
    );
}

export default StickyForm;
