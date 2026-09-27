const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
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

        company: {
            type: String,
            trim: true,
        },

        resource: {
            type: String,
            trim: true,
        },

        source: {
            type: String,
            default: "website",
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Lead", leadSchema);