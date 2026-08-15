const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ebook_store")
        console.log("Database connected ")

    } catch (error) {
        console.log("error in databse connection ", error.message)
    }


}

module.exports = dbConnection;