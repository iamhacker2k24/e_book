const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors())
const limiter = require("./middleware/rateLimmtter")
const dbConnection = require("./config/db")
const cookieParser = require('cookie-parser')
const userRouts = require("./routes/userRouts");
const uiRouts = require("./routes/uiRouts");
const adminRouts = require("./routes/adminRouts");
app.use(cookieParser())
app.use(express.json())

// app.use(limiter)

app.get("/", (req, res) => {
    res.send("server working ")
})


app.use("/api", userRouts)
app.use("/api", adminRouts)
app.use("/api", uiRouts)




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