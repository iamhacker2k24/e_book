// this is admin page  completed 
const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken")
const multer = require('multer');
const { uploadPDF, uploadToCloudinary, uploadImage } = require("../config/cloudinary");
const bookData = require("../models/Book");
const newBannerData = require("../models/Banner");
const storage = multer.memoryStorage();
const upload = multer({ storage });


//working .....
const login = async (req, res) => {
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
}

// ADMIN DASHBOARD
//working...
const dashboard = async (req, res) => {
    try {
        const allUser = await User.find({})
            .select("name email role profileIcon");
        console.log(allUser);
        return res.status(200).json({
            success: true,
            users: allUser
        });
    } catch (error) {
        console.error("Dashboard error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to get users",
            error: error.message
        });
    }
};

// ADD PRODUCT / BOOK

// const addProducts = async (req, res) => {
//     try {
//         console.log("BODY:");
//         console.log(req.body);
//         console.log("FILES:");
//         console.log(req.files);
//         // GET FILES
//         const pdfFile = req.files?.pdf?.[0];
//         const coverFiles =
//             req.files?.coverPhoto || [];
//         const authorPhotoFile =
//             req.files?.authorPhoto?.[0];

//         // REQUIRED PDF

//         if (!pdfFile) {
//             return res.status(400).json({
//                 success: false,
//                 message: "PDF file is required"
//             });
//         }

//         // GET BODY

//         const {
//             bookName,
//             slug,
//             subtitle,
//             description,
//             shortDescription,
//             authorName,
//             authorBio,
//             publisher,
//             publishingDate,
//             language,
//             edition,
//             isbn,
//             pages,
//             category,
//             subCategory,
//             tags,
//             price,
//             originalPrice,
//             discount,
//             currency,
//             availability,
//             metaTitle,
//             metaDescription,
//             keywords
//         } = req.body;

//         // VALIDATION

//         if (!bookName) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Book name is required"
//             });
//         }
//         if (!description) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Book description is required"
//             });
//         }
//         if (!authorName) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Author name is required"
//             });
//         }
//         if (!category) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Category is required"
//             });
//         }
//         if (
//             price === undefined ||
//             price === null ||
//             price === ""
//         ) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Price is required"
//             });
//         }
//         // UPLOAD PDF
//         console.log("Uploading PDF...");
//         const pdfResult = await uploadPDF(
//             pdfFile.buffer,
//             pdfFile.originalname
//         );

//         console.log(
//             "PDF uploaded:",
//             pdfResult
//         );
//         // UPLOAD COVER PHOTOS
//         const coverPhotoUrls = [];
//         for (const file of coverFiles) {
//             console.log(
//                 "Uploading cover:",
//                 file.originalname
//             );
//             const coverResult =
//                 await uploadImage(
//                     file.buffer,
//                     file.originalname
//                 );
//             coverPhotoUrls.push(
//                 coverResult.url
//             );
//         }
//         // AUTHOR PHOTO
//         let authorPhotoUrl = "";
//         if (authorPhotoFile) {
//             console.log(
//                 "Uploading author photo:",
//                 authorPhotoFile.originalname
//             );
//             const authorResult =
//                 await uploadImage(
//                     authorPhotoFile.buffer,
//                     authorPhotoFile.originalname
//                 );

//             authorPhotoUrl =
//                 authorResult.url;
//         }
//         // TAGS
//         let finalTags = [];
//         if (tags) {

//             if (Array.isArray(tags)) {

//                 finalTags = tags;

//             } else {

//                 finalTags = tags
//                     .split(",")
//                     .map(tag => tag.trim())
//                     .filter(Boolean);
//             }
//         }

//         // SEO KEYWORDS
//         let finalKeywords = [];

//         if (keywords) {

//             if (Array.isArray(keywords)) {

//                 finalKeywords = keywords;

//             } else {
//                 finalKeywords = keywords
//                     .split(",")
//                     .map(keyword => keyword.trim())
//                     .filter(Boolean);
//             }
//         }

