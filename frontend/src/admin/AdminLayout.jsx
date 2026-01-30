import React from "react";
import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{
        marginLeft: "220px",
        padding: "20px",
        width: "100%"
      }}>
        {children}
      </main>
    </div>
  );
}
