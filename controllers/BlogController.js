const Blog = require("../models/Blog");
const logError = require("../Misc/ErrorLog");
const multer = require("multer");
const path = require("path");

// Multer Storage for Image Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage }).single("image");

// Create a new blog
exports.createBlog = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: "Image upload failed" });
    }

    try {
      const { title, paragraphs, tags } = req.body;

      // Validate input
      if (!req.file || !title || !paragraphs) {
        return res
          .status(400)
          .json({ error: "Image, title, and paragraphs are required." });
      }

      // Parse paragraphs
      const parsedParagraphs = JSON.parse(paragraphs);

      // Create new blog document
      const newBlog = new Blog({
        title,
        paragraphs: parsedParagraphs,
        tags,
        image: req.file.path, // Store image path
      });

      const savedBlog = await newBlog.save();
      res.status(201).json(savedBlog);
    } catch (error) {
      logError(`Error in createBlog: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  });
};


exports.getAllBlog = async (req, res) => {
  try {
    const { query } = req.query; // Get the search term from the request

    let blogs;
    if (query) {
      // Search by title or tags (case insensitive)
      blogs = await Blog.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { tags: { $regex: query, $options: "i" } },
        ],
      }).sort({ createdAt: -1 }); // Sort by latest first
    } else {
      // Return all blogs sorted by latest first
      blogs = await Blog.find().sort({ createdAt: -1 });
    }

    res.status(200).json(blogs);
  } catch (error) {
    logError(`Error in getAllBlog: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};



exports.deleteBlog = async (req, res) => {
  try {
    const { _id } = req.body; // Extract blog ID from request body

    if (!_id) {
      return res.status(400).json({ success: false, message: "Blog ID is required" });
    }

    // Find and delete the blog
    const deletedBlog = await Blog.findByIdAndDelete(_id);

    if (!deletedBlog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.json({ success: true, message: "Blog deleted successfully", deletedBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};