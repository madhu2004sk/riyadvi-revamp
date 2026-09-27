const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            trim: true,
        },

        position: {
            type: String,
            required: true,
            trim: true,
        },

        experience: {
            type: String,
            trim: true,
        },

        skills: {
            type: String,
            trim: true,
        },

        resume: {
            type: String,
            trim: true,
        },

        coverLetter: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Application", applicationSchema);