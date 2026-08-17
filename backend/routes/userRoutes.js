const express = require("express");
const multer = require('multer')
const upload = multer();
const User = require("../models/User");
const vailduser = require("../utilis/validator");
const { Resend } = require("resend");
const userRouter = express.Router()
const jwt = require('jsonwebtoken');
const Cookies = require('cookies')

userRouter.post("/login", upload.none(), async (req, res) => {

    try {
        let { email, name, methode, otp } = req.body;

        if (!methode || !["email", "otpverify"].includes(methode.trim().toLowerCase())) {
            return res.status(400).json({
                msg: "Please select a valid method: email or otpverify"
            });
        }

        const alreadyExists = await User.findOne({ email });

        const code = String(
            Math.floor(Math.random() * 10000)
        ).padStart(4, "0");
        const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); //3 minits of otp expiry

        // console.log("OTP:", code);


        //send otp 
        if (methode.trim().toLowerCase() === "email") {

            if (alreadyExists) {

                await User.findByIdAndUpdate(
                    alreadyExists._id,
                    {
                        otp: code,
                        isOtpVerified: false,
                        otpExpiresAt: otpExpiresAt
                    }
                );

                console.log("Existing user - OTP updated");

            } else {

                const user = new User({
                    name: name,
                    email: email,
                    otp: code,
                    isOtpVerified: false,
                    otpExpiresAt: otpExpiresAt
                });

                await user.save();

                console.log("New user created");
            }

            // Resend(email, code)

            return res.status(200).json({
                msg: "OTP sent successfully"
            });
        }


        // verify otp 

        if (methode.trim().toLowerCase() === "otpverify") {

            if (!otp) {
                return res.status(400).json({
                    msg: "OTP is required"
                });
            }

            const data = await User.findOne({ email });

            if (!data) {
                return res.status(404).json({
                    msg: "User not found"
                });
            }

            if (data.otp !== otp) {
                return res.status(400).json({
                    msg: "Wrong OTP"
                });
            }
            if (data.otpExpiresAt < new Date()) {
                return res.status(400).json({
                    msg: "OTP expired"
                });
            }
            const token = jwt.sign({
                "id": data._id,
                "isOtpVerified": data.isOtpVerified,
                "otpExpiresAt": data.otpExpiresAt
            }, 'THIS_IS_YOUR_SALT_KEY');
            console.log(token)
            res.cookie("login", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000
            });
            await User.findByIdAndUpdate(
                data._id,
                {
                    otp: null,
                    isOtpVerified: true
                }
            );


            return res.status(200).json({
                msg: "OTP verified successfully"
            });
        }

    } catch (error) {

        return res.status(400).json({
            msg: error.message
        });
    }
});

userRouter.get("/logout", (req, res) => {

})

module.exports = userRouter;