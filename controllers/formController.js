const Submission = require("../models/Submission");

exports.createSubmission = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const submission = await Submission.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      data: submission,
    });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
