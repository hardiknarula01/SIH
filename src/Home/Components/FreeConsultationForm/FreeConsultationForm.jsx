import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./FreeConsultationForm.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios"

const FreeConsultationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [medicalIssue, setMedicalIssue] = useState("");
  const [countryCode, setCountryCode] = useState("in");
  const [isSubmitted, setIsSubmitted] = useState(false);


  useEffect(() => {
    // Restore form data from localStorage on component mount
    const savedFormData = JSON.parse(
      localStorage.getItem("freeConsultationFormData")
    );
    if (savedFormData) {
      setName(savedFormData.name || "");
      setEmail(savedFormData.email || "");
      setPhoneNumber(savedFormData.phoneNumber || "");
      setMedicalIssue(savedFormData.medicalIssue || "");
      setCountryCode(savedFormData.countryCode || "in");
    }
  }, []);

  // Save form data to localStorage whenever any form state changes
  useEffect(() => {
    const formData = {
      name,
      email,
      phoneNumber,
      medicalIssue,
      countryCode,
    };
    localStorage.setItem("freeConsultationFormData", JSON.stringify(formData));
  }, [name, email, phoneNumber, medicalIssue, countryCode]);

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
    // Add more validation as needed
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    if (!validateForm()) {
      return;
    }

    // Your form submission logic here
    // For demo, simulate submission success
    const formData = {
      name,
      email,
      phoneNumber,
      medicalIssue,
      countryCode,
    };
    await axios.post('http://localhost:9000/user/userform', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMedicalIssue("");
      setCountryCode("in");
      localStorage.removeItem("freeConsultationFormData");
      toast.success("Form submitted successfully!");
    }, 2000);
  };
  const handleNameChange = (e) => {
    const { value } = e.target;
    const nameRegex = /^[A-Za-z\s]*$/;
    if (nameRegex.test(value)) {
      setName(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="free__consultation__form">
      <p className="free__consultation__form__heading">
        Get Free Consultation now
      </p>
      <div className="free__consultation__form__input">
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Patient Name"
          onChange={handleNameChange}
        />
      </div>
      <div className="free__consultation__form__input">
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div
        className="free__consultation__form__input"
        style={{ display: "flex", gap: "10px" }}
      >
        <div className="flex items-center border border-[#e0e0e0] rounded-md py-3 px-3 bg-white">
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
      <div className="free__consultation__form__input">
        <textarea
          id="medical-issue"
          value={medicalIssue}
          placeholder="Describe your Medical Issue"
          rows="1"
          onChange={(e) => setMedicalIssue(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FreeConsultationForm;
