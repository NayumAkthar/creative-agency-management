const Project = require("../models/Project");

exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: project
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json({ success: true, data: projects });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json({ success: true, data: project });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, message: "Project updated", data: project });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Project deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
