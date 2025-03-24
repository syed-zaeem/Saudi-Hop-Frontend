import BACKEND_API from "./api"


export async function createPost(blogData) {
    try {
        const formData = new FormData();
        formData.append("title", blogData.title);
        formData.append("paragraphs", JSON.stringify(blogData.paragraphs)); // Stringify for JSON
        formData.append("tags", JSON.stringify(blogData.tags));
        if (blogData.image) {
            formData.append("image", blogData.image); // File object
        }
        formData.append("createdAt", blogData.createdAt);

        // Replace with your actual API endpoint
        const response = await fetch(`${BACKEND_API}/blogs/create`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) throw new Error("Failed to save blog");
        const result = await response.json();
        console.log("Saved to database:", result);

        return result;
    } catch (error) {
        console.error("Error saving blog:", error);
    }
}

export async function getAllBlogs(searchQuery = "") {
    const response = await fetch(`${BACKEND_API}/blogs/search?query=${searchQuery}`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch blogs");
    }

    return response.json();
}

export async function removeBlog(_id) {
    const response = await fetch(`${BACKEND_API}/blogs/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id })
    });

    if (!response.ok) {
        throw new Error("Failed to remove blog");
    }

    return response.json();
}
