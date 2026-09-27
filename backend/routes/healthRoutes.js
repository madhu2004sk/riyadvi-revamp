const express = require("express");

const {
    createHealthCheckup,
    getHealthCheckups,
} = require("../controllers/healthController");

const router = express.Router();

router.post("/", createHealthCheckup);
router.get("/", getHealthCheckups);

module.exports = router