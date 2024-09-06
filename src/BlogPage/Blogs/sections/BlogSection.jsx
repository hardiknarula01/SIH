import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../Components/BlogCard";
import axios from "axios";
const BlogSection = () => {
  const [dataByType, setDataByType] = useState([]);
  const [healthcareData, setHealthCareData] = useState([]);
  const [treatmentsData, setTreatmentsData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [sections, setSections] = useState([
    { title: "Healthcare", data: [] },
    { title: "Treatments", data: [] },
    { title: "Doctors", data: [] },
    { title: "News", data: [] },
  ]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:9000/blog/topBlogsByType"
      );
      console.log("type", data);
      setDataByType(data);
      const healthcareDataList = data.filter((d) => {
        if (d.type === "Healthcare") return d;
      });
      const healthcare = healthcareDataList[0].blog.map((d) => d);
      setHealthCareData(healthcare);
      const treatmentsDataList = data.filter((d) => {
        if (d.type === "Treatments") return d;
      });
      const treatments = treatmentsDataList[0].blog.map((d) => d);
      setTreatmentsData(treatments);
      setSections((prevSections) =>
        prevSections.map((section) => {
          if (section.title === "Healthcare") {
            return { ...section, data: healthcare };
          } else if (section.title === "Treatments") {
            return { ...section, data: treatments };
          }
          return section;
        })
      );
    } catch (error) {
      console.log("error fetching: ", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("Sections: ", sections);
  }, []);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} text-black`}
        style={{ ...style, display: "block", right: 10 }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} text-black`}
        style={{ ...style, display: "block", left: 10, zIndex: 1 }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const sampleCardGridData = [
  //   {
  //     image: "https://dummyimage.com/700x400/0000ff/fff",
  //     title: "Title 1",
  //     description: "Description 1",
  //     author: "Author 1",
  //     date: "Date 1",
  //   },
  //   {
  //     image: "https://dummyimage.com/700x400/0000ff/fff",
  //     title: "Title 2",
  //     description: "Description 2",
  //     author: "Author 2",
  //     date: "Date 2",
  //   },
  //   {
  //     image: "https://dummyimage.com/700x400/0000ff/fff",
  //     title: "Title 3",
  //     description: "Description 3",
  //     author: "Author 3",
  //     date: "Date 3",
  //   },
  //   {
  //     image: "https://dummyimage.com/700x400/0000ff/fff",
  //     title: "Title 4",
  //     description: "Description 4",
  //     author: "Author 4",
  //     date: "Date 4",
  //   },
  //   {
  //     image: "https://dummyimage.com/700x400/0000ff/fff",
  //     title: "Title 5",
  //     description: "Description 5",
  //     author: "Author 5",
  //     date: "Date 5",
  //   },
  //   {
  //     image: "https://dummyimage.com/700x400/0000ff/fff",
  //     title: "Title 6",
  //     description: "Description 6",
  //     author: "Author 6",
  //     date: "Date 6",
  //   },
  // ];
  return (
    <div className="mt-5 w-9/12 m-auto">
      {sections.map((section, index) => {
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {section.title}
            </h2>
            <Slider {...settings}>
              {section.data.map((card, idx) => (
                <div key={idx} className="p-2">
                  <BlogCard data={card} />
                </div>
              ))}
            </Slider>
          </div>
        );
      })}
    </div>
  );
};
export default BlogSection;
