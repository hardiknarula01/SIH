import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorCardSection from "../Components/DoctorCardSection";
import FindDoctor from "../Components/FindDoctors";




function DoctorComponent() {
  const [country, setCountry] = useState([]); //array to hold all the country options
  const [city, setCity] = useState([]); //array to hold all the city options
  const [department, setDepartment] = useState([]); //array to hold all the department options(not available yet from the backend)
  const [allData, setAllData] = useState([]); //array to hold the entire json data from the backend route "http://localhost:9000/hospital/AllDataHospital"
  const [selectedCity, setSelectedCity] = useState(""); //string that holds the current value of the city dropdown
  const [selectedCountry, setSelectedCountry] = useState(""); //string that holds the current value of the country dropdown
  const [selectedDepartment, setSelectedDepartment] = useState(""); //string that holds the current value of the department dropdown
  const [loading, setLoading] = useState(true); //for loading
  const [data, setData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]); //the data that is passed to the hospital card section
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [val, setVal] = useState(10);

  useEffect(() => {
    fetchData(); // this function will be called whenever there is a change encountered in the country, city, department state variables, from the FindHospital component
  }, []);

  useEffect(() => {
    // console.log(country);
    if (
      allData.length > 0 &&
      (selectedCity || selectedDepartment || selectedCountry)
    ) {
      fetchFilteredHospitals(); //only fetches filtered data from the backend when the city or the department or the country dropdowns changes
    }
   else if (refreshFlag){
    const doctorList = allData.flatMap((item) =>
      item?.cities?.flatMap((city) =>
        city.departments.map((dept) => dept.doctors)
      )
    );

    const newDoctorList = doctorList.flat();
    setFilteredDoctors(newDoctorList);
  }
  }, [selectedCity, selectedCountry, selectedDepartment, allData]);

  //fetchData is a function that gets the entire data from the backend route "http://localhost:9000/hospital/AllDataHospital"
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:9000/doctor/AllDoctor"
      );
      setAllData(data);
      const countryList = data.map((item) => {
        //gets all the country from the incoming json data
        if (item.country) return item.country;
      });
      // console.log("countryList: ", countryList);

      const allCities = data.map((item) => {
        //gets all the hospitals from the incoming json data (not used, but kept for future use)
        if (item.cities) return item.cities;
      });
      // console.log(allCities);

      const cityList = data.flatMap(
        (
          item //gets all the cities from each hospitals array from the json data received from backend
        ) =>
          item?.cities?.map((city) => {
            if (city.city) return city.city;
          })
      );

      // console.log("citylist: ", cityList);

      const departmentSet = new Set(
        data.flatMap((item) =>
          item?.cities?.flatMap((city) =>
            city.departments.map((department) => department.department)
          )
        )
      ); //getting the departments of each hospital
      // console.log("departments: ",departmentSet);

      let allDepartments = [];
      departmentSet.forEach((arr) => {
        allDepartments = allDepartments.concat(arr);
      });
      // to get all unique departments
      const newDepartmentList = Array.from(new Set(allDepartments));
      // console.log("new dept list", newDepartmentList);
      
      setCountry(countryList);
      setCity(cityList);
      setDepartment(newDepartmentList);
      const doctorList = data.flatMap((item) =>
        item?.cities?.flatMap((city) =>
          city.departments.map((dept) => dept.doctors)
        )
      );

      const newDoctorList = doctorList.flat();
      console.log("docList", newDoctorList);

      setFilteredDoctors(newDoctorList);
    } catch (error) {
      console.error("Error fetching all treatments:", error);
    } finally {
      setLoading(false);
      setRefreshFlag(false)
    }
  };

  const fetchFilteredHospitals = async () => {
    console.log("selected city: ", selectedCity);
    console.log("selected country: ", selectedCountry);

    //here only 2 possibilites country selected and city selected are done because the departments data is not yet available from the json data returned from route "http://localhost:9000/hospital/AllDataHospital"
    if (selectedCountry) {
      const d = allData.find((item) => item.country === selectedCountry);
      setData(d);
      const cityList = d.cities.map((city) => city.city)
      console.log()
      setCity(cityList);
      const newDepartmentSet = new Set(
        d.cities.flatMap((city) =>
          city.departments.map((department) => department.department)
        )
      );
  
      let allDepartments = [];
  
      newDepartmentSet.forEach((arr) => {
        allDepartments = allDepartments.concat(arr);
      });
  
      const newDepartmentList = Array.from(new Set(allDepartments));
  
      // console.log("DeptList for selectCountry",newDepartmentList);
      setDepartment(newDepartmentList);
      const docList = d.cities.flatMap((city) =>
        city.departments.map((department) => department.doctors)
      );

      const newDocList = docList.flat();
      // console.log("newDoc: ", newDocList);
      setFilteredDoctors(newDocList); 
    
      if (selectedCity && !selectedDepartment) {
        const d = allData.find((item) =>
          item.cities.find((city) => city.city === selectedCity)
        ); //find all the data which matches the current selected city from city dropdown
        // console.log("d in both", d);
      
        setCity(d.cities.map((city) => city.city));
        const DepartmentSet = new Set(
          d.cities
            .filter((city) => city.city === selectedCity)
            .flatMap((city) =>
              city.departments.map((department) => department.department)
            )
        );
      
        let allDepartments = [];
        DepartmentSet.forEach((arr) => {
          allDepartments = allDepartments.concat(arr);
        });
        const newDepartmentList = Array.from(new Set(allDepartments));
        // console.log("new Dept in both", newDepartmentList);
      
        setDepartment(newDepartmentList);
      
        const newList = d.cities
          .filter((city) => city.city === selectedCity)
          .flatMap((city) => city.departments.flatMap((dept) => dept.doctors));
        console.log("newList: ", newList);
        setFilteredDoctors(newList);
      } 
      else if (selectedDepartment && !selectedCity) {
        const filteredDoctors = allData.flatMap((item) =>
          item.cities.flatMap((city) =>
            city.departments.flatMap((department) =>
              department.doctors.filter((doctor) =>
                department.department === selectedDepartment
              )
            )
          )
        );
        console.log("filtered: ", filteredDoctors);
        setFilteredDoctors(filteredDoctors);
      
      }
    }else if (!selectedCountry) {
      if (selectedCity && !selectedDepartment) {
        const d = allData.find((item) =>
          item.cities.find((city) => city.city === selectedCity)
        ); //find all the data which matches the current selected city from city dropdown
        // console.log("d", d);
      
        const newCities = d.cities.map((city) => city.city)
        // console.log("newCities",newCities);
        setCity(newCities);
        setSelectedCountry(d.country);
      
      
      
        const DepartmentSet = new Set(
          d.cities
            .filter((city) => city.city === selectedCity)
            .flatMap((city) =>
              city.departments.map((department) => department.department)
            )
        );
      
        let allDepartments = [];
        DepartmentSet.forEach((arr) => {
          allDepartments = allDepartments.concat(arr);
        });
        const newDepartmentList = Array.from(new Set(allDepartments));
      
        // console.log("newDept List in selectCountry",newDepartmentList);
        setDepartment(newDepartmentList);
      
      
        const newList = d.cities
          .filter((city) => city.city === selectedCity)
          .flatMap((city) => city.departments.flatMap((dept) => dept.doctors));
        // console.log("newList", newList);
        setFilteredDoctors(newList); //set the filtered hospital data for the hospital cards section to regroup the hospital cards in it manually
      
      }
      else if (selectedDepartment && !selectedCity) {
        const newList = [];

        allData.forEach((country) => {
          country.cities.forEach((city) => {
            city.departments.forEach((department) => {
              if (department.department == selectedDepartment) {
                newList.push(department.doctors);
              }
            });
          });
        });
    
        const docList = newList.flat();

        setFilteredDoctors(docList);
      }
    // }else{
    //   const d = allData.find((item) => item.country === selectedCountry);
    //   setData(d);
    //   const cityList = d.cities.map((city) => city.city === selectedCity);
    //   const docList = d.cityList.flatMap((city) => city.departments === selectedDepartment);
    //   const list = docList.map((doc) => doc.doctors);
    //   setFilteredDoctors(list);

    // }
    }
    else if (selectedDepartment) {
      if (!selectedCountry && !selectedCity) {
        const newList = [];

        allData.forEach((country) => {
          country.cities.forEach((city) => {
            city.departments.forEach((department) => {
              if (department.department == selectedDepartment) {
                newList.push(department.doctors);
              }
            });
          });
        });

        const docList = newList.flat();

        console.log('docList in dept only', docList)
        setFilteredDoctors(docList);
      }
    }
    

  };

  const handleCountryChange = (event) => {
    //handles change in the country dropdown
    setSelectedCountry(event.target.value);

  };

  const handleCityChange = (event) => {
    //handles change in the city dropdown
    setSelectedCity(event.target.value);
    // setSelectedDepartment("");
  };

  const handleDepartmentChange = (event) => {
    //handles change in the department dropdown
    setSelectedDepartment(event.target.value);
  };

  const handleVal = () => {
    const newVal = val + 10;
    setVal(newVal);
  };

  const handleRefreshButton = () => {
    setRefreshFlag(true);
    setSelectedCountry("");
    setSelectedDepartment("")
    setSelectedCity("");
    fetchData();
  }


  return (
    <div className="relative overflow-x-hidden">

      <div className="w-screen flex flex-col justify-center items-center mt-[120px]">
        <FindDoctor

          countries={country}
          cities={city}
          departments={department}
          selectedCountry={selectedCountry}
          selectedCity={selectedCity}
          selectedDepratment={selectedDepartment}
          onDepartmentChange={handleDepartmentChange}
          onCountryChange={handleCountryChange}
          onCityChange={handleCityChange}
          handleRefreshButton={handleRefreshButton}


        />
      </div>
      <div className="flex justify-center items-center w-[100vw]">
        <DoctorCardSection data={filteredDoctors.slice(0,val)} />
      </div>

      <div className="flex justify-center items-center m-5 p-5">
        <button className="bg-green-600 p-3 rounded-md text-white font-bold" onClick={handleVal}>Load more</button>
      </div>

    </div>
  );
}

export default DoctorComponent;
