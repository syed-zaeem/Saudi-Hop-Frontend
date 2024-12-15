const express = require("express");
const faqController = require("../controllers/FaqsController");

const router = express.Router();

/**
 * @swagger
 * /faqs:
 *   post:
 *     summary: Create a new FAQ
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 example: "General"
 *               question:
 *                 type: string
 *                 example: "What is your return policy?"
 *               answer:
 *                 type: string
 *                 example: "Our return policy allows returns within 30 days."
 *     responses:
 *       201:
 *         description: FAQ created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Validation error
 */
router.post("/", faqController.createFAQ);

/**
 * @swagger
 * /faqs:
 *   get:
 *     summary: Retrieve all FAQs
 *     responses:
 *       200:
 *         description: A list of all FAQs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Server error
 */
router.get("/", faqController.getAllFAQs);

/**
 * @swagger
 * /faqs/{category}:
 *   get:
 *     summary: Retrieve FAQs by category
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: The category name
 *     responses:
 *       200:
 *         description: FAQs filtered by category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
router.get("/:category", faqController.getFAQsByCategory);

/**
 * @swagger
 * /faqs/{id}:
 *   put:
 *     summary: Update an FAQ by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the FAQ
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 example: "General"
 *               question:
 *                 type: string
 *                 example: "Updated Question?"
 *               answer:
 *                 type: string
 *                 example: "Updated Answer."
 *     responses:
 *       200:
 *         description: FAQ updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: FAQ not found
 *       500:
 *         description: Server error
 */
router.put("/:id", faqController.updateFAQ);

/**
 * @swagger
 * /faqs/{id}:
 *   delete:
 *     summary: Delete an FAQ by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the FAQ
 *     responses:
 *       200:
 *         description: FAQ deleted successfully
 *       404:
 *         description: FAQ not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", faqController.deleteFAQ);

module.exports = router;
