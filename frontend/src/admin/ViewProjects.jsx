import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ViewProjects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://creative-agency-management.onrender.com/api/projects/all");
      setProjects(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Delete project
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await axios.delete(`https://creative-agency-management.onrender.com/api/projects/${id}`);

      // Remove from UI
      setProjects(projects.filter((p) => p._id !== id));

      alert("Project deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete project");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project._id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={`https://creative-agency-management.onrender.com/uploads/${project.image}`}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h3 style={{ marginTop: "10px" }}>{project.title}</h3>
            <p style={{ color: "#444" }}>{project.description}</p>

            <button
              onClick={() => handleDelete(project._id)}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                width: "100%"
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
