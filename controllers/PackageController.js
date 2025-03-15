const Package = require("../models/Package.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage }).single("img");

const packageController = {
    // Create a New Package
    createPackage: async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: "Image upload failed", error: err.message });
            }

            console.log("Request Body:", req.body);
            console.log("Uploaded File:", req.file);

            // Validate required fields
            const missingFields = ["title", "price", "description", "highlights", "rating", "category"].filter(field => !req.body[field]);
            if (!req.file) missingFields.push("img");

            if (missingFields.length > 0) {
                return res.status(400).json({ message: "All fields are required", missingFields });
            }

            try {
                const newPackage = new Package({
                    img: "uploads/" + req.file.filename, // Store image path
                    title: req.body.title,
                    price: req.body.price,
                    highlights: req.body.highlights.split(","), // Convert to array
                    rating: req.body.rating,
                    description: req.body.description.split(","), // Convert to array
                    hotels: req.body.hotels ? req.body.hotels.split(",") : [],
                    category: req.body.category,
                });

                await newPackage.save();
                res.status(201).json({ message: "Package created successfully", package: newPackage });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    },

    // Get All Packages
    getPackages: async (req, res) => {
        try {
            const packages = await Package.find();
            res.status(200).json(packages);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get Single Package by ID
    getPackageById: async (req, res) => {
        try {
            const packageItem = await Package.findById(req.params.id);
            if (!packageItem) return res.status(404).json({ message: "Package not found" });
            res.status(200).json(packageItem);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update a Package
    editPackage: async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: "Image upload failed", error: err.message });
            }

            try {
                const packageItem = await Package.findById(req.params.id);
                if (!packageItem) {
                    return res.status(404).json({ message: "Package not found" });
                }

                // Extract form fields
                const updatedData = {
                    title: req.body.title || packageItem.title,
                    price: req.body.price || packageItem.price,
                    highlights: req.body.highlights ? req.body.highlights.split(",") : packageItem.highlights,
                    rating: req.body.rating || packageItem.rating,
                    description: req.body.description ? req.body.description.split(",") : packageItem.description,
                    hotels: req.body.hotels ? req.body.hotels.split(",") : packageItem.hotels,
                    category: req.body.category || packageItem.category,
                };

                // Handle Image Replacement
                if (req.file) {
                    const oldImagePath = packageItem.img;
                    if (fs.existsSync(oldImagePath)) {
                        fs.unlinkSync(oldImagePath); // Delete old image from storage
                    }
                    updatedData.img = "uploads/" + req.file.filename;
                }

                // Update Package
                const updatedPackage = await Package.findByIdAndUpdate(req.params.id, updatedData, { new: true, runValidators: true });

                res.status(200).json({ message: "Package updated successfully", package: updatedPackage });
            } catch (error) {
                console.error("Error updating package:", error);
                res.status(500).json({ error: error.message });
            }
        });
    },

    // Delete a Package
    deletePackage: async (req, res) => {
        try {
            const packageItem = await Package.findById(req.params.id);
            if (!packageItem) return res.status(404).json({ message: "Package not found" });

            // Delete package image from storage
            if (packageItem.img) {
                const filePath = path.join(__dirname, "..", packageItem.img);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                    console.log(`Deleted image: ${filePath}`);
                }
            }

            await Package.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Package deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = packageController;
