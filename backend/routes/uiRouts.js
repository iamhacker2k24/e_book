const express = require("express");
const { banner, getAllBookData, getCategoryBookData, searchBooks } = require("../controlers/uiControllers");
const uiRouts = express.Router();

uiRouts.get("/banner", banner);
uiRouts.get("/getAllBookData", getAllBookData);
uiRouts.get("/getCategoryBookData", getCategoryBookData);
uiRouts.get("/searchBooks", searchBooks);

module.exports = uiRouts;
