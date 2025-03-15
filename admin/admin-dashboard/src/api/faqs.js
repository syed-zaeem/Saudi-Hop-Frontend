import BACKEND_API from "./api";

export async function getAllFaqs() {
    try {
        const response = await fetch(`${BACKEND_API}/faqs/`);
        if (!response.ok) {
            throw new Error("Failed to fetch FAQs");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
}

export async function createFaqs(faq) {
    try {
        const response = await fetch(`${BACKEND_API}/faqs/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(faq),
        });

        if (!response.ok) {
            throw new Error("Failed to create FAQ");
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating FAQ:", error);
        return null;
    }
}

export async function deleteFaqs(id) {
    try {
        const response = await fetch(`${BACKEND_API}/faqs/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete FAQ");
        }

        return { success: true, id };
    } catch (error) {
        console.error("Error deleting FAQ:", error);
        return { success: false, error: error.message };
    }
}
