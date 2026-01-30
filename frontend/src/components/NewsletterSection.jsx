import React, { useState } from "react";
import API from "../services/api";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/newsletter/subscribe", { email });
      alert("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      alert("Subscription failed");
    }
  };

  return (
    <section
      style={{
         padding: "80px 20px 40px 20px",
        background: "black",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#0B63CE",
        }}
      >
        Subscribe to Our Newsletter
      </h2>

      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#0B63CE",
          margin: "10px auto 40px",
          borderRadius: "10px",
        }}
      ></div>

      {/* White Card */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flex: "1",
            padding: "14px",
            border: "1px solid #d0d7e6",
            borderRadius: "8px",
            outline: "none",
            fontSize: "1rem",
            background: "#f8faff",
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            padding: "14px 20px",
            background: "#0B63CE",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
            minWidth: "120px",
          }}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}
