const express = require("express")
const app = express();
const cors = require("cors")
app.use(cors())
const limiter = require("./middleware/rateLimmtter")
const dbConnection = require("./config/db") 
const Cookies = require('cookies')
const userRouter=require("./routes/userRoutes")

app.use(express.json())

// app.use(limiter)

app.get("/",(req,res)=>{
    res.send("server working ")
})


app.use("/api/user",userRouter)



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