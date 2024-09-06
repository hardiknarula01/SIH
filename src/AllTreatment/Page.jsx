import React from 'react'
import TopBar from '../Global/Navbar/TopBar';
import Navbar from '../Global/Navbar/Navbar';
import Footer from '../Global/Footer/Footer';
import TreatmentCardSection from './Treatment/TreatmentCardSection'
import TreatmentComponent from './Components/TreatmentComponent'


function AllTreatment() {
    return (
        <>
        <TopBar />
        <Navbar />
        <div className='flex justify-center items-center w-[100vw]'>
            <TreatmentComponent />
        </div>
        <Footer/>
    </>
    )
}

export default AllTreatment