const Upload = require("../models/Upload");

// 1️⃣ Upload Image + Save to DB
exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const newUpload = new Upload({
            fileName: req.file.filename,
            originalName: req.file.originalname,
            filePath: req.file.path
        });

        await newUpload.save();

        res.json({
            success: true,
            message: "Image uploaded and saved to DB successfully",
            file: newUpload
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 2️⃣ Only use when posting manual JSON
exports.createUpload = async (req, res) => {
    try {
        const upload = new Upload(req.body);
        await upload.save();

        res.status(201).json({
            success: true,
            message: "Upload saved successfully!",
            data: upload
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 3️⃣ Get All Uploads
exports.getAllUploads = async (req, res) => {
    try {
        const uploads = await Upload.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: uploads
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
