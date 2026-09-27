const Lead = require("../models/Lead");

const createLead = async (req, res, next) => {
    try {
        const { name, email, company, resource, source } = req.body;
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and email are required",
            });
        }

        const lead = await Lead.create({
            name,
            email,
            company,
            resource,
            source,
        });

        res.status(201).json({
            success: true,
            message: "Resource request submitted successfully",
            lead,
        });
    } catch (error) {
        next(error);
    }
};

const getLeads = async (req, res, next) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            leads,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createLead,
    getLeads,
};