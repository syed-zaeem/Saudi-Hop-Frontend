# File Upload API

This API provides endpoints to upload and retrieve files. Files are stored in a local `uploads` directory, and users can access uploaded files via their respective URLs.

## Base URL

http://localhost:5000/files

shell
Copy code

## Endpoints

### 1. Upload a File

**Endpoint:**
POST /upload

markdown
Copy code

**Description:**  
Uploads a file to the server and stores it in the `uploads` directory.

**Request:**

- Use `multipart/form-data` to upload a file.
- Key for the file: `file`.

**Example Request:**
POST http://localhost:5000/files/upload

css
Copy code

**Response:**

```json
{
  "message": "File uploaded successfully.",
  "filePath": "/uploads/20240930_163641[1].jpg"
}

###Notes:

The filePath in the response indicates the relative path to the uploaded file.
Files are saved with their original names.
2. Retrieve a File
Endpoint:

ruby
Copy code
GET /:filename
Description:
Fetches a file by its name from the server.

Path Parameters:

filename: The name of the file (e.g., 20240930_163641[1].jpg).
Example Request:

bash
Copy code
GET http://localhost:5000/files/20240930_163641[1].jpg
Response:

200 OK: Returns the requested file in the response body.
Notes:

The filename must exactly match the name of the uploaded file.
If the file does not exist, a 404 Not Found response is returned.
How to Use
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/file-upload-api.git
cd file-upload-api
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:5000 by default.

Directory Structure
Uploaded files are stored in the uploads folder at the root of the project.
Ensure the uploads directory exists before starting the server. The server will create it automatically if it does not exist.
Error Responses
400 Bad Request
When no file is uploaded:

json
Copy code
{
  "error": "No file uploaded."
}
404 Not Found
When a file is not found:

json
Copy code
{
  "error": "File not found."
}
500 Internal Server Error
When an unexpected error occurs:

json
Copy code
{
  "error": "An unexpected error occurred."
}
Example Usage
Upload a File
Using cURL:

bash
Copy code
curl -X POST -F "file=@path/to/your/file.jpg" http://localhost:5000/files/upload
Retrieve a File
Using cURL:

bash
Copy code
curl -X GET http://localhost:5000/files/20240930_163641[1].jpg --output downloaded_file.jpg
Technologies Used
Node.js: Backend runtime environment.
Express.js: Web framework for building the API.
Multer: Middleware for handling multipart/form-data file uploads.
Future Enhancements
File Type Validation: Restrict uploads to specific file types (e.g., images, PDFs).
File Size Limitation: Limit file sizes to avoid excessive resource usage.
Cloud Storage Integration: Store files in cloud platforms like AWS S3, Google Cloud Storage, or Azure Blob Storage for scalability.
```
