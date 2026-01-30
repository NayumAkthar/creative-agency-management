const express = require("express");
const router = express.Router();

const uploadImage = require("../middlewares/uploadImage");
const { uploadImage: uploadImageController, createUpload, getAllUploads } = require("../controllers/uploadController");


router.post("/image", uploadImage.single("image"), uploadImageController);

router.post("/create", createUpload);

router.get("/all", getAllUploads);

module.exports = router;
