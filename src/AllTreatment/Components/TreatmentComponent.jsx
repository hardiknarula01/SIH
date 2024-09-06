import React, { useEffect, useState } from "react";
// import TopBar from "../../../Components/Navbar/TopBar";
// import Navbar from "../../../Components/Navbar/Navbar";
import FindTreatment from "../Treatment/FindTreatment";
import TreatmentCardSection from "../Treatment/TreatmentCardSection";
// import Footer from "../../Components/Footer";
// import { WhatsappIconComponent } from "../../Components/Icons";
import axios from "axios";
// import dropdowndata from "../../data/dropdowndata.json";



// function TreatmentComponent() {
//   const [department, setDepartment] = useState("");
//   const [treatment, setTreatment] = useState("");
//   const [data, setData] = useState("");
//   const [treatValue,setTreatValue] = useState('');
//   const [departmentValue, setDepartmentValue] = useState('');
//   const [dept, setdept] = useState('');


//   const getdeptt = async()=>{
//     const data = await axios.get('http://localhost:8000/treatment/treatments');
//     console.log(data);
//     // setdept(data.data);
//   }

//   const fetchData = async()=>{
//     try{
      
//     if(!departmentValue && !treatValue)
//       {
//         const  data = await axios.get("http://localhost:8000/api/v1/treatment/treatments"); 
//         setData(data.data);
//       }
//       else if(departmentValue && !treatValue){
//         const  data = await axios.get(`http://localhost:8000/api/v1/treatment/departments/${dept[department].department}`);
//         setData(data.data);
//       }
//       else if(departmentValue && treatValue){
//         const  data = await axios.get(`http://localhost:8000/api/v1/treatment/departments/${dept[department].department}/treatments/${treatValue}`); 
//         setData(data.data);
//       }
//       else if(!departmentValue && treatValue){
//         const  data = await axios.get(`http://localhost:8000/api/v1/treatment//treatments/${treatValue}`); 
//         setData(data.data);
//       }
//     }catch(e){
//       console.log(e);
//     }
//   }
//   useEffect(()=>{
//     getdeptt();
//   },[])
//   useEffect(() => {
//     fetchData();   // this function will be called whenever there is a change encountered in the country, city, department state variables, from the FindHospital component
//   }, [department, treatment]);

//   return (
//     <div className="relative overflow-x-hidden">

//       <div className="w-4xl flex flex-col justify-center items-center mt-[120px]">
//         <FindTreatment
//           department={department}
//           setDepartment={setDepartment}
//           treatment={treatment}
//           setTreatment={setTreatment}
//           data={data ?  data : []}
//           dept = {dept ? dept : []}
//           setTreatValue={setTreatValue}
//           setDepartmentValue={setDepartmentValue}
//         />
//       </div>
//       <div className="flex justify-center items-center ">
//         {dept ?<TreatmentCardSection data={dept}/> : '' }
//       </div>
//     </div>
//   );
// }

// export default TreatmentComponent;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FindTreatment from "./FindTreatment";
// import TreatmentCardSection from "./TreatmentCardSection";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FindTreatment from "./FindTreatment";
// import TreatmentCardSection from "./TreatmentCardSection";

// function TreatmentComponent() {
//   const [departments, setDepartments] = useState([]);
//   const [treatments, setTreatments] = useState([]);
//   const [allData, setAllData] = useState([]);
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedTreatment, setSelectedTreatment] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [singleTreatments, setSingleTreatments] = useState([]);

//   useEffect(() => {
//     fetchAllDataDepartment();
//   }, []);


//   const fetchAllDataDepartment = async () => {
//     setIsLoading(true);
//     try {
//       const {data}  = await axios.get("http://localhost:9000/treatment/AllDataDepartment");
//       setAllData(data);
//       console.log(data);
      
//       // const departmentsList = ;
//       // console.log(departmentsList);

//       const treatmentsList = data.flatMap(item =>
//         item.treatments.map(treatment => treatment.name)
//       );

//       setDepartments(data.map(item => item.department));
//       setTreatments(treatmentsList);

//     } catch (error) {
//       console.error("Error fetching all treatments:", error);
//       setAllData([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchAllTreatments = async () => {
//     setIsLoading(true);
//     try {
//       const {data}  = await axios.get("http://localhost:9000/treatment/AllDataTreatment");
//       console.log(data);
//       setSingleTreatments(data)

//     } catch (error) {
//       console.error("Error fetching all treatments:", error);
//       setSingleTreatments([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

  

//   const fetchFilteredTreatments = async () => {
//     setIsLoading(true);
//     try {
//       let url = "";
      
//       if (selectedDepartment && selectedTreatment) {
//         url += `http://localhost:9000/treatment/SpecficTreatmentForAllCountries?treatment=${selectedTreatment}&department=${selectedDepartment}`;
//        }// else if (selectedDepartment) {
//       //   url += `/departments/${selectedDepartment}`;
//       // } else if (selectedTreatment) {
//       //   url += `/treatments/${selectedTreatment}`;
//       // } else {
//       //   url += "/treatments";
//       // }

