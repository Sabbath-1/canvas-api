const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ subject, html }) => {
  console.log("📧 Attempting to send email...");

  const response = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.EMAIL_TO,
    subject,
    html,
  });

  console.log("✅ Email API response:", response);
};

module.exports = sendEmail;
