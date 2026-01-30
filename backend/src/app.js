const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/uploadRoutes");
const projectRoutes = require("./routes/projectRoutes");
const clientRoutes = require("./routes/clientRoutes");
const contactRoutes = require("./routes/contactRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");



const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// Routes
app.use("/api/uploads", uploadRoutes);

app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);


module.exports = app;
