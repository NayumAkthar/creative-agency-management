const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  fileName: String,
  originalName: String,
  filePath: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Upload", uploadSchema);
