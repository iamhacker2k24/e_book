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
uiRoutes.get("/searchBooks", async (req, res) => {
    try {

        const search = req.query.search?.trim();

        if (!search) {
            return res.status(400).json({
                success: false,
                msg: "Search text is required"
            });
        }
        const books = await bookData
            .find({
                $or: [
                    {
                        bookName: {
                            $regex: search,
                            $options: "i"
                        }
                    },
                    {
                        "author.name": {
                            $regex: search,
                            $options: "i"
                        }
                    }
                ]
            })
            .select("_id bookName coverPhoto author.name author.photo")
            .limit(20);
        return res.status(200).json({
            success: true,
            count: books.length,
            msg: books
        });

    } catch (error) {

        console.error("Search books error:", error);

        return res.status(500).json({
            success: false,
            msg: "Failed to search books",
            error: error.message
        });

    }
});


module.exports = uiRoutes;