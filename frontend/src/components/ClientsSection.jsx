import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function ClientsSection() {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const res = await API.get("/clients/all");
      setClients(res.data.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "80px 20px",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#0B63CE",
        }}
      >
        Happy Clients
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

      {/* CLIENT GRID */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {clients.map((client) => (
          <div
            key={client._id}
            style={{
              width: "260px",
              background: "white",
              borderRadius: "14px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={`https://creative-agency-management.onrender.com/uploads/${client.image}`}
              alt={client.name}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
                border: "3px solid #0B63CE",
              }}
            />

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              {client.name}
            </h3>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              {client.designation}
            </p>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#444",
                lineHeight: "1.4",
              }}
            >
              {client.description.substring(0, 90)}...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
