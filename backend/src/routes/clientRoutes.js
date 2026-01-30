const express = require("express");
const router = express.Router();

const { createClient, getClients, deleteClient } = require("../controllers/clientController");

router.post("/create", createClient);
router.get("/all", getClients);
router.delete("/:id", deleteClient);

module.exports = router;
