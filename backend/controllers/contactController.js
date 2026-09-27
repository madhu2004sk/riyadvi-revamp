const Contact = require("../models/Contact");

const createContact = async (req, res, next) => {
    try {
        const { name, email, phone, company, service, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required",
            });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            company,
            service,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Contact form submitted successfully",
            contact,
        });
    } catch (error) {
        next(error);
    }
};

const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            contacts,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createContact,
    getContacts,
};