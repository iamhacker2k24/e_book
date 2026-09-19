const cloudinary = require("cloudinary").v2;
const fs = require("fs");
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudnary = async (localFilepath) => {
    try {
        if (!localFilepath) {
            return null
        }
        const response = await cloudinary.uploader.upload(localFilepath, {
            resource_type: "auto"
        })
        console.log("uploaded", response.url)

    } catch (error) {
        // console.log(error)
        fs.unlinkSync(localFilepath)
    }
}