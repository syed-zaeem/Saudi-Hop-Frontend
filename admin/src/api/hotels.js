import BACKEND_API from "./api"

const API_URL = `${BACKEND_API}/hotels`
const HostelAPI = {
    // Create Hotel
    createHotel: async (formData) => {
        try {
            const response = await fetch(`${API_URL}/create`, {
                method: "POST",
                body: formData,
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    },

    // Get All Hotels
    getHotels: async () => {
        try {
            const response = await fetch(`${API_URL}`);
            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    },

    // Get Hotel by ID
    getHotelById: async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    },

    // Update Hotel
    updateHotel: async (id, updatedData) => {
        try {
            const response = await fetch(`${API_URL}/update/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });
            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    },

    // Delete Hotel
    deleteHotel: async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    },
    editHotel: async (id, formData) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                body: formData,
            });

            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }
};

export default HostelAPI;
