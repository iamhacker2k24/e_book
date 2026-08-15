const express = require("express");
const multer  = require('multer')
const upload = multer();
const User = require("../models/User");
const vailduser = require("../utilis/validator");
const userRouter = express.Router()


userRouter.post("/login",upload.none(),  async (req, res) => { // this for login or registration 

    try {
        let { email, password } = req.body;
        
        console.log(email)
        // const exitsUser = await User.findOne({ email })
        // console.log(exitsUser)
        // if (exitsUser) { // user exits then this loop works 
        //     // let password = req.body.password
        //     // console.log(req.body.password)
        //     console.log("ok")
        //     res.status(200).json(exitsUser)
        // }

        // else {
        //     //  res.status(200).json(exitsUser)
        //     res.send("se")

        // }
        // // await User.create(req.body)

    } catch (error) {
        res.status(400).json({
            msg: "error happen from user login "
        })
    }
})

userRouter.get("/logout", (req, res) => {

})

module.exports = userRouter;