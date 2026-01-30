import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);

  // Fetch newsletter subscribers
  const fetchSubscribers = async () => {
    try {
      const res = await axios.get("https://creative-agency-management.onrender.com/api/newsletter/all");
      setSubscribers(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load subscribers");
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Newsletter Subscribers</h2>

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
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Subscribed On</th>
          </tr>
        </thead>

        <tbody>
          {subscribers.map((s) => (
            <tr key={s._id} style={{ textAlign: "center" }}>
              <td style={tdStyle}>{s.email}</td>
              <td style={tdStyle}>
                {new Date(s.createdAt).toLocaleDateString()}
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
