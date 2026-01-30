import React from "react";

import HeroImg from "../assets/images/pexels-fauxels-3182834.svg";
import Shape1 from "../assets/images/Ellipse 11.svg";
import Shape2 from "../assets/images/Ellipse 29.svg";
import Shape3 from "../assets/images/Ellipse 33.svg";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 20px",
        background: "linear-gradient(to right, #111, #222)",
        color: "white",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Shapes */}
      <img
        src={Shape1}
        style={{
          position: "absolute",
          top: "50px",
          left: "60px",
          width: "120px",
          opacity: 0.4,
        }}
      />

      <img
        src={Shape2}
        style={{
          position: "absolute",
          bottom: "80px",
          right: "120px",
          width: "100px",
          opacity: 0.35,
        }}
      />

      <img
        src={Shape3}
        style={{
          position: "absolute",
          top: "220px",
          right: "40px",
          width: "140px",
          opacity: 0.25,
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          zIndex: 10,
        }}
      >
        {/* Left Text */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              lineHeight: "1.3",
              marginBottom: "20px",
            }}
          >
            Creative Agency <br /> Management System
          </h1>

          <p
            style={{
              color: "#ddd",
              fontSize: "1.1rem",
              maxWidth: "450px",
              marginBottom: "30px",
            }}
          >
            We build modern buildings experiences for businesses, houses and brands.  
            High-quality design, fast delivery, and affordable services.
          </p>

          <button
            style={{
              padding: "12px 28px",
              background: "#ff5c5c",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={HeroImg}
            alt="Hero"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "12px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
