import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#111",
      color: "#fff",
      padding: "20px",
      position: "fixed",
      top: 0,
      left: 0
    }}>
      <h2 style={{ marginBottom: "30px" }}>Admin Panel</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "15px" }}>
          <Link to="/admin/projects/add" style={{ color: "#fff", textDecoration: "none" }}>Add Project</Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link to="/admin/projects" style={{ color: "#fff", textDecoration: "none" }}>View Projects</Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link to="/admin/clients/add" style={{ color: "#fff", textDecoration: "none" }}>Add Client</Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link to="/admin/clients" style={{ color: "#fff", textDecoration: "none" }}>View Clients</Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link to="/admin/contacts" style={{ color: "#fff", textDecoration: "none" }}>Contacts</Link>
        </li>

        <li>
          <Link to="/admin/subscribers" style={{ color: "#fff", textDecoration: "none" }}>Subscribers</Link>
        </li>
      </ul>
    </div>
  );
}
