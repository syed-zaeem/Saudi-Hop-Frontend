import { useSelector, useDispatch } from "react-redux";
// import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import { addCurrentTab } from "@/features/hero/findPlaceSlice";
// import DateSearch from "../DateSearch";
// import GuestSearch from "./GuestSearch";
// import LocationSearch from "./LocationSearch";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaTags } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaKaaba } from "react-icons/fa6"; // Kaaba Icon

const MainFilterSearchBoxFlights = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="position-relative mt-30 md:mt-5 js-tabs-content">
        <div className="mainSearch w-full bg-white px-10 py-2 lg:px-20 lg:py-1 rounded-100">
          <div className="button-grid items-center">
            {/* <LocationSearch /> */}
            {/* End Location */}

            <div className="searchMenu-date px-30 lg:py-1 lg:px-0 js-form-dd js-calendar">
              <div className="items-center bg-gray-100 p-3 contact_box_section">
                {/* Left Icon (Fixed Size) */}
                <FaPhoneAlt size={28} className="text-gray-600" />

                {/* Right Content */}
                <div className="">
                  <h4 className="text-15 fw-500 ls-2 lh-16">Open Everyday</h4>
                  <h4 className="text-18 fw-500 ls-2 lh-16">020 8944 9145</h4>
                </div>
              </div>
            </div>

            <div className="searchMenu-date px-20 lg:py-1 lg:px-0 js-form-dd js-calendar">
              <div className="items-center bg-gray-100 contact_box_section">
                {/* Left Icon (Fixed Size) */}
                <MdEmail size={28} className="text-gray-600" />

                {/* Right Content */}
                <div className="">
                  <h4 className="text-15 fw-500 ls-2 lh-16">
                    Request Quote Now
                  </h4>
                  <h4 className="text-18 fw-500 ls-2 lh-16">Enquire</h4>
                </div>
              </div>
            </div>

            <div className="searchMenu-date px-30 lg:py-1 lg:px-0 js-form-dd js-calendar">
              <div className="items-center bg-gray-100 p-3 contact_box_section">
                {/* Left Icon (Fixed Size) */}
                <FaKaaba size={28} className="text-gray-600" />

                {/* Right Content */}
                <div className="">
                  <h4 className="text-15 fw-500 ls-2 lh-16">
                    View Best Offers
                  </h4>
                  <h4 className="text-18 fw-500 ls-2 lh-16">Discover</h4>
                </div>
              </div>
            </div>

            {/* <div className="button-item">
              <button
                className="mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white"
                onClick={() => navigate("/hotel-list-v1")}
              >
                <i className="icon-search text-20 mr-10" />
                Search
              </button>
            </div> */}
            {/* End search button_item */}
          </div>
        </div>
        {/* End .mainSearch */}
      </div>
        {/* End serarchbox tab-content */}
      </>
  );
};

export default MainFilterSearchBoxFlights;
