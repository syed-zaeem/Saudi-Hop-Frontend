import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocation, resetLocation } from "@/features/hotelSlice";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.hotels);

  // const uniqueCategories = [...new Set(faqs.map((faq) => faq.category))];

  // const locationSearchContent = [
  //   {
  //     id: 1,
  //     name: "London",
  //     address: "Greater London, United Kingdom",
  //   },
  //   {
  //     id: 2,
  //     name: "New York",
  //     address: "New York State, United States",
  //   },
  //   {
  //     id: 3,
  //     name: "Paris",
  //     address: "France",
  //   },
  //   {
  //     id: 4,
  //     name: "Madrid",
  //     address: "Spain",
  //   },
  //   {
  //     id: 5,
  //     name: "Santorini",
  //     address: "Greece",
  //   },
  // ];

  const locationSearchContent = [
    ...new Set(hotels.map((hotel) => hotel.location)),
  ];

  const handleOptionClick = (item) => {
    console.log("The location is: " + item);
    setSelectedItem(item);
    dispatch(setLocation(item));
  };

  const handleClearSelection = () => {
    setSelectedItem("");
    dispatch(resetLocation(""))
  };

  return (
    <>
      <div className="searchMenu-loc px-20 py-10 bg-white rounded-4 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Where are you going?"
              className="js-search js-dd-focus"
              value={selectedItem}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {!selectedItem && (
                <li className="text-gray-500 text-left px-20 py-15">
                  Select a location...
                </li>
              )}
              {locationSearchContent.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      {/* <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div> */}
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        {item}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {selectedItem && (
          <button
            className="button mt-10 px-15 py-10 -dark-1 bg-dark-1 text-white rounded-4"
            onClick={handleClearSelection}
          >
            Clear Selection
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBar;
