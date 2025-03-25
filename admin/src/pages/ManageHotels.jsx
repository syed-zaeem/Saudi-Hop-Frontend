import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HostelAPI from "../api/hotels";
import UploadFiles from "../api/uploadFiles";
import { RiMapPin2Line } from "react-icons/ri";
const ManageHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelImages, setHotelImages] = useState({}); // Store images separately
  const [loadingImages, setLoadingImages] = useState({}); // Track loading states

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await HostelAPI.getHotels();
        setHotels(data);
        fetchHotelImages(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    fetchHotels();
  }, []);

  const fetchHotelImages = async (hotels) => {
    const imageMap = {};
    const loadingState = {};

    for (const hotel of hotels) {
      if (hotel.images && hotel.images.length > 0) {
        loadingState[hotel._id] = true;
        try {
          // Fetch only the first image
          const firstImagePath = hotel.images[0];
          console.log(`Fetching image: ${firstImagePath}`); // Debugging

          const blob = await UploadFiles.getFile(firstImagePath);

          if (blob) {
            const imageURL = URL.createObjectURL(blob);
            console.log(`Image URL for ${hotel._id}:`, imageURL); // Debugging
            imageMap[hotel._id] = imageURL;
          } else {
            console.error(`Invalid blob for ${hotel._id}`);
            imageMap[hotel._id] = null; // Handle missing image
          }
        } catch (error) {
          console.error(`Error fetching image for hotel ${hotel._id}:`, error);
          imageMap[hotel._id] = null;
        } finally {
          loadingState[hotel._id] = false;
        }
      }
    }

    setHotelImages(imageMap);
    setLoadingImages(loadingState);
  };

  return (
    <div>
      <div className="main-content p-4">
        <h1 className="text-lg my-2 text-blue-600">
          Dashboard / <span className="text-gray-900">Manage Hotel</span>
        </h1>
        <div className="flex flex-row gap-1">
          <input
            type="text"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Search"
          />
          <Link
            to={"/create/hotel"}
            className="text-white w-[200px] h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            + Add new hotel
          </Link>
        </div>

        {/* Hotel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {hotels.map((hotel) => (
            <div
              key={hotel._id}
              className="max-w-sm max-h-[350px] bg-white border border-gray-300 rounded-lg shadow-sm flex flex-col justify-between">
              {/* Image */}
              <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-t-lg overflow-hidden">
                {loadingImages[hotel._id] ? (
                  <span className="text-gray-600">Loading...</span>
                ) : hotelImages[hotel._id] ? (
                  <img
                    className="w-full h-full object-cover"
                    src={hotelImages[hotel._id]}
                    alt={hotel.name}
                  />
                ) : (
                  <span className="text-gray-500">No Image Available</span>
                )}
              </div>

              <div className="p-5 flex flex-col justify-between h-full">
                <div className="flex flex-col h-full">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {hotel.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {hotel.description ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: hotel.description.substring(0, 100),
                        }}
                      />
                    ) : (
                      "No description available."
                    )}
                    ...
                  </p>

                  <div className="flex flex-row gap-1 items-center py-2">
                    <RiMapPin2Line />
                    {hotel.destination}
                  </div>
                </div>

                {/* Button Section */}
                <div className="flex w-full gap-2 mt-auto">
                  <Link
                    to={`/edit/hotel/${hotel._id}`}
                    className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Edit
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageHotels;
