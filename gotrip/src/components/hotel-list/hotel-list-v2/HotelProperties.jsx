import { useState, useEffect } from "react";
import Pagination from "@/components/activity-list/common/Pagination";
import { hotelsData } from "../../../data/hotels";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UploadFiles from "@/features/fileSlice";

const HotelProperties = () => {
  const [hotelImages, setHotelImages] = useState({})
  const itemsPerPage = 3; // Number of hotels per page

  const [currentPage, setCurrentPage] = useState(0);

  const { filteredHotels, loading, error } = useSelector(
    (state) => state.hotels
  );

  // Calculate the hotels to display based on the current page
  const offset = currentPage * itemsPerPage;
  const currentHotels = filteredHotels.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(currentHotels.length / itemsPerPage);

  useEffect(() => {
    if (filteredHotels && filteredHotels.length > 0) {
      fetchHotelImages(filteredHotels);
    }
  }, [filteredHotels]);

  const fetchHotelImages = async (hotels) => {
    const responseImages = await UploadFiles.getHotelSingleImage(hotels);
    setHotelImages(responseImages);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      {currentHotels.map((item) => (
        <div className="col-12" key={item?.id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div className="cardImage__content">
                    <img
                      className="rounded-4 col-12 js-lazy"
                      // src={item.images[0]}
                      src={hotelImages[item._id]}
                      alt={`${item?.title} – Hotel in ${item?.location} | Price: US$${item?.price}`}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md">
                <h3 className="text-20 lh-16 fw-500">
                  {item?.title}
                  <div className="flex items-center gap-x-4">
                    <p className="text-14">{item?.location}</p>
                    <div>
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <i
                          key={i}
                          className="icon-star text-14 text-yellow-2"
                        ></i>
                      ))}
                    </div>
                  </div>
                </h3>

                <div className="text-14 lh-15 mt-10">
                  <div className="text-18 fw-500">Facilities</div>
                  <ul className="list-disc">
                    {item.facilities.map((facility) => (
                      <li key={facility} className="text-light-1">
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="row x-gap-10 y-gap-10 pt-20">
                  {item.tags.map((tag) => (
                    <div key={tag} className="col-auto">
                      <div className="border-light capitalize rounded-100 py-5 px-20 text-14 lh-14">
                        {tag}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-auto flex flex-col justify-between text-right md:text-left">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                    <div className="text-14 lh-14 text-light-1">
                      {item.rating} star ratings
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                      {item?.rating}
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex flex-col justify-items-start text-right">
                    <p className="text-14 text-light-1 mt-50 md:mt-20 pr-[36px]">
                      From
                    </p>
                    <div className="text-22 lh-12 fw-600">US${item?.price}</div>
                  </div>

                  <Link
                    to={`/hotel-single-v1/${item._id}`}
                    className="button -md -dark-1 bg-blue-1 text-white mt-24"
                  >
                    See Details{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="layout-pt-md layout-pb-lg">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(filteredHotels.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={
            "flex justify-center items-center rounded-lg overflow-hidden"
          }
          activeClassName={
            "bg-blue-600 text-white border border-blue-600 px-4 py-2"
          }
          pageClassName={
            "px-20 py-2 border border-blue-300 text-blue-600 hover:bg-blue-100 transition cursor-pointer"
          }
          previousClassName={`text-lg fw-500 px-20 py-2 border border-gray-300 ${
            currentPage === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-blue-600 hover:bg-blue-100 transition cursor-pointer"
          }`}
          nextClassName={`text-lg fw-500 px-20 py-2 border border-gray-300 ${
            currentPage === Math.ceil(filteredHotels.length / itemsPerPage)
              ? "text-gray-300 cursor-not-allowed"
              : "text-blue-600 hover:bg-blue-100 transition cursor-pointer"
          }`}
          breakClassName={"px-20 py-2 border border-gray-300 text-gray-400"}
          disabledClassName={
            "px-20 py-2 border border-gray-300 text-gray-300 cursor-not-allowed"
          }
        />
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default HotelProperties;
