require('dotenv').config()
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "ebooks"
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    stream.end(buffer);
  });
}

const uploadPDF = async (fileBuffer, fileName) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
        folder: "pdfs",
        public_id: fileName.replace(/\.[^/.]+$/, ""),
        format: "pdf",
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary PDF upload error:", error);
          reject(error);
        } else {
          console.log("PDF uploaded:", result.secure_url);
          resolve(result.secure_url);
        }
      }
    ).end(fileBuffer);
  });
};




const uploadImage = (buffer, originalName) => {

  return new Promise((resolve, reject) => {

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "ebook/covers",
        resource_type: "image"
      },

      (error, result) => {

        if (error) {
          return reject(error);
        }

        resolve({
          url: result.secure_url,
          publicId: result.public_id
        });
      }
    );

    stream.end(buffer);
  });
};



module.exports = { uploadToCloudinary, uploadPDF, uploadImage };