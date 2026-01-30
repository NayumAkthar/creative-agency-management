import React, { useState } from "react";
import axios from "axios";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageName, setUploadedImageName] = useState("");

  // Upload Image
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "https://creative-agency-management.onrender.com/api/uploads/image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );

      setUploadedImageName(res.data.file.fileName);
      alert("Image uploaded successfully!");

    } catch (err) {
      console.error(err);
      alert("Image upload failed!");
    }
  };

  // Submit Project
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      title,
      description,
      image: uploadedImageName
    };

    try {
      await axios.post("https://creative-agency-management.onrender.com/api/projects/create", newProject);
      alert("Project added successfully!");

      // Reset form
      setTitle("");
      setDescription("");
      setUploadedImageName("");
      setImageFile(null);

    } catch (err) {
      console.error(err);
      alert("Failed to add project!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Project</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label>Project Title</label>
        <input
          type="text"
          value={title}
          placeholder="Enter project title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          placeholder="Enter project description"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />

        {uploadedImageName && (
          <p style={{ color: "green" }}>
            ✔ Uploaded: {uploadedImageName}
          </p>
        )}

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#007bff",
            color: "white",
            borderRadius: "6px",
            width: "100%",
            border: "none"
          }}
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
