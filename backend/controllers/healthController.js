const HealthCheckup = require("../models/HealthCheckup");

const createHealthCheckup = async (req, res, next) => {
    try {
        const {
            businessName,
            industry,
            currentTechnology,
            businessChallenges,
            goals,
            name,
            email,
            phone,
        } = req.body;

        if (!businessName || !name || !email) {
            return res.status(400).json({
                success: false,
                message: "Business name, name and email are required",
            });
        }

        const healthCheckup = await HealthCheckup.create({
            businessName,
            industry,
            currentTechnology,
            businessChallenges,
            goals,
            name,
            email,
            phone,
        });

        res.status(201).json({
            success: true,
            message: "Business health checkup submitted successfully",
            healthCheckup,
        });
    } catch (error) {
        next(error);
    }
};

const getHealthCheckups = async (req, res, next) => {
    try {
        const healthCheckups = await HealthCheckup.find().sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            healthCheckups,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createHealthCheckup,
    getHealthCheckups,
};