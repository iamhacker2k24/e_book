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

//working this routes 
app.use("/api/user", userRouts)
// this is also working 
app.use("/api/admin", adminRouts)
// this also working
app.use("/api/users", uiRouts)


// users login , login , 
// admin => login , logout , create banner upload pdf book 
// for all i have banner,getAllBookData,getCategoryBookData,searchBooks

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