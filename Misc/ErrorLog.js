const fs = require("fs");
const path = require("path");

const logError = (message) => {
  const logFilePath = path.join(__dirname, "../error.log");
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;

  // Append the error message to the log file
  fs.appendFileSync(logFilePath, logMessage, { encoding: "utf8" });
};

module.exports = logError;
