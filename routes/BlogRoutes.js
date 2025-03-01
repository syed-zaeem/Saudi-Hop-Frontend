const express = require("express");
const blogController = require("../controllers/BlogController");

const router = express.Router();

router.post("/create", blogController.createBlog);
router.get("/search", blogController.getAllBlog)
router.delete("/", blogController.deleteBlog)
module.exports = router;
