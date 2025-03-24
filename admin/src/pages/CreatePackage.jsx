import React, { useEffect, useState } from "react";
import PackageApi from "../api/Package";
import HostelAPI from "../api/hotels";
import UploadFiles from "../api/uploadFiles";
import { Listbox, ListboxOption, ListboxOptions } from "@headlessui/react";
import { BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { RiDeleteBin6Line } from "react-icons/ri";
import HotelCard from "../components/HotelCard";

const categories = ["3 Star", "4 Star", "5 Star", "Luxury"];

const CreatePackage = () => {
  const [packageData, setPackageData] = useState({
    title: "",
    price: "",
    description: "",
    highlights: [],
    rating: 0,
    category: categories[0],
    img: null,
    tags: "",
    hotels: [],
    isUmrahPlus: false,
  });
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [highlightInput, setHighlightInput] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await HostelAPI.getHotels();
        setHotels(response);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    fetchHotels();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPackageData((prev) => ({ ...prev, img: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(packageData).forEach((key) => {
      if (key === "hotels" || key === "highlights") {
        formData.append(key, JSON.stringify(packageData[key]));
      } else {
        formData.append(key, packageData[key]);
      }
    });

    try {
      await PackageApi.createPackages(formData);
      navigate("/manage-package");
    } catch (error) {
      console.error("Error creating package:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setPackageData((prevData) => ({ ...prevData, category }));
  };

  const handleHighlightInput = (e) => {
    setHighlightInput(e.target.value);
  };

  const addHighlightInList = () => {
    if (highlightInput.trim()) {
      setPackageData((prev) => ({
        ...prev,
        highlights: [...prev.highlights, highlightInput.trim()],
      }));
      setHighlightInput("");
    }
  };

  const removeHighlight = (index) => {
    setPackageData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index),
    }));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedHighlights = Array.from(packageData.highlights);
    const [movedItem] = reorderedHighlights.splice(result.source.index, 1);
    reorderedHighlights.splice(result.destination.index, 0, movedItem);
    setPackageData((prev) => ({ ...prev, highlights: reorderedHighlights }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Add New Package</h1>
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
        {imagePreview && (
          <div className="my-4">
            <h2 className="text-lg font-semibold mb-2">Image Preview:</h2>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-auto h-32 object-cover rounded-md"
            />
          </div>
        )}

        <Listbox value={packageData.category} onChange={handleCategoryChange}>
          <Listbox.Button className="w-full p-2 border border-gray-500 rounded bg-gray-100 text-left text-gray-500">
            {packageData.category}
          </Listbox.Button>
          <ListboxOptions className="absolute bg-white border-gray-500 text-gray-500 border rounded shadow-md">
            {categories.map((category) => (
              <ListboxOption
                key={category}
                value={category}
                className="p-2 hover:bg-gray-200 cursor-pointer w-full">
                {category}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            name="title"
            value={packageData.title}
            placeholder="Package Title"
            className="w-full p-2 border border-gray-500 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            value={packageData.price}
            placeholder="Price"
            className="w-full p-2 border border-gray-500 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={packageData.description}
          className="w-full p-2 border border-gray-500 rounded"
          onChange={handleChange}
          required></textarea>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              setPackageData((prev) => ({
                ...prev,
                isUmrahPlus: e.target.checked,
              }));
            }}
            placeholder="Is it Umrah Plus"
          />
          <label className="ml-2 text-gray-500">Is it Umrah Plus?</label>
        </div>
        {/* Highlights Section */}
        <div>
          <div className="flex flex-row gap-2">
            <input
              name="highlights"
              placeholder="Add a Highlight"
              value={highlightInput}
              className="w-full p-2 border border-gray-500 rounded"
              onChange={handleHighlightInput}
            />
            <button
              type="button"
              onClick={addHighlightInList}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-nowrap">
              Add Highlight
            </button>
          </div>
          {packageData.highlights.length > 0 && (
            <div className="mt-2 max-h-40 overflow-y-auto border border-gray-300 rounded">
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="highlights">
                  {(provided) => (
                    <ul
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="space-y-2 p-2">
                      {packageData.highlights.map((highlight, index) => (
                        <Draggable
                          key={index}
                          draggableId={index.toString()}
                          index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="flex items-center justify-between p-2 bg-gray-100 rounded border border-gray-300">
                              <span className="truncate">{highlight}</span>
                              <button
                                type="button"
                                onClick={() => removeHighlight(index)}
                                className="text-red-600 hover:text-red-800">
                                <RiDeleteBin6Line />
                              </button>
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          )}
        </div>

        <input
          type="text"
          name="tags"
          value={packageData.tags}
          placeholder="Tags (comma separated)"
          className="w-full p-2 border border-gray-500 rounded"
          onChange={handleChange}
          required
        />
        <div className="flex flex-wrap gap-2">
          {packageData.tags.split(",").map((tag, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-semibold mt-4">Select a Hotel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel._id}
              hotel={hotel}
              setHotel={(id) =>
                setPackageData((prev) => ({
                  ...prev,
                  hotels: prev.hotels.includes(id)
                    ? prev.hotels.filter((hotelId) => hotelId !== id)
                    : [...prev.hotels, id],
                }))
              }
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add Package
        </button>
      </form>
    </div>
  );
};

export default CreatePackage;
