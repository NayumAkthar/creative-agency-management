import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ViewClients() {
  const [clients, setClients] = useState([]);

  // Fetch clients
  const fetchClients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/clients/all");
      setClients(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load clients");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Delete client
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this client?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/clients/${id}`);

      // Filter deleted client from UI
      setClients(clients.filter((c) => c._id !== id));

      alert("Client deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete client");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Clients</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {clients.map((client) => (
          <div
            key={client._id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={`http://localhost:5000/uploads/${client.image}`}
              alt={client.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />

            <h3>{client.name}</h3>
            <p style={{ color: "#888", marginBottom: "5px" }}>
              {client.designation}
            </p>

            <p style={{ fontSize: "14px", color: "#555" }}>
              {client.description}
            </p>

            <button
              onClick={() => handleDelete(client._id)}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                width: "100%",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
