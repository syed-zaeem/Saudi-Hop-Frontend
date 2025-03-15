import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line, RiStarFill } from "react-icons/ri";
import HostelAPI from "../api/hotels";
import { data, useNavigate, useParams } from "react-router-dom";
import UploadFiles from "../api/uploadFiles";

const CreateHotel = ({ isEditableMode = false }) => {
  const [hotelData, setHotelData] = useState({
    title: "",
    price: "",
    description: "",
    tags: "",
    facilities: "",
    rating: "",
    destination: "",
    location: "",
    images: [], // For new images
    existingImages: [], // For images from the backend
  });
  const [deletedImages, setDeletedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        let hotelToEdit = await HostelAPI.getHotelById(id);
        if (!hotelToEdit) {
          console.error("Hotel not found");
          return;
        }

        let images = [];
        for (const imagePath of hotelToEdit.images) {
          try {
            const blob = await UploadFiles.getFile(imagePath);
            if (blob) {
              const imageURL = URL.createObjectURL(blob);
              images.push({ url: imageURL, path: imagePath });
            }
          } catch (error) {
            console.error(`Error fetching image: ${imagePath}`, error);
          }
        }

        setHotelData({
          ...hotelToEdit,
          facilities: hotelToEdit.facilities?.join(", ") || "",
          tags: hotelToEdit.tags?.join(", ") || "",
          existingImages: images, // Store existing images separately
        });

        setImagePreviews(images.map((img) => img.url));
      } catch (error) {
        console.error("Error fetching hotel:", error);
      }
    };

    if (isEditableMode && id) fetchHotel();
  }, [id, isEditableMode]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setHotelData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...files],
    }));

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevState) => [...prevState, ...previewUrls]);
  };

  const handleRemoveImage = (index, isExisting = false) => {
    debugger;
    if (isExisting) {
      const imageToRemove = hotelData.existingImages[index];
      setDeletedImages((prev) => [...prev, imageToRemove.path]); // Track deleted image paths
      console.log(hotelData.existingImages.filter((_, i) => i !== index));
      setHotelData((prevState) => ({
        ...prevState,
        existingImages: prevState.existingImages.filter((_, i) => i !== index),
      }));

      setImagePreviews((prevState) => prevState.filter((_, i) => i !== index));
    } else {
      setHotelData((prevState) => ({
        ...prevState,
        images: prevState.images.filter((_, i) => i !== index),
      }));

      setImagePreviews((prevState) => prevState.filter((_, i) => i !== index));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

  //   try {
  //     const formData = new FormData();
  //     formData.append("title", hotelData.title);
  //     formData.append("price", hotelData.price);
  //     formData.append("description", hotelData.description);
  //     formData.append("tags", hotelData.tags);
  //     formData.append("facilities", hotelData.facilities);
  //     formData.append("rating", hotelData.rating);
  //     formData.append("destination", hotelData.destination);
  //     formData.append("location", hotelData.location);

  //     hotelData.images.forEach((file) => formData.append("files", file));

  //     if (deletedImages.length > 0) {
  //       deletedImages.forEach((image) =>
  //         formData.append("deletedImages", image)
  //       );
  //     }

  //     if (isEditableMode) {
  //       await HostelAPI.editHotel(id, formData);
  //     } else {
  //       await HostelAPI.createHotel(formData);
  //     }
  //     navigate("/manage-hotels");
  //   } catch (error) {
  //     setLoading(false);
  //     setMessage("Error updating hotel");
  //     throw error;
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    console.log({ "Existing Images": hotelData.existingImages });
    console.log({ "New Images": hotelData.images });
    try {
      const formData = new FormData();
      formData.append("title", hotelData.title);
      formData.append("price", hotelData.price);
      formData.append("description", hotelData.description);
      formData.append("tags", hotelData.tags);
      formData.append("facilities", hotelData.facilities);
      formData.append("rating", hotelData.rating);
      formData.append("destination", hotelData.destination);
      formData.append("location", hotelData.location);

      hotelData.images.forEach((file) => formData.append("files", file));

      if (deletedImages.length > 0) {
        deletedImages.forEach((image) =>
          formData.append("deletedImages", image)
        );
      }

      if (isEditableMode) {
        await HostelAPI.editHotel(id, formData);
      } else {
        await HostelAPI.createHotel(formData);
      }

      navigate("/manage-hotels");
    } catch (error) {
      setLoading(false);
      setMessage("Error updating hotel");
      throw error;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target; // Get input field name and value
    setHotelData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the state
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Add New Hotel</h1>
      {message && <p className="text-center text-green-600 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              onChange={handleImageChange}
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
        {imagePreviews.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Image Previews:</h2>
            <div className="grid grid-cols-3 gap-2">
              {imagePreviews.map((src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src}
                    alt="Hotel Preview"
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveImage(
                        index,
                        index < hotelData.existingImages.length
                      )
                    }
                    className="absolute top-2 right-2 text-white p-1 rounded-full">
                    <RiDeleteBin6Line size={20} />
                  </button>
                  {index === 0 && (
                    <RiStarFill
                      size={20}
                      className="absolute top-2 left-2 text-amber-600 p-1 rounded-full"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-full flex flex-row flex-wrap gap-2">
          <input
            type="text"
            name="title"
            value={hotelData.title}
            placeholder="Hotel Title"
            className="flex-1 p-2 border border-gray-500 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            value={hotelData.price}
            placeholder="Price"
            className="flex-1 p-2 border border-gray-500 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={hotelData.description}
          className="w-full p-2 border border-gray-500 rounded"
          onChange={handleChange}
          required></textarea>

        <div className="w-full flex flex-row flex-wrap gap-2">
          <input
            type="text"
            name="location"
            value={hotelData.location}
            placeholder="Location (Link)"
            className="flex-1 p-2 border border-gray-500 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="rating"
            value={hotelData.rating}
            placeholder="Rating (0-5)"
            className="flex-1 p-2 border border-gray-500 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destination"
            value={hotelData.destination}
            placeholder="Destination"
            className="flex-1 p-2 border border-gray-500 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="tags"
          value={hotelData.tags}
          placeholder="Tags (comma separated)"
          className="w-full p-2 border border-gray-500 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="facilities"
          value={hotelData.facilities}
          placeholder="Facilities (comma separated)"
          className="w-full p-2 border border-gray-500 rounded"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          disabled={loading}>
          {loading ? "Adding..." : "Add Hotel"}
        </button>
      </form>
    </div>
  );
};

export default CreateHotel;
