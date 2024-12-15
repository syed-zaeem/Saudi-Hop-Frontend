const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  category: { type: String, required: true }, // Category as a string
  question: { type: String, required: true }, // FAQ question
  answer: { type: String, required: true }, // FAQ answer
});

module.exports = mongoose.model("FAQ", faqSchema);
