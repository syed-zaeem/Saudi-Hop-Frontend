import BACKEND_API from "./api";

const apiCall = `${BACKEND_API}/files`;

const UploadFiles = {
    getFile: async (fileName) => {
        fileName = fileName.replace(/\\/g, "/").split("/").pop();
        try {
            const response = await fetch(`${apiCall}/${fileName}`);
            if (!response.ok) {
                throw new Error(`Error fetching file: ${response.status} ${response.statusText}`);
            }
            return await response.blob(); // Assuming the file is being fetched as a binary blob
        } catch (error) {
            console.error("Error fetching file:", error);
            return null;
        }
    }
};

export default UploadFiles;
