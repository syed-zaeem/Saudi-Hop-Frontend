const Blog = require("../models/Blog");
const logError = require("../Misc/ErrorLog");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { image, title, description, sections } = req.body;

    // Validate input
    if (!image || !title || !description) {
      return res
        .status(400)
        .json({ error: "Image, title, and description are required." });
    }

    // Create a new blog document
    const newBlog = new Blog({
      image,
      title,
      description,
      sections,
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    logError(`Error in createBlog: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    logError(`Error in getAllBlogs: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found." });
    }
    res.status(200).json(blog);
  } catch (error) {
    logError(`Error in getBlogById: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};
exports.getLatestBlogs = async (req, res) => {
  try {
    // Retrieve blogs sorted by timestamp (latest first)
    const blogs = await Blog.find().sort({ timestamp: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    logError(`Error in getLatestBlogs: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found." });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    logError(`Error in updateBlog: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found." });
    }

    res.status(200).json({ message: "Blog deleted successfully." });
  } catch (error) {
    logError(`Error in deleteBlog: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};
