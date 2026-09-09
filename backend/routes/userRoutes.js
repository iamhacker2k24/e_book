const express = require("express");
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage });
const User = require("../models/User");
const vailduser = require("../utilis/validator");
const { Resend } = require("resend");
const userRouter = express.Router()
const jwt = require('jsonwebtoken');
const Cookies = require('cookies');
const isLoggedin = require("../utilis/islogedin");
const cloudinary = require("../config/cloudinary");
const uploadToCloudinary = require("../config/cloudinary");

userRouter.post("/login", upload.single("photo"), async (req, res) => {

    try {
        let { email, name, methode, otp, role, profileIcon } = req.body;
        // console.log(req.file.buffer);
        if (!methode || !["email", "otpverify"].includes(methode.trim().toLowerCase())) {
            return res.status(400).json({
                msg: "Please select a valid method: email or otpverify"
            });
        }

        if (role != "user") {
            req.body.role = "user" // this is going to convert all role to user ,admin alredy set here 
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

                if (req.file.buffer) {
                    const ans = await uploadToCloudinary(req.file.buffer);
                    console.log(ans.url);
                    req.body.profileIcon = ans.url;
                    console.log(req.body)
                }
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
                "isOtpVerified": true,
            }, 'THIS_IS_YOUR_SALT_KEY', { expiresIn: "1d" });
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
                    isOtpVerified: true,
                    otpExpiresAt: null
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

userRouter.get("/logout", async (req, res) => {
    await isLoggedin(req, res)

})

module.exports = userRouter;