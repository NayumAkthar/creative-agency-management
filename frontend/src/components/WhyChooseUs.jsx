import React from "react";
import iconMoney from "../assets/shapes/circle-dollar-sign.svg";
import iconDesign from "../assets/shapes/paintbrush-2.svg";
import iconMarketing from "../assets/shapes/Linkedin.svg";

export default function WhyChooseUs() {
  const items = [
    {
      icon: iconMoney,
      title: "Potential ROI",
      desc: "Our strategy aims to help you improve revenue and build your brand value with effective solutions.",
    },
    {
      icon: iconDesign,
      title: "Design",
      desc: "We craft modern designs that guide your users and provide the perfect experience.",
    },
    {
      icon: iconMarketing,
      title: "Marketing",
      desc: "We provide digital marketing plans to help businesses grow and stay ahead.",
    },
  ];

  return (
    <section
      style={{
        background: "#F5F7FA",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#0B63CE",
        }}
      >
        Why Choose Us?
      </h2>

      {/* Underline */}
      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#0B63CE",
          margin: "10px auto 40px",
          borderRadius: "10px",
        }}
      ></div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, boxShadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
            }}
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt="icon"
              style={{
                width: "55px",
                marginBottom: "20px",
              }}
            />

            {/* Title */}
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "10px",
                color: "#0B63CE",
                fontWeight: "600",
              }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "0.95rem",
                color: "#555",
                lineHeight: "1.5",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
