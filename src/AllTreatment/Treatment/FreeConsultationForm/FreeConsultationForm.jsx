import React from "react";
import { useState } from "react";
import "../../../Styles/FreeConsultationForm.css";
import axios from "axios";
const FreeConsultationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [medicalIssue, setMedicalIssue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, phoneNumber, medicalIssue });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios.post(
        "http://localhost:9000/user/userform",
        { name, email, phoneNumber, medicalIssue },
        config
      );

      console.log("it worked",data);
    } catch (error) {
      console.log(err.message);
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
          onChange={(e) => setName(e.target.value)}
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
        <input
          type="tel"
          placeholder="+91"
          style={{ width: "50px" }}
          value={phoneNumber.slice(0, 3)}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          id="phone"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
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
