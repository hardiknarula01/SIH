import React, { useEffect, useState } from "react";
import FindHospital from "../Hospitals/FindHospital";
import HospitalCardSection from "../Hospitals/HospitalCardSection";
import axios from "axios";

function HospitalsComponent() {
  const [country, setCountry] = useState([]); //array to hold all the country options
  const [city, setCity] = useState([]); //array to hold all the city options
  const [department, setDepartment] = useState([]); //array to hold all the department options(not available yet from the backend)
  const [allData, setAllData] = useState([]); //array to hold the entire json data from the backend route "http://localhost:9000/hospital/AllDataHospital"
  const [selectedCity, setSelectedCity] = useState(""); //string that holds the current value of the city dropdown
  const [selectedCountry, setSelectedCountry] = useState(""); //string that holds the current value of the country dropdown
  const [selectedDepartment, setSelectedDepartment] = useState(""); //string that holds the current value of the department dropdown
  const [loading, setLoading] = useState(true); //for loading
  const [data, setData] = useState([]);
  const [filteredHospitalData, setFilteredHospitalData] = useState([]); //the data that is passed to the hospital card section
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
    } else if (refreshFlag) {
      const hospitalList = allData.flatMap((item) =>
        item?.cities?.flatMap((city) =>
          city.hospitals.map((hospital) => hospital)
        )
      );
      setFilteredHospitalData(hospitalList);
    }
  }, [selectedCity, selectedCountry, selectedDepartment, allData]);

  //fetchData is a function that gets the entire data from the backend route "http://localhost:9000/hospital/AllDataHospital"
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:9000/hospital/AllDataHospital"
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
            city.hospitals.map((hospital) => hospital.departments)
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
      // console.log(newDepartmentList);
      setCountry(countryList);
      setCity(cityList);
      setDepartment(newDepartmentList);
      const hospitalList = data.flatMap((item) =>
        item?.cities?.flatMap((city) =>
          city.hospitals.map((hospital) => hospital)
        )
      );
      setFilteredHospitalData(hospitalList);
    } catch (error) {
      console.error("Error fetching all treatments:", error);
    } finally {
      setLoading(false);
      setRefreshFlag(false);
    }
  };

  const fetchFilteredHospitals = async () => {
    console.log("selected city: ", selectedCity);
    console.log("selected country: ", selectedCountry);
    console.log("selected department: ", selectedDepartment);
    //here only 2 possibilites country selected and city selected are done because the departments data is not yet available from the json data returned from route "http://localhost:9000/hospital/AllDataHospital"
    if (selectedCountry) {
      const d = allData.find((item) => item.country === selectedCountry);
      setData(d);
      const cityList = d.cities.map((city) => city.city);
      setCity(cityList);
      const newDepartmentSet = new Set(
        d.cities.flatMap((city) =>
          city.hospitals.map((hospital) => hospital.departments)
        )
      );
      let allDepartments = [];
      newDepartmentSet.forEach((arr) => {
        allDepartments = allDepartments.concat(arr);
      });
      const newDepartmentList = Array.from(new Set(allDepartments));
      // console.log(newDepartmentList);
      setDepartment(newDepartmentList);
      const newHospitalList = d.cities.flatMap((city) =>
        city.hospitals.map((hospital) => hospital)
      );
      // console.log("newHospitalList: ", newHospitalList);
      setFilteredHospitalData(newHospitalList); //set the filtered hospital data for the hospital cards section to regroup the hospital cards in it manually

      if (selectedCity && !selectedDepartment) {
        const newFilteredHospitalList = d.cities
          .filter((city) => city.city === selectedCity) // Filter cities by selectedCity
          .flatMap((city) => city.hospitals.map((hospital) => hospital));

        setFilteredHospitalData(newFilteredHospitalList);

        const DepartmentSet = new Set(
          d.cities
            .filter((city) => city.city === selectedCity)
            .flatMap((city) =>
              city.hospitals.map((hospital) => hospital.departments)
            )
        );

        let allDepartments = [];
        DepartmentSet.forEach((arr) => {
          allDepartments = allDepartments.concat(arr);
        });
        const newDepartmentList = Array.from(new Set(allDepartments));
        setDepartment(newDepartmentList);
      } 
      else if (selectedDepartment && !selectedCity) {
        const filteredByDepartment = newHospitalList.filter((hospital) =>
          hospital.departments.includes(selectedDepartment)
        );
      
        setFilteredHospitalData(filteredByDepartment);
      }
    }else if (!selectedCountry) {
      if (selectedCity && !selectedDepartment) {
        const d = allData.find((item) =>
          item.cities.find((city) => city.city === selectedCity)
        ); //find all the data which matches the current selected city from city dropdown
        console.log(d);
        setCity(d.cities.map((city) => city.city));
        setSelectedCountry(d.country);
    
        const DepartmentSet = new Set(
          d.cities
            .filter((city) => city.city === selectedCity)
            .flatMap((city) =>
              city.hospitals.map((hospital) => hospital.departments)
            )
        );
        let allDepartments = [];
        DepartmentSet.forEach((arr) => {
          allDepartments = allDepartments.concat(arr);
        });
        const newDepartmentList = Array.from(new Set(allDepartments));
        // console.log(DepartmentSet);
        setDepartment(newDepartmentList);
        const newList = d.cities
          .filter((city) => city.city === selectedCity)
          .flatMap((city) => city.hospitals.map((hospital) => hospital));
        // console.log("newList", newList);
        setFilteredHospitalData(newList); //set the filtered hospital data for the hospital cards section to regroup the hospital cards in it manually
      }else if (selectedDepartment && !selectedCity) {
        const newList = [];

        allData.forEach((country) => {
          country.cities.forEach((city) => {
            city.hospitals.forEach((hospital) => {
              if (hospital.departments.includes(selectedDepartment)) {
                newList.push({
                  name: hospital.name,
                  images: hospital.images,
                });
              }
            });
          });
        });
  
        setFilteredHospitalData(newList);
      }
    }
  };

  const handleCountryChange = (event) => {
    //handles change in the country dropdown
    setSelectedCountry(event.target.value);
    // setSelectedCity("");
    // setSelectedDepartment("");
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

  const handleRefreshButton = () => {
    setRefreshFlag(true);
    setSelectedCountry("");
    setSelectedCity("");
    setSelectedDepartment("");
    fetchData();
  };
  const handleVal = () => {
    const newVal = val + 10;
    setVal(newVal);
  };

  return (
    <div className="relative overflow-x-hidden">
      <div className="w-screen flex flex-col justify-center items-center mt-[120px]">
        <FindHospital
          country={country} //for dropdown country
          city={city} //for dropdown options
          department={department} //for department dropdown value
          selectedCity={selectedCity} //for dropdown city value
          selectedCountry={selectedCountry} //for dropdown country value
          selectedDepartment={selectedDepartment} //for dropdown department value
          handleCountryChange={handleCountryChange} //for country dropwdown changes
          handleCityChange={handleCityChange} //for city dropdown changes
          handleDepartmentChange={handleDepartmentChange} //for department dropdown changes
          handleRefreshButton={handleRefreshButton} //for handling refresh button
        />
      </div>
      <div className="flex justify-center items-center w-[100vw]">
        <HospitalCardSection
          countryName={country}
          filteredHospitalData={filteredHospitalData.slice(0, val)}
        />
      </div>
      <div className="flex justify-center items-center m-5 p-5">
        <button
          className="bg-green-600 p-3 rounded-md text-white font-bold"
          onClick={handleVal}
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default HospitalsComponent;
