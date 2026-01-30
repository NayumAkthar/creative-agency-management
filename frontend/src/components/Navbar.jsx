import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      padding: "15px 40px",
      background: "#111",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxSizing: "border-box"
    }}>
      <h2 style={{ margin: 0, fontSize: "22px" }}>Creative Agency</h2>

      <div style={{
        display: "flex",
        gap: "30px",
        fontSize: "16px",
        whiteSpace: "nowrap"
      }}>
        <a href="#projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a>
        <a href="#clients" style={{ color: "#fff", textDecoration: "none" }}>Clients</a>
        <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}
