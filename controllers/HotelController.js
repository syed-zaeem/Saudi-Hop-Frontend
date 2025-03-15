const Hotel = require("../models/Hotel.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Define Storage for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Store images in 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage }).array("files", 10);
// Controller Methods
const hotelController = {
    // Create New Hotel
    createHotel: async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: "Image upload failed", error: err.message });
            }

            console.log("Request Body:", req.body);
            console.log("Uploaded Files:", req.files);

            // Check for missing fields
            const missingFields = [];
            if (!req.body.title) missingFields.push("title");
            if (!req.body.price) missingFields.push("price");
            if (!req.body.description) missingFields.push("description");
            if (!req.body.tags) missingFields.push("tags");
            if (!req.body.facilities) missingFields.push("facilities");
            if (!req.body.rating) missingFields.push("rating");
            if (!req.body.destination) missingFields.push("destination");
            if (!req.body.location) missingFields.push("location");
            if (!req.files || req.files.length === 0) missingFields.push("images");

            // If any field is missing, return an error
            if (missingFields.length > 0) {
                return res.status(400).json({
                    message: "All fields are required",
                    missingFields
                });
            }

            try {
                const newHotel = new Hotel({
                    title: req.body.title,
                    images: req.files.map(file => file.path), // Extract image paths
                    price: req.body.price,
                    description: req.body.description,
                    tags: req.body.tags.split(","), // Convert to array
                    facilities: req.body.facilities.split(","), // Convert to array
                    rating: req.body.rating,
                    destination: req.body.destination,
                    location: req.body.location,
                });

                await newHotel.save();
                res.status(201).json({ message: "Hotel created successfully", hotel: newHotel });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    },

    // Get All Hotels
    getHotels: async (req, res) => {
        try {
            const hotels = await Hotel.find();
            res.status(200).json(hotels);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get Single Hotel by ID
    getHotelById: async (req, res) => {
        try {
            const hotel = await Hotel.findById(req.params.id);
            if (!hotel) return res.status(404).json({ message: "Hotel not found" });
            res.status(200).json(hotel);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete Hotel
    deleteHotel: async (req, res) => {
        try {
            const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
            if (!deletedHotel) return res.status(404).json({ message: "Hotel not found" });
            res.status(200).json({ message: "Hotel deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    editHotel: async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: "Image upload failed", error: err.message });
            }

            try {
                const hotel = await Hotel.findById(req.params.id);
                if (!hotel) {
                    return res.status(404).json({ message: "Hotel not found" });
                }

                // Extract form fields
                const updatedData = {
                    title: req.body.title || hotel.title,
                    price: req.body.price || hotel.price,
                    description: req.body.description || hotel.description,
                    tags: req.body.tags ? req.body.tags.split(",") : hotel.tags,
                    facilities: req.body.facilities ? req.body.facilities.split(",") : hotel.facilities,
                    rating: req.body.rating || hotel.rating,
                    destination: req.body.destination || hotel.destination,
                    location: req.body.location || hotel.location,
                };

                // Image Handling
                let updatedImages = [];

                // Handle Deleted Images
                if (req.body.deletedImages) {
                    const deletedImages = Array.isArray(req.body.deletedImages)
                        ? req.body.deletedImages
                        : [req.body.deletedImages]; // Ensure it's an array

                    deletedImages.forEach((imagePath) => {
                        const fileName = path.basename(imagePath); // Extract filename from path
                        const filePath = path.join(__dirname, "..", "uploads", fileName);

                        if (fs.existsSync(filePath)) {
                            fs.unlinkSync(filePath); // Delete image file
                        }
                    });

                    // Remove deleted images from the list
                    updatedImages = hotel.images.filter((img) => !deletedImages.includes(img));
                } else {
                    updatedImages = [...hotel.images]; // Keep existing images if none deleted
                }

                // Handle New Images
                if (req.files && req.files.length > 0) {
                    const newImagePaths = req.files.map((file) => file.filename);
                    updatedImages = [...updatedImages, ...newImagePaths];
                }

                updatedData.images = updatedImages; // Update image list in DB

                // Update Hotel
                const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, updatedData, {
                    new: true,
                    runValidators: true,
                });

                res.status(200).json({
                    message: "Hotel updated successfully",
                    hotel: updatedHotel,
                });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }

};

module.exports = hotelController;