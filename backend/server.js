const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const contactRoutes = require("./routes/contactRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const healthRoutes = require("./routes/healthRoutes");
const leadRoutes = require("./routes/leadRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Riyadvi backend is running",
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "API is healthy",
    });
});

app.use("/api/contact", contactRoutes);
app.use("/api/consultation", consultationRoutes);
app.use("/api/health-checkup", healthRoutes);
app.use("/api/lead-magnet", leadRoutes);
app.use("/api/applications", applicationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});