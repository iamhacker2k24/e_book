const { Resend } = require("resend");

const resend = new Resend("re_iGw3o2Af_A4YmRoXaLYuabQWRK29PTQmK");

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
        console.error("Email error:", error);
        throw new Error("Failed to send email");
    }

    console.log("Email sent:", data);
}

// sendOTP("mr.debabrtapc2006@gmail.com",56889);