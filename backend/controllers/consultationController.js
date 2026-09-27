const Consultation = require("../models/Consultation");

const createConsultation = async (req, res, next) => {
    try {
        const {
            name,
            email,
            phone,
            company,
            service,
            preferredDate,
            message,
        } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and email are required",
            });
        }

        const consultation = await Consultation.create({
            name,
            email,
            phone,
            company,
            service,
            preferredDate,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Consultation request submitted successfully",
            consultation,
        });
    } catch (error) {
        next(error);
    }
};

const getConsultations = async (req, res, next) => {
    try {
        const consultations = await Consultation.find().sort({
            createdAt: -1,
        });
        res.json({
            success: true,
            consultations,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createConsultation,
    getConsultations,
};