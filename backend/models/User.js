const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user = new Schema({
    fullName: {
        type: String,
        require: true,
        minlength: true,

    },
    email: {
        type: email,
        require: true,
        trim: true
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

const User = mongoose.model('User', userSchema);

module.exports = User;
