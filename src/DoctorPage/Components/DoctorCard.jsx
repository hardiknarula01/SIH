import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';


function DoctorCard({data}) {

 


  const navigate = useNavigate();
  return (
    <div className='flex items-center flex-col border-[3px] border-[#d3d3d3] rounded-[15%] h-[18rem] justify-between shadow-sm w-[15rem] py-6 m-auto'>
      <Link to={`/doctors/${data.name}`}>
      <img alt="Docs img" src={data.avatar} className='w-[60px] h-[60px]' />
      <div className='text-[#28a2ed] font-[700] text-[1rem] text-center'>{data.name}</div>
      <div className='text-[#404040] font-[700] px-2 text-center'>
       <span className='text-[#7f7f7f] text-center'></span>{data.exp}</div>
      <div className='text-[#7f7f7f] text-center'>
      <p className='font-bold text-black'>{data.position}</p>
        <p className='font-[700]'>{data.hospitalName}</p>
      </div>
      </Link>
      <button className='py-2 px-8 bg-[#e97132] text-[#ffffff] font-[600] rounded-[15px] pointer  hover:bg-[#fff] hover:text-[#e97132] hover:border-2 hover:border-[#e97132] transition-all'
      onClick={(e)=>{
        e.stopPropagation();
        navigate('/appointment')
      }}
      >Book Now</button>
    </div>
  );
}

export default DoctorCard;
