const moogosh = require("mongoose")
const Schema = moogosh.Schema

const newBanner = new Schema({
    tittle: {
        type: String
    },
    externallink: {
        type: String
    },
    isnewPgeredirect: {
        type: Boolean
    },
    headerText: {
        type: String
    },
    otherstext: {
        type: String,
    },
    expiry: {
        type: Date || String
    },
    imgUrl: {
        type: String
    }

})

const newBannerData = moogosh.model("newBanner", newBanner)
module.exports = newBannerData;