const express = require("express");
const router = express.Router();
const {
  createSubmission,
} = require("../controllers/formController");

router.post("/", createSubmission);

module.exports = router;
