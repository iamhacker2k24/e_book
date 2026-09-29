const express = require("express");
const { login, logout } = require("../controlers/userControllers");
const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.get("/logout", logout);

module.exports = userRouter;