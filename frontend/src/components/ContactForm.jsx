import React, { useState } from "react";
import axios from "axios";

import BgImage from "../assets/images/Rectangle.svg"; // change if needed

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact/submit", form);
      alert("Form submitted successfully!");

      setForm({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit form!");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "70px 20px",
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Dark overlay to make form visible */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(2px)",
        }}
      ></div>

      {/* Form Wrapper (kept above overlay) */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            padding: "30px",
            borderRadius: "12px",
            width: "350px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#0B63CE",
            }}
          >
            Get a Free Consultation
          </h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="city"
            placeholder="Area, City"
            value={form.city}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#ff6600",
              padding: "12px",
              borderRadius: "6px",
              fontSize: "1rem",
              color: "white",
              cursor: "pointer",
              border: "none",
              marginTop: "10px",
            }}
          >
            Get Quick Quote
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  background: "#f8f8f8",
};
