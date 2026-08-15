const express = require("express")
const cors = require("cors")

const dbConnection = require("./config/db") 

const userRoutes=require("./routes/userRoutes")
const app = express();



app.use(express.json)
app.use(cors())


app.use("/api/user",userRoutes)




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