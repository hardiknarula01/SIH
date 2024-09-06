import React from "react";
import FeatureCard from "./FeatureCard";
import lowestPriceImg from "../../Assets/WhyChooseUs/Low_Cost.png";
import homeCountryImg from "../../Assets/WhyChooseUs/Home_Country.png";
import multiLingualImg from "../../Assets/WhyChooseUs/Multi-lingual.png";
import comprehensivePackagesImg from "../../Assets/WhyChooseUs/cp.png";
import Certification from "./Certification";
const featureData = [
  {
    descr:
      "Guaranteed lowest prices for all medical treatments. Find a lower quote? We'll match it",
    imgSrc: lowestPriceImg,
    title: "Lowest Price Guarantee",
  },
  {
    descr:
      "Our representatives are based in and provide support from your home country.",
    imgSrc: homeCountryImg,
    title: "Home Country Support",
  },
  {
    descr:
      "We provide a single point of contact in your language for all your needs, including hospital, airport and taxi",
    imgSrc: multiLingualImg,
    title: "Multi-lingual Relationship Managers",
  },
  {
    descr:
      "We provide comprehensive packages, ensuring a hassle-free experience with medical visa, travel, and accommodation.",
    imgSrc: comprehensivePackagesImg,
    title: "Comprehensive Package",
  },
];

const WhyChooseUs = () => {
  // return (
  //   <div className='flex flex-col justify-between items-center gap-12 mt-[40rem] mb-20'>
  //     <div className='flex text-3xl text-neutral-500 font-bold '>
  //       Why <h1 className='text-cyan-500'>&nbsp;Choose us</h1>
  //     </div>

  //     <div className='flex flex-col md:flex-row gap-6 flex-wrap items-start justify-center'>
  //       {featureData.map((item, index) => (
  //         <FeatureCard
  //           key={index}
  //           imgsrc={item.imgSrc}
  //           descr={item.descr}
  //           title={item.title}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col justify-between items-center gap-12 mt-[45rem] mb-20">
      <div className="flex text-4xl text-zinc-500 font-bold ">
        Why <h1 className="text-sky-500">&nbsp;Choose Us?</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {featureData.map((item, index) => (
          <FeatureCard
            key={index}
            imgsrc={item.imgSrc}
            descr={item.descr}
            title={item.title}
            className="basis-1/4 grow shrink-0 p-4" // updated class
          />
        ))}
      </div>
      <Certification />
    </div>
  );
};

export default WhyChooseUs;
