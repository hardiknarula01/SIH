import React from 'react'
import Navbar from '../Global/Navbar/Navbar'
import TopBar from '../Global/Navbar/TopBar'
import DoctorComponent from './section/DoctorComponents'
import Footer from '../Global/Footer/Footer'

const DoctorsPage = () => {
  return (
    <div>
        <TopBar/>
      <Navbar/>
      <div className='flex justify-center items-center w-[100vw]'>
            <DoctorComponent />
        </div>
        <Footer/>
    </div>
  )
}

export default DoctorsPage
