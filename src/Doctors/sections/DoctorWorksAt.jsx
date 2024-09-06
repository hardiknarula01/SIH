import React, { useState } from 'react';
import './DoctorWorksAt.css';
import StickyForm from '../../Treatments/Components/StickyForm';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  return (
      <p className="text">
       {isReadMore ? <><div className='overflow-show'>{text.slice(0, 50)}  <span
              onClick={toggleReadMore}
              className="read-or-hide"
              style={{ color: "#ff7a00",cursor:"pointer" }}
          >
              {isReadMore ? "...Read More" : " Show less"}
          </span></div><div className='overflow-show-lap'>{text}  <span
              onClick={toggleReadMore}
              className="read-or-hide"
              style={{ color: "#ff7a00",cursor:"pointer" }}
          >
              {isReadMore ? "...Read More" : " Show less"}
          </span></div></>  : <div className='overflow'>{text} <span
              onClick={toggleReadMore}
              className="read-or-hide"
              style={{ color: "#ff7a00",cursor:"pointer" }}
          >
              {isReadMore ? "...Read More" : " Show less"}
          </span></div>}


      </p>
  );
};

// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };

//   return (
//     <p className="text">
//       {isReadMore ? text.slice(0, 100) : text}
//       <span
//         onClick={toggleReadMore}
//         className="read-or-hide"
//         style={{ color: "#ff7a00", cursor: "pointer" }}
//       >
//         {isReadMore ? "...Read More" : " Show Less"}
//       </span>
//     </p>
//   );
// };
const HospitalInfo = ({ data }) => {

  return (
    <>

      <div className="hospital-info">
        <p className='hospital__info__heading'>The Doctor Works at</p>
        <Link to= {`/hospitals/${data.name}`}>
        <div className="hospital__info__content">
          <p className='hospital__info__content__heading'>{data.name}</p>
          <div className="hospital__info__details">
            <div className="image-container">
              {/* "https://d1ea147o02h74h.cloudfront.net/hospitals/medanta-opd.jpg" */}
              <img src={data.images[0].imageLink} alt={data.images[0].title} />
            </div>
            <div className="hospital-details">

              <div className="location__details__info">
                <div className="location-details">
                  <FaMapMarkerAlt color='#46B7D9' />
                  <span>{data.address}</span>
                </div>
                <div className="location-details">
          <MdLocalHospital color='#46B7D9'/>
          <span>{data.specialities.length > 50 ? `${data.specialities.slice(0, 50)}...` : data.specialities}</span>
        </div> 

                <div className="location-details">
                  <FaBed color='#46B7D9' />
                  {/* <span>{data.location.beds} Beds</span> */}
                </div>
              </div>
              {/* <p className='works__at__content'>
          <ReadMore>
          {data.description}
         </ReadMore>
        </p> */}

              <p className='works__at__content'>
                <ReadMore>
                  {data.description}
                </ReadMore>
              </p>
              <Link to="/appointment">
              <button className="contact-button">Contact</button>
              </Link>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

const DoctorWorksAt = ({ doctor }) => {
  const [isIconHovered, setIsIconHovered] = useState(false);
  console.log("In doc works at", doctor);

  const handleIconHover = () => {
    setIsIconHovered(true);
  };

  const handleIconLeave = () => {
    setIsIconHovered(false);
  };
  return (

    <div className="content-container">
      <HospitalInfo data={doctor.hospitalID} />
      {/* <div className="icon-container" onMouseOver={handleIconHover} onMouseLeave={handleIconLeave}>
        <FaWpforms color='white' size={50} />
      </div>
      {isIconHovered && (
        <div className="sticky-form-container">
          <StickyForm />
        </div>
      )} */}
      <div className="show-form">
        <StickyForm />
      </div>
    </div>

  );
};

export default DoctorWorksAt;
