const express = require("express");
const multer = require("multer");
const path = require("path");
const fileController = require("../controllers/FileController");

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../uploads");
    cb(null, uploadDir); // Files will be stored in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save files with the original name
  },
});

const upload = multer({ storage });

// Routes
/**
 * @swagger
 * /files/upload:
 *   post:
 *     summary: Upload a file
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 filePath:
 *                   type: string
 *       400:
 *         description: No file uploaded
 */
router.post("/upload", upload.single("file"), fileController.uploadFile);

/**
 * @swagger
 * /files/{filename}:
 *   get:
 *     summary: Retrieve a file
 *     parameters:
 *       - in: path
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the file
 *     responses:
 *       200:
 *         description: File retrieved successfully
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: File not found
 */
router.get("/:filename", fileController.getFile);

module.exports = router;
