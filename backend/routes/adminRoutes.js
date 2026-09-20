const express = require("express");
const User = require("../models/User");
const adminRoutes = express.Router()
const jwt = require("jsonwebtoken")
const multer = require('multer');
const { uploadPDF, uploadToCloudinary } = require("../config/cloudinary");
const bookData = require("../models/Book");
const newBannerData = require("../models/Banner");
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
adminRoutes.post(
    "/addproducts",
    upload.single("pdf"),
    async (req, res) => {
        const defalutPhoto = "https://img.magnific.com/free-vector/book-cover-template-design_1201-30.jpg?t=st=1789804524~exp=1789808124~hmac=022c5bcc9acd03f238d1f1083d8c4635c780d6972673497a5f2ab28319f20282&w=1480"

        try {


            const { BookName, Author, publsihingDate } = req.body;
            // console.log(BookName)


            ///need to add if els efor verifier okk 
            // if ((BookName && Author && publsihingDate)) {
            //     return res.status(400).json({
            //         success: false,
            //         message: "missing some details"
            //     })
            // }
            if (!req.file) {
                return res.status(400).json({
                    success: false,
                    message: "PDF file is required",
                });
            }

            // console.log("File name:", req.file.originalname);
            // console.log("File size:", req.file.size);
            // console.log("MIME type:", req.file.mimetype);

            const pdfUrl = await uploadPDF(
                req.file.buffer,
                req.file.originalname
            );
            const newBook = new bookData({
                BookName: BookName,
                Author: Author,
                publsihingDate: publsihingDate,
                pdfUrl: pdfUrl,
                coverPhoto: [{ url: defalutPhoto }]

            })
            await newBook.save();

            return res.status(200).json({
                success: true,
                message: "successfully uploaded ",
                pdfUrl,
            });

        } catch (error) {
            console.error("Upload error:", error);

            return res.status(500).json({
                success: false,
                message: "PDF upload failed",
                error: error.message,
            });
        }
    }
);


adminRoutes.post("/createbanner", upload.single("banner"), async (req, res) => {


    try {
        const imgUrl = await uploadToCloudinary(req.file.buffer);
        const { tittle, isnewPgeredirect, headerText, otherstext, expiry } = req.body;

        // console.log(tittle, isnewPgeredirect, headerText, otherstext, expiry)
        // console.log(imgUrl.url)

        const newBanner = new newBannerData({
            tittle: tittle,
            isnewPgeredirect: isnewPgeredirect,
            headerText: headerText,
            otherstext: otherstext,
            expiry: expiry,
            imgUrl: imgUrl.url
        })
        await newBanner.save();
        console.log(newBanner)
        res.status(200).json({
            success: true,
            msg: newBanner
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }

})

module.exports = adminRoutes