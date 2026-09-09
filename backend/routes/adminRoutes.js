const express = require("express");
const User = require("../models/User");
const adminRoutes = express.Router()
const jwt = require("jsonwebtoken")
const multer = require('multer');
const {uploadPDF} = require("../config/cloudinary");
const storage = multer.memoryStorage();
const upload = multer({ storage });

adminRoutes.post("/login", async (req, res) => {
    const { email } = req.body;
    // console.log(req.body);
    const findAdmin = await User.findOne({ email })
    if (!findAdmin) {
        return res.status(400).json({
            msg: "oye pehele admin banja fir yea backchodi karna"
        })
    }

    // now convrt this to cookies and now usser converted to admin for axcess

    const token = jwt.sign({
        "id": findAdmin._id,
        "isOtpVerified": true,
    }, 'THIS_IS_YOUR_SALT_KEY', { expiresIn: "1d" });
    console.log(token)
    res.cookie("admin_cookies", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000
    });
    // console.log(findAdmin)

    res.status(200).json({
        msg: " Admin login done, lo bro ji lo jidengi"
    })
})

adminRoutes.get("/dashboard", async (req, res) => {
    // res.send("working ")
    const allUser = await User.find({}).select("name").select("email").select("role").select("profileIcon");
    console.log(allUser)
    res.send(allUser)

})
adminRoutes.post("/addproducts", upload.single("pdf") ,async (req, res) => {
    console.log(req.file.buffer);
    // console.log(req.file.buffer);
       const ans = await  uploadPDF(req.file.buffer, req.file.originalname);
    res.send(ans);
})

module.exports = adminRoutes