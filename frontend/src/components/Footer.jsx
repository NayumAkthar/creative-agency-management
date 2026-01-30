import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import Shape1 from "../assets/shapes/Frame.svg";
import Shape2 from "../assets/shapes/Group.svg";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "black",
        color: "white",
        padding: "60px 20px 25px 20px",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Shapes */}
      <img
        src={Shape1}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "180px",
          opacity: 0.1,
        }}
      />

      <img
        src={Shape2}
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          width: "140px",
          opacity: 0.15,
        }}
      />

      {/* Main Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          zIndex: 10,
          position: "relative",
        }}
      >
        {/* Column 1 */}
        <div>
          <h2
            style={{
              fontSize: "1.6rem",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            Creative Agency
          </h2>
          <p style={{ opacity: 0.9, lineHeight: "1.6" }}>
            We provide modern web design, branding solutions, digital
            marketing and business presentation services to help companies
            grow faster.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 style={footerHeading}>Quick Links</h3>
          <ul style={footerList}>
            <li><a href="#" style={linkStyle}>Home</a></li>
            <li><a href="#projects" style={linkStyle}>Projects</a></li>
            <li><a href="#clients" style={linkStyle}>Clients</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 style={footerHeading}>Follow Us</h3>
          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <FaFacebook size={28} style={iconStyle} />
            <FaInstagram size={28} style={iconStyle} />
            <FaLinkedin size={28} style={iconStyle} />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.3)",
          opacity: 0.8,
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Creative Agency. All Rights Reserved.
      </div>
    </footer>
  );
}

const footerHeading = {
  fontSize: "1.2rem",
  marginBottom: "15px",
  fontWeight: "600",
};

const footerList = {
  listStyle: "none",
  padding: 0,
  lineHeight: "2rem",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  opacity: 0.9,
  fontSize: "0.95rem",
};

const iconStyle = {
  cursor: "pointer",
  opacity: 0.9,
};
