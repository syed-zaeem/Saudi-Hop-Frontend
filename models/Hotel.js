const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    images: { type: [String], default: [] },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    tags: { type: [String], default: [] },
    facilities: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    destination: { type: String, required: true },
    location: { type: String, required: true },
});

module.exports = mongoose.model("Hotel", HotelSchema);
