import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
function HospitalsCard({ name, image }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center flex-col border-[3px] border-[#d3d3d3] rounded-[5%] h-[18rem] justify-between  w-[15rem] py-4 px-3 text-center m-auto hospitaldiv"
    >
      <Link to={`/hospitals/${name}`}>
        <img
          alt="Hospital Image"
          src={image}
          className="w-[200px] h-[150px] rounded-[10px]"
        />
        <div className="text-[#28a2ed] font-[700] text-[1rem]">{name}</div>
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate("/appointment");
        }}
        className="py-2 px-8 bg-[#e97132] text-[#ffffff] font-[600] rounded-[15px] pointer text-lg"
      >
        Contact Hospital
      </button>
    </div>
  );
}

export default HospitalsCard;
