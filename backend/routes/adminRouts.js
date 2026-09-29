const express = require("express");
const { login, dashboard, createBanner } = require("../controlers/adminControllers");
const upload = require("../middleware/upload");
const adminRouts = express.Router();

adminRouts.post("/login", login);
adminRouts.get("/dashboard", dashboard);
adminRouts.post("/createBanner", upload.single("heroImage"), createBanner);




module.exports = adminRouts;