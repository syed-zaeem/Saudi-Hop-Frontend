import EditPackage from "../pages/EditPackage";
import BACKEND_API from "./api";

const API_URL = `${BACKEND_API}/packages`;

const PackageApi = {
    // Fetch all packages
    getPackages: async () => {

        try {
            const response = await fetch(API_URL);
            return await response.json();
        } catch (error) {
            console.error("Error fetching packages:", error);
            return [];
        }
    },
    getPackage: async (_id) => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const packages = await response.json();

            // Filter the package list by _id
            const packageData = packages.find((pkg) => pkg._id === _id);
            return packageData;
        } catch (error) {
            console.error("Error fetching packages:", error);
            return [];
        }
    },
    // Create a new package
    createPackages: async (formdata) => {
        try {
            const response = await fetch(`${API_URL}/create`, {
                method: "POST",
                body: formdata,
            });
            return await response.json();
        } catch (error) {
            console.error("Error creating package:", error);
            return null;
        }
    },

    // Update an existing package
    updatePackages: async (id, formdata) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                body: formdata,
            });
            return await response.json();
        } catch (error) {
            console.error("Error updating package:", error);
            return null;
        }
    },

    // Delete a package
    deletePackage: async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            return await response.json();
        } catch (error) {
            console.error("Error deleting package:", error);
            return null;
        }
    },
    editPackage: async (formData, id) => {
        try {
            // Sending a PUT request to the backend with the id in the URL
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                body: formData, // Include the FormData as the request body
            });

            const data = await response.json();

            if (response.ok) {
                // Handle success (e.g., redirect to the manage package page)
                console.log("Package updated successfully", data);
                navigate("/manage-package"); // Redirect after successful update
            } else {
                // Handle errors (e.g., validation errors)
                console.error("Error updating package:", data.message);
            }
        } catch (error) {
            console.error("Error updating package:", error);
        }
    }
};

export default PackageApi;
