const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    highlights: {
        type: [String],
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    description: {
        type: [String],
        required: true,
    },
    hotels: {
        type: [String], // Can later be changed to ObjectId references
        default: [],
    },
    category: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Package = mongoose.model("Package", PackageSchema);
module.exports = Package;
