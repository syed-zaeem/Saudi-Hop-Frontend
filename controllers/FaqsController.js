const FAQ = require("../models/Faq");
const logError = require("../Misc/ErrorLog");

// Create a new FAQ
exports.createFAQ = async (req, res) => {
  try {
    const { category, question, answer } = req.body;

    // Validate input
    if (!category || !question || !answer) {
      return res
        .status(400)
        .json({ error: "Category, question, and answer are required." });
    }

    const newFAQ = new FAQ({ category, question, answer });
    const savedFAQ = await newFAQ.save();
    res.status(201).json(savedFAQ);
  } catch (error) {
    logError(`Error in createFAQ: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Get all FAQs
exports.getAllFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.status(200).json(faqs);
  } catch (error) {
    logError(`Error in getAllFAQs: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Get FAQs by Category
exports.getFAQsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const faqs = await FAQ.find({ category });
    res.status(200).json(faqs);
  } catch (error) {
    logError(`Error in getFAQsByCategory: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Update an FAQ
exports.updateFAQ = async (req, res) => {
  try {
    const updatedFAQ = await FAQ.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFAQ) {
      return res.status(404).json({ error: "FAQ not found." });
    }
    res.status(200).json(updatedFAQ);
  } catch (error) {
    logError(`Error in updateFAQ: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Delete an FAQ
exports.deleteFAQ = async (req, res) => {
  try {
    const deletedFAQ = await FAQ.findByIdAndDelete(req.params.id);
    if (!deletedFAQ) {
      return res.status(404).json({ error: "FAQ not found." });
    }
    res.status(200).json({ message: "FAQ deleted successfully." });
  } catch (error) {
    logError(`Error in deleteFAQ: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};
