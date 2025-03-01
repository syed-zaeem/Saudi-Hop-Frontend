const path = require("path");
const fs = require("fs");
const logError = require("../Misc/ErrorLog");

exports.uploadFile = (req, res) => {
  if (!req.file) {
    const error = "No file uploaded.";
    logError(error);
    return res.status(400).json({ error });
  }

  res.status(200).json({
    message: "File uploaded successfully.",
    filePath: `/uploads/${req.file.filename}`,
  });
};

// Retrieve a file
exports.getFile = (req, res) => {
  const filePath = path.join(__dirname, "..", req.params.filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    const error = `File not found: ${req.params.filename}`;
    logError(error);
    res.status(404).json({ error });
  }
};
