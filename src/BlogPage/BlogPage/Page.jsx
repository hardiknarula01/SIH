import React, { useEffect, useState } from 'react'
import TopBar from '../../Global/Navbar/TopBar'
import Navbar from '../../Global/Navbar/Navbar'
import img from '../../Assets/profile-2.png'

import Footer from '../../Global/Footer/Footer'
import './style.css'
import FreeConsultationForm from './FreeConsultationForm/FreeConsultationForm'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Page = () => {

    const {id} = useParams();

    const [data,setData] = useState({name:'myblog',description:'myBlog',authorID:{name:'author',LinkedInLink:'link'},date:'24-7-24'});

    const fetchData = async ()=>{
        try {
            const {data} = await axios.get(`http://localhost:9000/blog/${id}`)
            setData(data)
        } catch (error) {
            console.log('error fetching: ',error);
        }
    }

    useEffect(()=>{
       fetchData();
    },[])

  return (
    <div className='h-auto'>
        <TopBar/>
        <Navbar/>
        <div className=' blogheader w-[90vw] h-[70vh] mt-0 mb-0 ml-auto mr-auto p-2  border-b-2 border-[#121b3e8b]'>
            <div className='w-[75%] ml-auto mr-auto mt-[5%] text-[#121b3e] text-center'>
                <h1 className='text-5xl font-bold'>{data.name}</h1>
            </div>
            <div className='blogauthor ml-auto mr-auto w-[75%] h-[10vh] flex items-center border-b-4 border-t-4 border-[#121b3e] mt-[10%] p-2'>
                <div className='flex gap-[2%] items-center w-[50%]'>
                <img src={img} className='rounded-[50%]mt-[0.5%]'  />
                <p className='mt-[1%] text-2xl font-medium'>Blog is Written By <span className='font-extrabold text-[#121b3e]'>{data.authorID.name}</span></p>
                <p className='rounded-[50%] mt-[0.5%]'><a href={data.authorID.LinkedInLink}><img className='rounded-[50%]' src={img}/></a></p>
                </div>
                <div className='blogpublish w-[50%] flex justify-end items-center'>
                    <p className='text-2xl font-medium '>Published: <span>{data.date}</span></p>
                </div>
            </div>
           
            <div className='blogcontent flex justify-around gap-[2%]  mb-[5vh]'>
                <div className='main_blogcontent mr-auto ml-[5%]'>
                    <img src={img} className='w-[50%] h-[30vh] text-center ml-auto mr-auto'/>
                    <div>
                    <p className='text-2xl font-medium text-start mt-4 leading-loose'>
                    {data.description}
                    </p>
                    <p className='text-3xl font-bold mt-[5vh]'>Make sure to Follow us</p>
                    <div className='flex justify-center gap-[2vw] mt-[2%]'>
                    <img src={img} className='rounded-[50%] w-[50px] h-auto mt-[0.5%]'  />
                    <img src={img} className='rounded-[50%] w-[50px] h-auto mt-[0.5%]'  />
                    <img src={img} className='rounded-[50%] w-[50px] h-auto mt-[0.5%]'  />
                    <img src={img} className='rounded-[50%] w-[50px] h-auto mt-[0.5%]'  />
                    <img src={img} className='rounded-[50%] w-[50px] h-auto mt-[0.5%]'  />
                    </div>
                    </div>
                </div>
                <div className='mt-[10vh] mb-[2vh]'>
                
                <FreeConsultationForm/>
                </div>
            </div>
            </div>
            <div className='blogfooter'>

            <Footer/>
            </div>
    </div>
  )
}

export default Page
