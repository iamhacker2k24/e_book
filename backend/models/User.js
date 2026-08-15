const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userDetails = new Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"],
        minlength: true,

    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    isVerified: {
        type: Boolean,
        default: false,

    },
    profileIcon: {
        type: String,
        default: "dev",

    }

}, {
    timestamps: true
})

const User = mongoose.model('User', userDetails);

module.exports = User;
