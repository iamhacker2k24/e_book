const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookDetails = new Schema({
    BookName: {
        type: String,
        required: [true, "Book name is required"],
    },

    Author: {
        type: String,
        required: [true, "Author name is required"],
    },
    publsihingDate: {
        type: Date,
        required: true
    },
    coverPhoto: [
        {
            url: String
        }
    ],
    pdfUrl: {
        type: String
    }
});
const bookData = mongoose.model('bookData', BookDetails);

module.exports = bookData;
