import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [countryCode, setCountryCode] = useState("in");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Restore form data from localStorage on component mount
    const savedFormData = JSON.parse(
      localStorage.getItem("appointmentFormData")
    );
    if (savedFormData) {
      setPatientName(savedFormData.patientName || "");
      setEmail(savedFormData.email || "");
      setDob(savedFormData.dob || "");
      setCountryCode(savedFormData.countryCode || "in");
      setPhoneNumber(savedFormData.phoneNumber || "");
      setPatientGender(savedFormData.patientGender || "default");
      setAppointmentTime(savedFormData.appointmentTime || "");
      setPreferredMode(savedFormData.preferredMode || "default");
      setDescription(savedFormData.description || "");
    }
  }, []);

  // Save form data to localStorage whenever any form state changes
  useEffect(() => {
    const formData = {
      patientName,
      email,
      dob,
      countryCode,
      phoneNumber,
      patientGender,
      appointmentTime,
      preferredMode,
      description,
    };
    localStorage.setItem("appointmentFormData", JSON.stringify(formData));
  }, [
    patientName,
    email,
    dob,
    countryCode,
    phoneNumber,
    patientGender,
    appointmentTime,
    preferredMode,
    description,
  ]);

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (!patientName.trim()) {
      toast.error("Patient name is required.");
      return false;
    }
    if (!nameRegex.test(patientName.trim())) {
      toast.error(
        "Patient name must contain only alphabetic characters and spaces."
      );
      return false;
    }
    if (patientName.trim().length < 8) {
      toast.error("Patient name must be at least 8 characters.");
      return false;
    }
    // if (!email.trim()) {
    //   toast.error("Email is required.");
    //   return false;
    // }
    if (!emailRegex.test(email.trim())) {
      toast.error("Invalid email format.");
      return false;
    }
    // if (!dob.trim()) {
    //   toast.error("Date of birth is required.");
    //   return false;
    // }
    if (!phoneNumber.trim()) {
      toast.error("Patient phone number is required.");
      return false;
    }
    if (!phoneRegex.test(phoneNumber.replace(/[^0-9]/g, ""))) {
      toast.error("Patient phone number must be numeric.");
      return false;
    }
    // if (phoneNumber.replace(/[^0-9]/g, "").length !== 10) {
    //   toast.error("Patient phone number must be of 10 digits.");
    //   return false;
    // }
    if (patientGender === "default") {
      toast.error("Please select patient gender.");
      return false;
    }
    if (!appointmentTime) {
      toast.error("Appointment time is required.");
      return false;
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        toast.error("Please select a future appointment time.");
        return false;
      }
    }
    // if (preferredMode === "default") {
    //   toast.error("Please select preferred mode.");
    //   return false;
    // }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // const response = await axios.post(
      //   `${process.env.REACT_APP_API_URL}/appointment`,
      //   {
      //     patientName,
      //     email,
      //     dob,
      //     phone: `+${countryCode}${phoneNumber}`,
      //     patientGender,
      //     appointmentTime,
      //     preferredMode,
      //     description,
      //   }
      // );
      // Clear form data from localStorage
      localStorage.removeItem("appointmentFormData");

      // Clear form state
      setPatientName("");
      setEmail("");
      setDob("");
      setCountryCode("in");
      setPhoneNumber("");
      setPatientGender("default");
      setAppointmentTime("");
      setPreferredMode("default");
      setDescription("");

      toast.success("Appointment Scheduled!", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsSubmitted(true),
        onClose: () => setIsSubmitted(false),
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <div>
      {/* //Navbar */}
      
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <h2 className="text-center text-2xl font-semibold text-[#ff7a00] mb-8">
            Get Free Consultation Now
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Enter Patient Name"
                    className="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Email
                    {/* Email <span className="text-red-500">*</span> */}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    className="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    // required
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Date of Birth
                    {/* <span className="text-red-500">*</span> */}
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    // required
                  />
                </div>
              </div>

              {/* ////// */}
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center border border-[#e0e0e0] rounded-l-md py-3 px-3 bg-white">
                      <PhoneInput
                        country={countryCode}
                        value={phoneNumber}
                        onChange={(phone, country, e) => {
                          setCountryCode(country.countryCode);
                          setPhoneNumber(phone.slice(country.dialCode.length));
                          setPhoneNumber(e.target.value);
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
                        containerStyle={{
                          marginRight: "-1px",
                          width: "100%",
                          // height: "80%",
                        }}
                        // containerClass="h-7 rounded-xl"
                      />
                    </div>
                    {/* <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter Phone Number"
                      className="w-full rounded-r-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Patient Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                    className="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  >
                    <option value="default">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="private">I will inform Doctor only</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Appointment Date and Time{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    className="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Preferred Mode
                    {/* <span className="text-red-500">*</span> */}
                  </label>
                  <select
                    value={preferredMode}
                    onChange={(e) => setPreferredMode(e.target.value)}
                    className="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    // required
                  >
                    <option value="default">Select</option>
                    <option value="voice">Voice Call</option>
                    <option value="video">Video Call</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter any additional information"
                    className="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-xl bg-[#ff7a00] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>

            <p
              className="text-green-500 text-center mt-4"
              style={{ display: isSubmitted ? "block" : "none" }}
            >
              Appointment details have been sent to the patient's phone number
              via SMS.
            </p>
          </form>
        </div>
      </div>

      <footer className="py-4 text-gray-500 text-center">
        <p>© MedWander. All rights reserved.</p>
      </footer>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
