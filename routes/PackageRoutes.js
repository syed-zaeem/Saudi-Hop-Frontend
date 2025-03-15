const express = require("express");
const router = express.Router();
const packageController = require("../controllers/PackageController");

// ✅ Get all hotels
router.get("/", packageController.getPackages);

// ✅ Get a specific hotel by ID
router.get("/:id", packageController.getPackageById);

// ✅ Create a new hotel
router.post("/create", packageController.createPackage);

// ✅ Update an existing hotel
router.put("/:id", packageController.editPackage);

// ✅ Delete a hotel
router.delete("/:id", packageController.deletePackage);

module.exports = router;
