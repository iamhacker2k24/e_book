const moogosh = require("mongoose")
const Schema = moogosh.Schema

const newBanner = new Schema(
    {
        eyebrow: String,
        title: String,
        highlightedTitle: String,
        description: String,
        heroImage: String,
        primaryButton: {
            text: String,
            link:String
        },
        // Secondary button
        secondaryButton: {
            text: String,
            link: String
        },
        stats: [
            {
                value: String,
                label: String
            }
        ],
        isActive: Boolean,
        order: Number,
        expireAt: Date
    }, {
    timestamps: true
}








)



const newBannerData = moogosh.model("newBanner", newBanner)
module.exports = newBannerData;