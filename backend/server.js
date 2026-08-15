const express = require("express")
const cors = require("cors")
const dbConnection = require("./config/db")
const app = express();
app.use(express.json)
app.use(cors())



const dbServer = async () => {

    try {
        await dbConnection().then(() => {
            app.listen(3000, () => {
                console.log("server started at 3000")
            })
        })
    } catch (error) {

    }


}
dbServer();