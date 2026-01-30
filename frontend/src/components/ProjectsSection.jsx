import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects/all");
      setProjects(res.data.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section
      style={{
        background: "#F5F7FA",
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
        Our Projects
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

      {/* GRID */}
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
        {projects.map((project) => (
          <div
            key={project._id}
            style={{
              width: "300px",
              background: "white",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, boxShadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={`https://creative-agency-management.onrender.com/uploads/${project.image}`}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                background: "#eee",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  marginBottom: "20px",
                }}
              >
                {project.description.substring(0, 60)}...
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#FF8C00",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
