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
    }
};

export default PackageApi;
