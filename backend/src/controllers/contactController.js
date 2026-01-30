const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.json({ success: true, message: "Contact saved", data: contact });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, data: contacts });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
