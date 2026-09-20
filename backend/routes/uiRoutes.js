const express = require("express");
const newBannerData = require("../models/Banner");
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
            mssg: err.message
        })
    }

})

module.exports = uiRoutes;