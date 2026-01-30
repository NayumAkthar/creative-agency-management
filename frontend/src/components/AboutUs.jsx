import React from "react";
import Shape1 from "../assets/shapes/Group.svg";
import Shape2 from "../assets/shapes/Frame.svg";

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "90px 20px",
        background: "#ffffff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Shapes */}
      <img
        src={Shape1}
        style={{
          position: "absolute",
          top: "40px",
          left: "20px",
          width: "160px",
          opacity: 0.08,
        }}
      />
      <img
        src={Shape2}
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          width: "140px",
          opacity: 0.08,
        }}
      />

      {/* Heading */}
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#0B63CE",
        }}
      >
        About Us
      </h2>

      {/* Underline */}
      <div
        style={{
          width: "70px",
          height: "4px",
          background: "#0B63CE",
          margin: "10px auto 30px",
          borderRadius: "6px",
        }}
      ></div>

      {/* Paragraph */}
      <p
        style={{
          maxWidth: "650px",
          margin: "0 auto 30px",
          fontSize: "1rem",
          color: "#444",
          lineHeight: "1.7",
        }}
      >
        With years of expertise in real estate, excellent customer service and a
        commitment to work hard, listen and follow through, we provide quality
        services to build relationships with clients and maintain those
        relationships by communicating effectively.
      </p>

      {/* Button */}
      <button
        style={{
          padding: "12px 32px",
          background: "transparent",
          border: "2px solid #0B63CE",
          borderRadius: "8px",
          color: "#0B63CE",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          transition: "0.2s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0B63CE", e.target.style.color = "#fff")}
        onMouseOut={(e) => (e.target.style.background = "transparent", e.target.style.color = "#0B63CE")}
      >
        Learn More
      </button>
    </section>
  );
}
