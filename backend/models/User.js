const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userDetails = new Schema({
    name: {
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
    otp: {
        type: Number,
        trim: true
    },
    isOtpVerified: {
        type: Boolean,
        default: false,

    },
    otpExpiresAt: {
        type: Date
    },
    profileIcon: {
        type: String,
        default: "user",
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }

}, {
    timestamps: true
})

const User = mongoose.model('User', userDetails);

module.exports = User;
