const express = require("express");
const User = require("../models/User");
const vailduser = require("../utilis/validator");
const userRouter = express.Router()


userRouter.post("/login", async(req, res) => {

    try {
        vailduser(req.body)
        await User.create(req.body)
        res.send("working")
    } catch (error) {

        res.status(400).json({
            msg:"error happen from user login "
        })
    }
})


module.exports = userRouter;