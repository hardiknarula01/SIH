import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import axios from 'axios';

const ConsultationForm = () => {
  const [countryCode, setCountryCode] = useState("in");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setname] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Restore form data from localStorage on component mount
    const savedFormData = JSON.parse(
      localStorage.getItem("consultationFormData")
    );
    if (savedFormData) {
      setname(savedFormData.name || "");
      setCountryCode(savedFormData.countryCode || "in");
      setPhoneNumber(savedFormData.phoneNumber || "");
    }
  }, []);

  // Save form data to localStorage whenever any form state changes
  useEffect(() => {
    const formData = {
      name,
      countryCode,
      phoneNumber,
    };
    localStorage.setItem("consultationFormData", JSON.stringify(formData));
  }, [name, countryCode, phoneNumber]);

  const validateForm = () => {
    const phoneRegex = /^\d+$/;
    if (!name.trim()) {
      toast.error("Patient name is required.");
      return false;
    }
    if (!phoneNumber.trim()) {
      toast.error("Phone number is required.");
      return false;
    }
    if (!phoneRegex.test(phoneNumber.replace(/[^0-9]/g, ""))) {
      toast.error("Phone number must be numeric.");
      return false;
    }

    // const strippedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    // if (strippedPhoneNumber.length !== 10) {
    //   toast.error("Phone number must be of 10 digits.");
    //   return false;
    // }
    // if (!phoneNumber.trim()) {
    //   toast.error("Phone number is required.");
    //   return false;
    // }
    // Add more validation rules as needed
    return true;
  };

  const handleSubmit = async(ev) => {
    ev.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = {
      name,
      countryCode,
      phoneNumber,
    };
    await axios.post('http://localhost:9000/user/userform', formData);

    // Add your form submission logic here
    // For demo, simulate submission success
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setname("");
      setPhoneNumber("");
      setCountryCode("in");
      localStorage.removeItem("consultationFormData");
      toast.success("Appointment booked successfully!");
    }, 2000);
  };
  const handleNameChange = (e) => {
    const { value } = e.target;
    const nameRegex = /^[A-Za-z\s]*$/;
    if (nameRegex.test(value)) {
      setname(value);
    }
  };

  return (
    <div className="flex gap-3 bg-white border-2 rounded-xl shadow-md p-6 items-center text-black">
      <div className="flex flex-col">
        <label className="text-gray-600 mb-2">Patient Name</label>
        <input
          className="border-2 rounded-md h-12 p-2"
          placeholder="Patient Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-600 mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <div className="flex items-center border border-[#e0e0e0] rounded-l-md py-3 px-3 bg-white">
          <PhoneInput
            country={countryCode}
            value={phoneNumber}
            onChange={(phone, country) => {
              setCountryCode(country.countryCode);
              setPhoneNumber(phone);
            }}
            placeholder="Enter Phone Number"
            inputProps={{
              style: {
                border: "none",
                boxShadow: "none",
                borderRadius: "0.375rem 0.375rem 0.375rem 0.375rem",
                width: "calc(100% - 32px)",
                height: "27px",
              },
              required: true,
            }}
          />
        </div>
      </div>

      <div className="mt-9">
        <button
          className="bg-[#e97132] p-3 text-white rounded-xl text-lg font-semibold w-48"
          onClick={handleSubmit}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ConsultationForm;
