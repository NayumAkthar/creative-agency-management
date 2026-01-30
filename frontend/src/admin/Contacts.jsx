import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  // Fetch contact form data
  const fetchContacts = async () => {
    try {
      const res = await axios.get("https://creative-agency-management.onrender.com/api/contact/all");
      setContacts(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load contact form entries");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Form Submissions</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          background: "#fff",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#111", color: "#fff" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Mobile</th>
            <th style={thStyle}>City</th>
            <th style={thStyle}>Date</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c) => (
            <tr key={c._id} style={{ textAlign: "center" }}>
              <td style={tdStyle}>{c.fullName}</td>
              <td style={tdStyle}>{c.email}</td>
              <td style={tdStyle}>{c.mobile}</td>
              <td style={tdStyle}>{c.city}</td>
              <td style={tdStyle}>
                {new Date(c.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styling for table cells
const thStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};
