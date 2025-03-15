import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line, RiStarFill } from "react-icons/ri";
import PackageApi from "../api/Package";
import HostelAPI from "../api/hotels";
import UploadFiles from "../api/uploadFiles";
import { Listbox, ListboxOption, ListboxOptions } from "@headlessui/react";
import { BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const categories = ["3 Star", "4 Star", "5 Star", "Luxury"];
const HotelCard = ({ hotel, setHotel }) => {
  const [image, setImage] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (hotel?.images.length > 0) {
          const blob = await UploadFiles.getFile(hotel.images[0]);
          if (blob) {
            const imageURL = URL.createObjectURL(blob);
            setImage(imageURL);
          }
        }
      } catch (error) {
        console.error(`Error fetching image: `, error);
      }
    };
    fetchImage();
  }, [hotel]);
  const updateSelection = (status) => {
    setIsSelected(status);
    setHotel(hotel._id);
  };
  return (
    <div
      key={hotel.id}
      onClick={() => updateSelection(!isSelected)}
      className={`flex flex-row items-center  border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 w-full`}>
      <div className="px-2">
        {isSelected ? (
          <BiCheck size={30} />
        ) : (
          <span className="text-white">ab</span>
        )}
      </div>
      <img
        className="object-cover w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 xl:w-1/6 rounded-l-lg"
        src={image}
        alt={hotel.name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal w-2/3 sm:w-3/4 md:w-5/6 lg:w-4/5 xl:w-5/6">
        <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">
          {hotel.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">Price: {hotel.price}/-</p>
        <span>
          <a
            href={hotel.location}
            target="_blank"
            className="text-sm text-blue-900">
            Show on Map
          </a>
        </span>
      </div>
    </div>
  );
};

const CreatePackage = () => {
  const [packageData, setPackageData] = useState({
    title: "",
    price: "",
    description: "",
    highlights: "",
    rating: 0,
    category: categories[0],
    img: null,
    tags: "",
    hotels: [],
  });
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [hotels, setHotels] = useState([]);

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(packageData);
  //   const formData = new FormData();
  //   Object.keys(packageData).forEach((key) => {
  //     formData.append(key, packageData[key]);
  //   });
  //   await PackageApi.createPackages();
  //   navigate("/manage-package");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(packageData).forEach((key) => {
      if (key === "hotels") {
        formData.append(key, JSON.stringify(packageData[key])); // Convert array to string
      } else {
        formData.append(key, packageData[key]);
      }
    });

    try {
      await PackageApi.createPackages(formData); // Pass formData to API
      navigate("/manage-package");
    } catch (error) {
      console.error("Error creating package:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setPackageData((prevData) => ({ ...prevData, category }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Add New Package</h1>
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
              <span className="font-semibold">Click to upload</span> or drag and
              drop
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <Listbox value={packageData.category} onChange={handleCategoryChange}>
          <Listbox.Button className="w-full p-2 border border-gray-500 rounded bg-gray-100 text-left text-gray-500">
            {packageData.category}
          </Listbox.Button>
          <ListboxOptions className="absolute bg-white border-gray-500 text-gray-500 border rounded shadow-md">
            {categories.map((category) => (
              <ListboxOption
                key={category}
                value={category}
                className="p-2  hover:bg-gray-200 cursor-pointer w-full">
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

        <textarea
          name="highlights"
          placeholder="Highlights"
          value={packageData.highlights}
          className="w-full p-2 border border-gray-500 rounded"
          onChange={handleChange}
          required></textarea>
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
              hotel={hotel}
              setHotel={(id) =>
                setPackageData((prev) => ({
                  ...prev,
                  hotels: prev.hotels.includes(id)
                    ? prev.hotels.filter((hotelId) => hotelId !== id) // Remove if already selected
                    : [...prev.hotels, id], // Add if not selected
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
