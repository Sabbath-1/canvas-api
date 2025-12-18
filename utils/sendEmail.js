const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ subject, html }) => {
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.EMAIL_TO,
    subject,
    html,
  });
};

module.exports = sendEmail;
