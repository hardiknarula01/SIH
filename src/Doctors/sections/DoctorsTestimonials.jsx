import {React,useState} from 'react';
import './DoctorsTestimonials.css'
import { IoIosStar,IoIosStarOutline } from "react-icons/io";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
          ❝ {isReadMore ? text.slice(0, 100) : text} ❞
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "blue",cursor:"pointer" }}
            >
                {isReadMore ? "...Read More" : " Show less"}
            </span>
        </p>
    );
};

const DoctorTestimonial = ({ name, location, testimonial, rating, initials }) => {
  return (
    <>
     <div className="testimonial__card">
     <div class="triangle"></div>
    <div className="testimonial">
      <div className="quote">
        <ReadMore>{testimonial}</ReadMore>
      </div>
      <div className="author">
        <div className="initials">{initials}</div>
        <div className="info">
          <p className="name">{name}</p>
          <p className="location">{location}</p>
        </div>
      </div>
      <div className="rating">
        {[...Array(rating)].map((_, i) => (
         <IoIosStar  />
        ))}
        {rating<5 && 
            [...Array(5-rating)].map((_, i) => (
         <IoIosStarOutline  />
        ))
        }
      </div>
    </div>
     </div>
    </>
  );
};

const DoctorTestimonials = ({testimonials}) => {
  // const testimonials = [
  //   {
  //     name: 'Aristotles De Almeida',
  //     location: 'Namibia',
  //     testimonial: 'My son was born with a hearing problem, that’s why we came to India for his treatment, and we are so relieved to be leaving.',
  //     rating: 5,
  //     initials: 'AD',
  //   },
  //   {
  //     name: 'Sabato Dennis',
  //     location: 'Liberia',
  //     testimonial: 'Medanta Hospital was awesome; I went there for my cardiac treatment, and they treated me very well. Thanks a lot to them.',
  //     rating: 5,
  //     initials: 'SD',
  //   },
  //   {
  //     name: 'Barbier Marie Noelle',
  //     location: 'Mauritius',
  //     testimonial: 'Huge thanks to Medanta Hospital for my wife’s cardiac treatment. My experience with this hospital was very positive.',
  //     rating: 4,
  //     initials: 'BM',
  //   },
  // ];

  return (
    <>
    <div className="testimonials-container">
      <h2 className="testimonials__container__title">Doctor's Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <DoctorTestimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
    </>
  );
};

export default DoctorTestimonials;