const Submission = require("../models/Submission");
const sendEmail = require("../utils/sendEmail");

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

    res.status(201).json({ success: true });

    sendEmail({
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `,
    }).then(() => console.log("📨 sendEmail resolved")).catch(err => {
      console.error("Email failed:", err);
    });

  } catch (error) {
    console.error("Form error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
