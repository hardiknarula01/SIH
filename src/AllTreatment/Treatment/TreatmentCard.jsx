// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TreatmentCard.css'
function TreatmentCard({ treatmentName, imagePath, priceStart, priceEnd, _id, treatmentCountry }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/treatment/${treatmentName}/${treatmentCountry}`);
  };

  const handleBookNowClick = (e) => {
    e.stopPropagation();
    navigate('/appointment');
  };

  return (
    <div 
      className='container flex items-center flex-col border-[3px] border-[#d3d3d3] rounded-[15%] h-[16rem] justify-between shadow-sm w-[20rem] py-6 m-auto cursor-pointer' 
      onClick={handleCardClick}
    >
      <img alt="Treatment Icon" src={imagePath} className='w-[60px] h-[60px]' />
      <div className='text-[#28a2ed] font-[700] text-[1rem] text-center'>{treatmentName || 'Unknown Treatment'}</div>
      <div className='text-[#404040] font-[700] px-2 text-center'>
        <span className='text-[#7f7f7f] text-center'>Country-</span>{treatmentCountry || 'Not specified'}
      </div>
      <div className='text-[#7f7f7f] text-center'>
        Treatment Cost 
        <p className='font-[700]'>
          {priceStart ? `${priceStart}` : 'USD. 1000'} - {priceEnd ? `${priceEnd}` : 'USD. 1200'}
        </p>
      </div>
      <button 
        className='py-2 px-8 bg-[#e97132] text-[#ffffff] font-[600] rounded-[15px] pointer hover:bg-[#fff] hover:text-[#e97132] hover:border-2 hover:border-[#e97132] transition-all'
        onClick={handleBookNowClick}
      >
        Book Now
      </button>
    </div>
  );
}

export default TreatmentCard;