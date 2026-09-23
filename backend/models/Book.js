const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookDetails = new Schema(
    {
       // BASIC BOOK INFORMATIO
        bookName: {
            type: String,
            required: true,
            trim: true
        },
        //slug must be unique 
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true
        },
        subtitle: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        shortDescription: {
            type: String,
            trim: true
        },
        //             =
        // AUTHOR INFORMATION
        //             =

        author: {
            name: {
                type: String,
                required: true,
                trim: true
            },

            bio: {
                type: String,
                trim: true
            },

            photo: {
                type: String,
                trim: true
            }
        },
        // PUBLISHING INFORMATION 

        publisher: {
            type: String,
            trim: true
        },

        publishingDate: {
            type: Date
        },

        language: {
            type: String,
            default: "English",
            trim: true
        },

        edition: {
            type: String,
            trim: true
        },

        isbn: {
            type: String,
            trim: true
        },

        pages: {
            type: Number,
            min: 0
        },

        //             =
        // CATEGORY
        //             =

        category: {
            type: String,
            required: true,
            trim: true
        },

        subCategory: {
            type: String,
            trim: true
        },

        tags: [
            {
                type: String,
                trim: true
            }
        ],

        //             =
        // COVER IMAGES
        //             =

        coverPhoto: [
            {
                type: String,
                trim: true
            }
        ],

        // Optional preview images
        previewImages: [
            {
                type: String,
                trim: true
            }
        ],

        //             =
        // PRICE
        //             =

        price: {
            type: Number,
            required: true,
            min: 0
        },

        originalPrice: {
            type: Number,
            min: 0
        },

        discount: {
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },

        currency: {
            type: String,
            default: "INR",
            uppercase: true
        },

        //             =
        // EBOOK FILE
        //             =

        ebookFile: {
            url: {
                type: String,
                trim: true
            },

            publicId: {
                type: String,
                trim: true
            },

            fileName: {
                type: String,
                trim: true
            },

            fileType: {
                type: String,
                enum: ["pdf", "epub", "mobi", "other"],
                default: "pdf"
            },

            fileSize: {
                type: Number,
                min: 0
            }
        },


        //             =
        // RATING & REVIEWS
        //             =

        rating: {
            average: {
                type: Number,
                default: 0,
                min: 0,
                max: 5
            },

            count: {
                type: Number,
                default: 0,
                min: 0
            }
        },

        //             =
        // SALES
        //             =

        salesCount: {
            type: Number,
            default: 0,
            min: 0
        },

        viewCount: {
            type: Number,
            default: 0,
            min: 0
        },

        //             =
        // PRODUCT STATUS
        //             =

        isActive: {
            type: Boolean,
            default: true
        },

        isFeatured: {
            type: Boolean,
            default: false
        },

        isBestSeller: {
            type: Boolean,
            default: false
        },

        isNew: {
            type: Boolean,
            default: true
        },

        //             =
        // STOCK / AVAILABILITY
        //             =

        availability: {
            type: String,
            enum: [
                "available",
                "unavailable",
                "coming_soon"
            ],
            default: "available"
        },

        //             =
        // SEO
        //             =

        seo: {
            metaTitle: {
                type: String,
                trim: true
            },

            metaDescription: {
                type: String,
                trim: true
            },

            keywords: [
                {
                    type: String,
                    trim: true
                }
            ]
        },

        //             =
        // ADMIN INFORMATION
        //             =

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },

    {
        timestamps: true
    }
);

const bookData = mongoose.model('BookDetails', BookDetails);

module.exports = bookData;



