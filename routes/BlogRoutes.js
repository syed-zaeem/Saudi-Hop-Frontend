const express = require("express");
const blogController = require("../controllers/BlogController");

const router = express.Router();

// Blog Routes
/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create a new blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "My First Blog"
 *               description:
 *                 type: string
 *                 example: "This is a blog description."
 *               image:
 *                 type: string
 *                 example: "data:image/jpeg;base64,/9j/4AAQSkZ..."
 *               sections:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "Section Title"
 *                     image:
 *                       type: string
 *                       example: "data:image/jpeg;base64,/9j/4AAQSkZ..."
 *                     description:
 *                       type: string
 *                       example: "Section description."
 *     responses:
 *       201:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Validation error
 */
router.post("/", blogController.createBlog);
/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Retrieve all blogs
 *     responses:
 *       200:
 *         description: A list of all blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Server error
 */
router.get("/", blogController.getAllBlogs);
/**
 * @swagger
 * /blogs/getLatest:
 *   get:
 *     summary: Retrieve the latest blogs
 *     responses:
 *       200:
 *         description: List of latest blogs sorted by timestamp
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Server error
 */
router.get("/getLatest/", blogController.getLatestBlogs);
/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: Retrieve a single blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the blog
 *     responses:
 *       200:
 *         description: The requested blog
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Server error
 */
router.get("/:id", blogController.getBlogById);
/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     summary: Update a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Blog Title"
 *               description:
 *                 type: string
 *                 example: "Updated blog description."
 *               image:
 *                 type: string
 *                 example: "data:image/jpeg;base64,/9j/4AAQSkZ..."
 *               sections:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "Updated Section Title"
 *                     image:
 *                       type: string
 *                       example: "data:image/jpeg;base64,/9j/4AAQSkZ..."
 *                     description:
 *                       type: string
 *                       example: "Updated section description."
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Server error
 */
router.put("/:id", blogController.updateBlog);
/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     summary: Delete a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the blog
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", blogController.deleteBlog);
module.exports = router;
