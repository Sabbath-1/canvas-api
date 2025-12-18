const express = require("express");
const router = express.Router();
const { createSubmission } = require("../controllers/formController");
const formLimiter = require("../middleware/rateLimiter");

router.post("/", formLimiter, createSubmission);

module.exports = router;
