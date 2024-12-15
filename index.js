const express = require("express");
const path = require("path");
const fs = require("fs");
const fileRoutes = require("./routes/FileRoutes");
const blogRoutes = require("./routes/BlogRoutes");
const swaggerUi = require("swagger-ui-express");
const FaqRoutes = require("./routes/FaqRoutes");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure the uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Serve static files from the uploads directory
app.use("/uploads", express.static(uploadDir));

// set Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/files", fileRoutes);
app.use("/blogs", blogRoutes);
app.use("/faqs", FaqRoutes);

const DB_URI = "mongodb://localhost:27017/saudi_hop"; // Replace with your MongoDB URI
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
