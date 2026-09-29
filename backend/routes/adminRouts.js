const express = require("express");
const { login, dashboard } = require("../controlers/adminControllers");
const adminRouts = express.Router();

adminRouts.post("/login", login);
adminRouts.get("/dashboard", dashboard);

module.exports = adminRouts;