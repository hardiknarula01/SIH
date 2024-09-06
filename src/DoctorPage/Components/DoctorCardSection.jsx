import React from 'react';
// import TreatmentData from '../../data/treatmentdata.json';
// import cardIcon from '../../../Assets/Consmetic-surgery.png';
import DoctorCard from './DoctorCard';
// import './style.css'

function DoctorCardSection({data}) {
    return (
        <>

            <div className='grid lg:grid-cols-5 mt-14 mb-10 w-[100vw] gap-2 h-[19rem] overflow-x-scroll treatmentcontainer sm:grid-cols-1'>
                {data.map((data,index)=>{
                    return <DoctorCard key={index} data={data} />
                })}
            </div>

        </>
    );
}

export default DoctorCardSection;