//       const { data } = await axios.get(url);
//       setTreatments(data);
//     } catch (error) {
//       console.error("Error fetching filtered treatments:", error);
//       setTreatments([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFilteredTreatments();
//   }, [selectedDepartment, selectedTreatment]);

//   const handleDepartmentChange = (event) => {
//     setSelectedDepartment(event.target.value);
//     setSelectedTreatment("");
//   };

//   const handleTreatmentChange = (event) => {
//     setSelectedTreatment(event.target.value);
//   };

//   return (
//     <div className="relative overflow-x-hidden">
//       <div className="w-4xl flex flex-col justify-center items-center mt-[120px]">
//         <FindTreatment
//           departments={departments}
//           treatments={treatments}
//           selectedDepartment={selectedDepartment}
//           selectedTreatment={selectedTreatment}
//           onDepartmentChange={handleDepartmentChange}
//           onTreatmentChange={handleTreatmentChange}
//         />
//       </div>
//       <div className="flex justify-center items-center">
//         <TreatmentCardSection treatments={singleTreatments} isLoading={isLoading} />
//       </div>
//     </div>
//   );
// }

// export default TreatmentComponent;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FindTreatment from "./FindTreatment";
// import TreatmentCardSection from "./TreatmentCardSection";


import { useLocation } from 'react-router-dom';

function TreatmentComponent() {
  const [departments, setDepartments] = useState([]);
  const [allTreatments, setAllTreatments] = useState([]);
  const [filteredTreatments, setFilteredTreatments] = useState([]);
  const [allData, setAllData] = useState([]);
  // const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [treatmentData, setTreatmentData] = useState();
  const [departmentData, setDepartmentData] = useState();
  const [data, setData] = useState();
  const location = useLocation();
  const initialDepartment = location.state?.department || "";
  const [selectedDepartment, setSelectedDepartment] = useState(initialDepartment);
  const [val,setVal] = useState(selectedDepartment);
  const [tval, setTval] = useState(selectedTreatment);

  useEffect(() => {
    fetchAllDataDepartment();
  }, []);

  useEffect(() => {
    if (allData.length > 0 && 
      (selectedDepartment || selectedTreatment)) 
      {
      fetchFilteredTreatments();
    }
  }, [selectedDepartment, selectedTreatment, allData]);

  const fetchAllDataDepartment = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:9000/treatment/AllDataDepartment");
      setAllData(data);
      console.log('newData',data);
      const departmentsList = data.map(item => item.department);
      const treatmentsList = data.flatMap(item =>
        item.treatments.map(treatment => treatment.name)
      );

      setDepartments(departmentsList);
      setAllTreatments(treatmentsList);
      const treatments = data.flatMap(item => item.treatments)
      setTreatmentData(treatments);
      
      setFilteredTreatments(treatmentsList);

    } catch (error) {
      console.error("Error fetching all treatments:", error);
      setAllData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFilteredTreatments = () => {
    console.log("Selected dept", selectedDepartment);
    console.log("Selected treat", selectedTreatment);

    if (selectedDepartment && !selectedTreatment) {
      const d = allData.find(item => item.department === selectedDepartment);
      console.log("d", d);
      if (d) {
        setData(d);
        setTreatmentData(d.treatments);
        setDepartmentData(d.department);
        setFilteredTreatments(d.treatments.map(treatment => treatment.name));
      }
    } else {
      for (const department of allData) {
        const deptTreatments = department.treatments.find(treatment => treatment.name === selectedTreatment);
        console.log("depttreatments:",deptTreatments);
        console.log("deptdept: ", department.department);
        if (deptTreatments) {
          setDepartmentData(department.department);
          setTreatmentData([deptTreatments]);
          setSelectedDepartment(department.department);
          setVal(selectedDepartment)
          setFilteredTreatments(department.treatments.map(treatment => treatment.name));
          break;
        }
      }
    }
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(val);
    setSelectedTreatment("");
  };

  const handleTreatmentChange = (val) => {
    setSelectedTreatment(val);
  };

  useEffect(() => {
    console.log("Updated Treat data", treatmentData);
    console.log("Updated Dept data", departmentData);
  }, [treatmentData, departmentData]);

  return (
    <div className="relative overflow-x-hidden">
      <div className="w-4xl flex flex-col justify-center items-center mt-[120px]">
        <FindTreatment
          departments={departments}
          treatments={filteredTreatments} // required for dropdown
          selectedDepartment={selectedDepartment}
          selectedTreatment={selectedTreatment}
          val={val}
          tval={tval}
          setVal={setVal}
          setTval={setTval}
          onDepartmentChange={handleDepartmentChange}
          onTreatmentChange={handleTreatmentChange}
        />
      </div>
      <div className="flex justify-center items-center">
        <TreatmentCardSection department = {departmentData} treatments={treatmentData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default TreatmentComponent;