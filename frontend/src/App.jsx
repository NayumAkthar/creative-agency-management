import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// Admin imports
import AdminLayout from "./admin/AdminLayout";
import AddProject from "./admin/AddProject";
import ViewProjects from "./admin/ViewProjects";
import AddClient from "./admin/AddClient";
import ViewClients from "./admin/ViewClients";
import Contacts from "./admin/Contacts";
import Subscribers from "./admin/Subscribers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout><h2>Welcome Admin</h2></AdminLayout>} />
        <Route path="/admin/projects/add" element={<AdminLayout><AddProject /></AdminLayout>} />
        <Route path="/admin/projects" element={<AdminLayout><ViewProjects /></AdminLayout>} />

        <Route path="/admin/clients/add" element={<AdminLayout><AddClient /></AdminLayout>} />
        <Route path="/admin/clients" element={<AdminLayout><ViewClients /></AdminLayout>} />

        <Route path="/admin/contacts" element={<AdminLayout><Contacts /></AdminLayout>} />
        <Route path="/admin/subscribers" element={<AdminLayout><Subscribers /></AdminLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
