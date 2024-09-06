import {
  Box,
  ClickAwayListener,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import './style.css'
// import dropdowndata from "../../data/dropdowndata.json";

const FindTreatment = ({
  departments,treatments, val , tval, setVal, setTval ,selectedDepartment,selectedTreatment,onDepartmentChange,onTreatmentChange
}) => {
  // console.log('dept',dept);
  // console.log('fewData',selectedDepartment,selectedTreatment);
  // const [tval,setTval] = useState(selectedTreatment)
  const [click1,setClick1] = useState(true)
  const [click,setClick] = useState(true)
  // const [val,setVal] = useState(selectedDepartment);


  return (
    <Box
      sx={{
        width: "100%",
        paddingY: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="medium"
        mb={5}
        gutterBottom
      >
        <span style={{ color: "#838383" }}>Find</span>{" "}
        <span style={{ color: "#28a2ed" }}>Treatments</span>
      </Typography>
      <Box
        sx={{
          width: "fit",
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          border: "1px solid #aaaaaa",
          paddingY: 2,
          paddingX: 3,
          borderRadius: "13px",
        }}
      >
        <Box>
          <Typography
            sx={{
              ml: "10px",
              fontWeight: "medium",
              color: "#838383",
              fontSize: "18px",
            }}
          >
            Select Department
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 500 }} size="small" className="">
            <Input className="border-2 rounded-[5px] p-2 text-xl font-semibold "
             type="text" onClick={()=>{setClick(!click)}}
             value={val}
             onChange={(e)=>setVal(e.target.value)}
            // onChange={onDepartmentChange}
             placeholder="Search Department"
             >
            </Input>
            <div className={` p-3  w-[100%] overflow-scroll  dropdown ${click ? 'hidden': ''}`}>
            {departments.filter((dep)=>{
              if(!click && !val){
                return dep
              }
              return val && dep.toLowerCase().includes(val.toLowerCase())
            })
            .map((dept, index) => (
                <li value={index} className=" bg-white p-2 hover:cursor-pointer hover:bg-slate-200 list-none" 
                onClick={(e)=>{
                  onDepartmentChange(e.target.innerHTML)
                  setVal(e.target.innerHTML)
                  setClick(!click)
                }} >{dept}</li>
              ))}
            </div>
            </FormControl>
        </Box>
        <Box sx={{ borderLeft: "2px dotted #aaaaaa", height: "auto", mx: 2 }} />
        <Box>
          <Typography
            sx={{
              ml: "10px",
              fontWeight: "medium",
              color: "#838383",
              fontSize: "18px",
            }}
          >
            Select Treatment
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 500 }} size="small">
          <Input className="border-2 rounded-[5px] p-2 text-xl font-semibold "
             type="text" onClick={()=>{setClick1(!click1)}}
             value={tval}
             onChange={(e)=>setTval(e.target.value)}
             placeholder="Search treatment"
             >
            </Input>
            <div className={` p-3  w-[100%] overflow-scroll  dropdown ${click1 ? 'hidden': ''}`}>
            {treatments.filter((dep)=>{
              if(!click1 && !tval){
                console.log('click is ',click1);
                return dep
              }
              return tval && dep.toLowerCase().includes(tval.toLowerCase())
            })
            .map((dept, index) => (
                <li value={index} className=" bg-white p-2 hover:cursor-pointer hover:bg-slate-200 list-none" 
                onClick={(e)=>{
                  onTreatmentChange(e.target.innerHTML)
                  setTval(e.target.innerHTML)
                  setClick1(!click1)
                }} >{dept}</li>
              ))}
            </div>
          </FormControl>
        </Box>
        
      </Box>
    </Box>
  );
};

export default FindTreatment;
