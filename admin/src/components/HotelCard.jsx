import React, { useEffect, useState } from "react";
import UploadFiles from "../api/uploadFiles";
import { BiCheck } from "react-icons/bi";

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
      className={`flex flex-row items-center border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 w-full`}>
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

export default HotelCard;
