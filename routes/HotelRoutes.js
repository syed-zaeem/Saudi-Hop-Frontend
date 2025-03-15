const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/HotelController");

// ✅ Get all hotels
router.get("/", hotelController.getHotels);

// ✅ Get a specific hotel by ID
router.get("/:id", hotelController.getHotelById);

// ✅ Create a new hotel
router.post("/create", hotelController.createHotel);

// ✅ Update an existing hotel
router.put("/:id", hotelController.editHotel);

// ✅ Delete a hotel
router.delete("/:id", hotelController.deleteHotel);

module.exports = router;
