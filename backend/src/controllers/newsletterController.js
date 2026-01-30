const Newsletter = require("../models/Newsletter");

exports.subscribe = async (req, res) => {
    try {
        const user = new Newsletter(req.body);
        await user.save();
        res.json({ success: true, message: "Subscribed", data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getSubscribers = async (req, res) => {
    try {
        const users = await Newsletter.find().sort({ createdAt: -1 });
        res.json({ success: true, data: users });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
