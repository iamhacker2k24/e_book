const { Resend } = require("resend");
require('dotenv').config()
const resend = new Resend(process.env.RESENT_API_KEY);

async function sendOTP(email, otp) {
    const { data, error } = await resend.emails.send({
        from: "Your App <onboarding@resend.dev>",
        to: [email],
        subject: "Your verification code",
        html: `
            <h2>Email Verification</h2>
            <p>Your OTP is:</p>
            <h1>${otp}</h1>
            <p>This code will expire soon.</p>
        `
    });

    if (error) {
        console.error("Email error:", error.message);
        throw new Error("Failed to send email");
    }

    console.log("Email sent:", data);
}

module.exports = sendOTP

// sendOTP("mr.debabrtapc2006@gmail.com", 56889);