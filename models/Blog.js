const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    paragraphs: [
      {
        id: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],
    tags: [{ type: String }],
    image: { type: String, required: true }, // Store image URL (or use Buffer if storing binary)
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