//         // CREATE BOOK

//         const newBook = new bookData({
//             // BASIC INFORMATION
//             bookName,
//             slug:
//                 slug || undefined,
//             subtitle:
//                 subtitle || "",
//             description,
//             shortDescription:
//                 shortDescription || "",
//             // AUTHOR
//             author: {
//                 name: authorName,
//                 bio:
//                     authorBio || "",
//                 photo:
//                     authorPhotoUrl || ""
//             },
//             // PUBLISHING
//             publisher:
//                 publisher || "",
//             publishingDate:
//                 publishingDate || undefined,
//             language:
//                 language || "English",
//             edition:
//                 edition || "",
//             isbn:
//                 isbn || "",
//             pages:
//                 pages
//                     ? Number(pages)
//                     : undefined,
//             // CATEGORY
//             category,
//             subCategory:
//                 subCategory || "",
//             tags:
//                 finalTags,
//             // COVER
//             coverPhoto:
//                 coverPhotoUrls,
//             // PRICE
//             price:
//                 Number(price),
//             originalPrice:
//                 originalPrice !== undefined &&
//                     originalPrice !== ""
//                     ? Number(originalPrice)
//                     : undefined,
//             discount:
//                 discount !== undefined &&
//                     discount !== ""
//                     ? Number(discount)
//                     : 0,

//             currency:
//                 currency || "INR",
//             // EBOOK
//             ebookFile: {
//                 url:
//                     pdfResult.url ||
//                     pdfResult,

//                 publicId:
//                     pdfResult.publicId ||
//                     "",

//                 fileName:
//                     pdfFile.originalname,

//                 fileType:
//                     "pdf",

//                 fileSize:
//                     pdfFile.size
//             },
//             // STATUS

//             availability:
//                 availability
//                     ? availability.trim()
//                     : "available",

//             // SEO
//             seo: {
//                 metaTitle:
//                     metaTitle || "",
//                 metaDescription:
//                     metaDescription || "",
//                 keywords:
//                     finalKeywords
//             }
//         });
//         // SAVE
//         const savedBook =
//             await newBook.save();
//         // RESPONSE
//         return res.status(201).json({
//             success: true,
//             message:
//                 "Book successfully uploaded",
//             book:
//                 savedBook
//         });
//     } catch (error) {
//         console.error(
//             "Add product error:",
//             error
//         );

//         return res.status(500).json({

//             success: false,

//             message:
//                 "Book upload failed",

//             error:
//                 error.message
//         });
//     }
// };

// CREATE BANNER

const createBanner = async (req, res) => {
    try {
        // CHECK IMAGE
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);
        if (!req.file) {
            return res.status(400).json({
                success: false,
                msg:
                    "Hero image is required"
            });
        }
        // UPLOAD IMAGE
        const imgUrl =
            await uploadToCloudinary(
                req.file.buffer
            );
        // PARSE BANNER DATA
        const bannerData =
            JSON.parse(
                req.body.bannerData
            );
        // CREATE BANNER
        const newBanner =
            new newBannerData({
                eyebrow:
                    bannerData.eyebrow,
                title:
                    bannerData.title,
                highlightedTitle:
                    bannerData.highlightedTitle,
                description:
                    bannerData.description,
                heroImage:
                    imgUrl.url,
                primaryButton:
                    bannerData.primaryButton,
                secondaryButton:
                    bannerData.secondaryButton,
                stats:
                    bannerData.stats,
                isActive:
                    bannerData.isActive,
                order:
                    bannerData.order,
                expireAt:
                    bannerData.expireAt
            });
        // SAVE
        await newBanner.save();
        // RESPONSE
        return res.status(201).json({
            success: true,
            msg: "Banner created successfully",
            banner: newBanner
        });
    } catch (error) {
        console.error(
            "Create banner error:",
            error
        );
        return res.status(400).json({
            success: false,
            msg:
                error.message
        });
    }
};

// EXPORT

module.exports = {
    login,
    dashboard,
    // addProducts,
    createBanner
};


