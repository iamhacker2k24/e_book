const express = require("express");
const { login, logout } = require("../controlers/userControllers");
const userRouts = express.Router();

userRouts.post("/login", login);
userRouts.get("/logout", logout);

module.exports = userRouts;