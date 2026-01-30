const Client = require("../models/Client");

exports.createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.json({ success: true, message: "Client added", data: client });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json({ success: true, data: clients });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
