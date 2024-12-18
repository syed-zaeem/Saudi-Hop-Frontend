import React, { useState } from "react";

const HotelsForm = () => {
  // State for hotel form fields
  const [area, setArea] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("5");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  // Handle area change
  const handleAreaChange = (e) => setArea(e.target.value);

  // Handle hotel name change
  const handleHotelNameChange = (e) => setHotelName(e.target.value);

  // Handle price change
  const handlePriceChange = (e) => setPrice(e.target.value);

  // Handle rating change
  const handleRatingChange = (e) => setRating(e.target.value);

  // Handle discount change
  const handleDiscountChange = (e) => setDiscount(e.target.value);

  // Handle description change
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const hotelData = {
      area,
      hotelName,
      price,
      rating,
      discount,
      description,
      timestamp: new Date().toISOString(),
    };
    console.log("Hotel Data:", hotelData); // You can send this data to your API
  };

  return (
    <div>
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-3xl font-semibold text-gray-800">
            Add New Hotel
          </h1>
          <div className="text-lg text-gray-600 mb-6">
            Use the form below to add a new hotel to the database.
          </div>
        </div>
      </div>

      <div className="hotel-form">
        <h2 className="form-heading">Hotel Form</h2>
        <form onSubmit={handleSubmit} className="hotel-form-content">
          {/* Area */}
          <div className="form-group">
            <label htmlFor="area" className="form-label">
              Area
            </label>
            <input
              type="text"
              id="area"
              name="area"
              className="form-input"
              placeholder="Enter area"
              value={area}
              onChange={handleAreaChange}
            />
          </div>

          {/* Hotel Name */}
          <div className="form-group">
            <label htmlFor="hotelName" className="form-label">
              Hotel Name
            </label>
            <input
              type="text"
              id="hotelName"
              name="hotelName"
              className="form-input"
              placeholder="Enter hotel name"
              value={hotelName}
              onChange={handleHotelNameChange}
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
              placeholder="Enter price"
              value={price}
              onChange={handlePriceChange}
            />
          </div>

          {/* Rating */}
          <div className="form-group">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              className="form-input"
              value={rating}
              onChange={handleRatingChange}
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          {/* Discount Percentage */}
          <div className="form-group">
            <label htmlFor="discount" className="form-label">
              Discount (%)
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              className="form-input"
              placeholder="Enter discount percentage"
              value={discount}
              onChange={handleDiscountChange}
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-input"
              placeholder="Enter hotel description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>

          {/* Submit Button */}
          <div className="form-group text-right">
            <button type="submit" className="form-button">
              Add Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelsForm;
