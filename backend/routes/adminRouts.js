const express = require("express");
const { login, dashboard, createBanner, addProducts } = require("../controlers/adminControllers");
const upload = require("../middleware/upload");
const adminRouts = express.Router();

adminRouts.post("/login", login);
adminRouts.get("/dashboard", dashboard);
adminRouts.post("/createBanner", upload.single("heroImage"), createBanner);
adminRouts.post("/addProducts", upload.fields([
    {
        name: "pdf",
        maxCount: 1
    },
    {
        name: "coverPhoto",
        maxCount: 10
    },
    {
        name: "authorPhoto",
        maxCount: 1
    }
]), addProducts);




module.exports = adminRouts;