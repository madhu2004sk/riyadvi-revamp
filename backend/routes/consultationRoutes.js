const express = require("express");

const {
    createConsultation,
    getConsultations,
} = require("../controllers/consultationController");

const router = express.Router();

router.post("/", createConsultation);
router.get("/", getConsultations);

module.exports = router;