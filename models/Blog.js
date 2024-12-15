const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const blogSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  sections: [sectionSchema], // Array of sections
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema);
