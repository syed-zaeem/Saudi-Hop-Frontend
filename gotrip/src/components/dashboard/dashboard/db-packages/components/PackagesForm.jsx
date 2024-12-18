import { useState } from "react";
import { FaFileUpload, FaTrash } from "react-icons/fa";

const PackagesForm = () => {
  const [images, setImages] = useState([]);

  // State for package form fields
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("touristvisa");
  const [stayInfo, setStayInfo] = useState([
    { numberOfDays: "", hotel: "", city: "" },
  ]);

  // Dummy data for hotels and cities dropdowns
  const hotels = ["Hotel A", "Hotel B", "Hotel C"];
  const cities = ["City X", "City Y", "City Z"];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Filter only new images that are not already uploaded
    const uniqueImages = files.filter(
      (file) =>
        !images.some(
          (image) =>
            image.file.name === file.name && image.file.size === file.size
        )
    );

    if (uniqueImages.length < files.length) {
      alert("Some images are already uploaded and have been skipped.");
    }

    // Convert unique files to object URLs for preview
    const imagePreviews = uniqueImages.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    // Update the state with only unique images
    setImages((prevImages) => [...prevImages, ...imagePreviews]);
  };

  const handleDelete = (index) => {
    setImages((prevImages) => {
      // Revoke the URL to release memory
      URL.revokeObjectURL(prevImages[index].preview);
      return prevImages.filter((_, i) => i !== index);
    });
  };

  // Handle title change
  const handleTitleChange = (e) => setTitle(e.target.value);

  // Handle price change
  const handlePriceChange = (e) => setPrice(e.target.value);

  // Handle category change
  const handleCategoryChange = (e) => setCategory(e.target.value);

  // Handle stay info change
  const handleStayInfoChange = (index, e) => {
    const newStayInfo = [...stayInfo];
    newStayInfo[index][e.target.name] = e.target.value;
    setStayInfo(newStayInfo);
  };

  // Add new stay info (number of days, hotel, city)
  const addStayInfo = () => {
    setStayInfo([...stayInfo, { numberOfDays: "", hotel: "", city: "" }]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const packageData = {
      title,
      price,
      category,
      stayInfo,
      timestamp: new Date().toISOString(),
    };
    console.log("Package Data:", packageData); // You can send this data to your API
  };

  return (
    <div>
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-3xl font-semibold text-gray-800">
            Add New Package
          </h1>
          <div className="text-lg text-gray-600 mb-6">
            Use the form below to add a new package to the database.
          </div>
        </div>
      </div>

      <div className="package-form">
        <h2 className="form-heading">Package Form</h2>
        <form onSubmit={handleSubmit} className="package-form-content">
          {/* Package Category */}
          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Package Category
            </label>
            <select
              id="category"
              name="category"
              className="categoryDropdown form-input"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="touristvisa">Tourist Visa</option>
              <option value="entryrequirements">Entry Requirements</option>
              <option value="generalinformation">General Information</option>
              <option value="gccresidents">GCC Residents</option>
            </select>
          </div>

          <div>
            <label className="form-label">Upload Images</label>
            <div className="form-group image-upload">
              <div className="video-upload-section">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="image-upload"
                  multiple
                  onChange={handleImageChange}
                />
                <label htmlFor="image-upload" className="upload-label">
                  <FaFileUpload size={40} className="icon" />
                  <span>
                    {images.length > 0
                      ? `You have uploaded ${images.length} image(s)`
                      : "Press or drag images to upload"}
                  </span>
                </label>
              </div>

              {images.length > 0 && (
                <div className="uploaded-videos-list">
                  {images.map((image, index) => (
                    <div key={index} className="uploaded-video-item">
                      <img
                        src={image.preview}
                        alt={image.file.name}
                        className="uploaded-image"
                      />
                      <button
                        onClick={() => handleDelete(index)}
                        className="delete-button"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              placeholder="Enter the title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-input"
              placeholder="Enter the price"
              value={price}
              onChange={handlePriceChange}
            />
          </div>

          {/* Stay Info */}
          <div className="form-group">
            <label className="form-label">Stay Information</label>
            {stayInfo.map((stay, index) => (
              <div key={index} className="stay-info-section">
                {/* Number of Days */}
                <div className="form-group">
                  <label
                    htmlFor={`numberOfDays-${index}`}
                    className="form-label"
                  >
                    Number of Days
                  </label>
                  <input
                    type="number"
                    id={`numberOfDays-${index}`}
                    name="numberOfDays"
                    className="form-input"
                    placeholder="Enter number of days"
                    value={stay.numberOfDays}
                    onChange={(e) => handleStayInfoChange(index, e)}
                  />
                </div>

                {/* Hotel */}
                <div className="form-group">
                  <label htmlFor={`hotel-${index}`} className="form-label">
                    Hotel
                  </label>
                  <select
                    id={`hotel-${index}`}
                    name="hotel"
                    className="form-input"
                    value={stay.hotel}
                    onChange={(e) => handleStayInfoChange(index, e)}
                  >
                    {hotels.map((hotel, i) => (
                      <option key={i} value={hotel}>
                        {hotel}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div className="form-group">
                  <label htmlFor={`city-${index}`} className="form-label">
                    City
                  </label>
                  <select
                    id={`city-${index}`}
                    name="city"
                    className="form-input"
                    value={stay.city}
                    onChange={(e) => handleStayInfoChange(index, e)}
                  >
                    {cities.map((city, i) => (
                      <option key={i} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="add-stay-info-button"
              onClick={addStayInfo}
            >
              Add Stay Info
            </button>
          </div>

          {/* Submit Button */}
          <div className="form-group text-right">
            <button type="submit" className="form-button">
              Add Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackagesForm;
