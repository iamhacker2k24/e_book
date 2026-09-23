const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors())
const limiter = require("./middleware/rateLimmtter")
const dbConnection = require("./config/db")
const cookieParser = require('cookie-parser')
const userRouter=require("./routes/userRoutes")
const adminRoutes = require ("./routes/adminRoutes");
const uiRoutes = require("./routes/uiRoutes");
app.use(cookieParser())
app.use(express.json())

// app.use(limiter)

app.get("/",(req,res)=>{
    res.send("server working ")
})


app.use("/api/user",userRouter)
app.use("/api/admin",adminRoutes)
app.use("/api/ui",uiRoutes)


const dbServer = async () => {

    try {
        await dbConnection().then(() => {
            app.listen(3000, () => {
                console.log("server started at 3000")
            })
        })
    } catch (error) {
        console.log("error in server  connection ", error.message)
    }

}
dbServer();