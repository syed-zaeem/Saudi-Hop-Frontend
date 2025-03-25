import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaTags } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaKaaba } from "react-icons/fa6"; // Kaaba Icon

const MainFilterSearchBox = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="tabs__controls d-flex x-gap-30 y-gap-20 justify-center sm:justify-start js-tabs-controls w-full">
        {/* {tabs?.map((tab) => (
          <button
            key={tab?.id}
            className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button  ${
              tab?.name === currentTab ? "is-tab-el-active" : ""
            }`}
            onClick={() => dispatch(addCurrentTab(tab?.name))}>
            {tab?.name}
          </button>
        ))} */}

        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button  ${
              tab?.name === currentTab ? "is-tab-el-active" : ""
            }`}
            onClick={() => dispatch(addCurrentTab(tab?.name))}
          >
            <Link to={tab?.path} className="d-flex align-items-center gap-2">
              <i className={tab?.icon}></i> {/* Render the icon */}
              {tab?.name} {/* Render the tab name */}
            </Link>
          </button>
        ))}
      </div>

      {/* <div className=" mt-30 md:mt-5 js-tabs-content"> */}
      {/* <div className="tabs__controls d-flex x-gap-30 y-gap-20 w-full mt-20 justify-center sm:justify-start js-tabs-controls">
        <div className="mainSearch bg-white px-10 py-2  lg:px-20 lg:py-1 rounded-100">
          <div className="button-grid items-center">

            <div className="searchMenu-date px-30 lg:py-1 lg:px-0">
              <div className="items-center bg-gray-100 p-3 contact_box_section">
                <FaPhoneAlt size={28} className="text-gray-600" />

                <div className=" ml-20">
                  <h4 className="text-15 fw-500 ls-2 lh-16">Open Everyday</h4>
                  <h4 className="text-18 fw-500 ls-2 lh-16">0208 944 9145</h4>
                </div>
              </div>
            </div>

            <div className="searchMenu-date px-30 lg:py-1 lg:px-0">
              <div className="items-center bg-gray-100 p-3 contact_box_section">
                <MdEmail size={28} className="text-gray-600" />

                <div className="ml-20">
                  <h4 className="text-15 fw-500 ls-2 lh-16">
                    Request Quote Now
                  </h4>
                  <h4 className="text-18 fw-500 ls-2 lh-16">Enquire</h4>
                </div>
              </div>
            </div>
            <div className="searchMenu-date px-30 lg:py-1 lg:px-0">
              <div className="items-center bg-gray-100 p-3 contact_box_section">
                <MdEmail size={28} className="text-gray-600" />

                <div className="ml-20">
                  <h4 className="text-15 fw-500 ls-2 lh-16">
                    Request Quote Now
                  </h4>
                  <h4 className="text-18 fw-500 ls-2 lh-16">Enquire</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End serarchbox tab-content */}
    </>
  );
};

export default MainFilterSearchBox;
