const Application = require("../models/Application");

const createApplication = async (req, res, next) => {
    try {
        const {
            name,
            email,
            phone,
            position,
            experience,
            skills,
            resume,
            coverLetter,
        } = req.body;

        if (!name || !email || !position) {
            return res.status(400).json({
                success: false,
                message: "Name, email and position are required",
            });
        }

        const application = await Application.create({
            name,
            email,
            phone,
            position,
            experience,
            skills,
            resume,
            coverLetter,
        });

        res.status(201).json({
            success: true,
            message: "Job application submitted successfully",
            application,
        });
    } catch (error) {
        next(error);
    }
};

const getApplications = async (req, res, next) => {
    try {
        const applications = await Application.find().sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            applications,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createApplication,
    getApplications,
};