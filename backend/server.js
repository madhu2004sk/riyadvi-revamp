const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(
    cors({
        origin: "http://localhost:5173",
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});