const express = require("express");
const newBannerData = require("../models/Banner");
const bookData = require("../models/Book");
const uiRoutes = express.Router();
uiRoutes.get("/banner", async (req, res) => {
    try {
        const banner = await newBannerData.find({});

        res.status(200).json({
            sucess: true,
            mssg: banner
        })
    } catch (err) {
        res.status(200).json({
            sucess: true,
            msg: err.message
        })
    }

})


uiRoutes.get("/getAllBookData", async (req, res) => {
    const pageSize = Math.min(
        Number(req.query.pagesize) || 20,
        100
    );

    const totalBooks = await bookData.countDocuments();
    const data = await bookData.find({}).select("-ebookFile").limit(pageSize);;
    res.status(200).json({
        sucess: true,
        msg: totalBooks,
        Data: data
    })
})


uiRoutes.get("/getCategoryBookData", async (req, res) => {
    const category = req.query.catagory
    console.log(category);
    if (!category) {
        return res.status(400).json({
            success: false,
            message: "Category is required"
        });
    }
    const data = await bookData
        .find({
            category: category.trim()
        })
        .select("-ebookFile.url");

    res.status(200).json({
        sucess: true,
        msg: data
    })
})

module.exports = uiRoutes;