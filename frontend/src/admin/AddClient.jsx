import React, { useState } from "react";
import axios from "axios";

export default function AddClient() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageName, setUploadedImageName] = useState("");

  // Upload Client Image
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/uploads/image",
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

  // Submit Client to Backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newClient = {
      name,
      designation,
      description,
      image: uploadedImageName
    };

    try {
      await axios.post(
        "http://localhost:5000/api/clients/create",
        newClient
      );

      alert("Client added successfully!");

      // Reset form
      setName("");
      setDesignation("");
      setDescription("");
      setUploadedImageName("");
      setImageFile(null);

    } catch (err) {
      console.error(err);
      alert("Failed to add client!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Client</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label>Client Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter client name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Designation</label>
        <input
          type="text"
          value={designation}
          placeholder="CEO, Developer, Designer, etc."
          onChange={(e) => setDesignation(e.target.value)}
          required
        />

        <label>Client Feedback / Description</label>
        <textarea
          value={description}
          placeholder="Feedback from client"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Upload Client Image</label>
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
            background: "#28a745",
            color: "white",
            borderRadius: "6px",
            width: "100%",
            border: "none"
          }}
        >
          Add Client
        </button>
      </form>
    </div>
  );
}
