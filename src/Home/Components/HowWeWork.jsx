import React from "react";
import registerImage from "../../Assets/register.png";
import doWork from "../../Assets/doWork.png";
import treatment from "../../Assets/treatmentService.png";
import img1 from "../../Assets/How_we_work/No 1.png";
import img2 from "../../Assets/How_we_work/No 2.png";
import img3 from "../../Assets/How_we_work/No 3.png";
import img4 from "../../Assets/How_we_work/No 4.png";
import img5 from "../../Assets/How_we_work/No 5.png";
import img6 from "../../Assets/How_we_work/No 6.png";

const HowWeWork = () => {
  return (
    <div className="pt-0 ">
      <div className="  ">
        <p className="text-center mb-10 text-4xl">
          <span className="text-zinc-500 font-bold "> How Does</span>{" "}
          <span className="text-sky-500 font-bold ">it Work?</span>
        </p>

        <div className=" grid gap-1  md:grid-cols-2 lg:grid-cols-3 text-zinc-500  md:text-lg">
          <div className="flex flex-col items-center md:flex-row  ">
            <img
              src={img1}
              alt="Register"
              className="w-32 h-32 md:w-48 md:h-60"
            />
            <p className=" ml-0 mt-2 text-center md:mb-4 md:mt-0 md:text-left">
              You submit a request and specify an issue
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row ">
            <img
              src={img2}
              alt="Do Work"
              className="w-32 h-32 md:w-48 md:h-60"
            />
            <p className=" ml-0 mt-2 text-center md:mb-4 md:mt-0 md:text-left">
              MedWander team studies your request and contacts you
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row ">
            <img
              src={img3}
              alt="Treatment Service"
              className="w-32 h-32 md:w-48 md:h-60"
            />
            <p className=" ml-0 mt-2 text-center md:mb-4 md:mt-0 md:text-left">
              We choose the best hospital and specialist for your case
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row ">
            <img
              src={img4}
              alt="Register"
              className="w-32 h-32 md:w-48 md:h-60"
            />
            <p className=" ml-0 mt-2 text-center md:mb-4 md:mt-0 md:text-left">
              You approve the program, and we assist you in arranging your
              medical trip
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row ">
            <img
              src={img5}
              alt="Do Work"
              className="w-32 h-32 md:w-48 md:h-60"
            />
            <p className=" ml-0 mt-2 text-center md:mb-4 md:mt-0 md:text-left">
              MedWander coordinator stays in touch 24/7 during your treatment{" "}
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={img6}
              alt="Treatment Service"
              className="w-32 h-32 md:w-48 md:h-60"
            />
            <p className=" ml-0 mt-2 text-center md:mb-4 md:mt-0 md:text-left">
              We follow your treatment process and stay in touch even after you
              return home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
