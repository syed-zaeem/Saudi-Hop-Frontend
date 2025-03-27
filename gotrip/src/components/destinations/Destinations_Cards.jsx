import { Link } from "react-router-dom";
import { allDestinations } from "../../data/desinations";
import BlogPagination from "../blog/BlogPagination";
import { IoShareOutline } from "react-icons/io5";

const DestinationsCards = () => {

  return (
    <>
      <div className="tabs -pills-3 js-tabs">
        {/* <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls">
          {filterOptions.map((option) => (
            <div className="col-auto" key={option.value}>
              <button
                className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
                  filterOption === option.value ? "is-tab-el-active" : ""
                }`}
                onClick={() => setFilterOption(option.value)}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div> */}
        {/* End tab-controls */}

        <div className="row y-gap-30 pt-30">
          {allDestinations.map((item) => (
            <div className="col-lg-4 col-sm-6 mb-20" key={item.id}>
              <Link
                to={`/destination-details/${item.id}`}
                className="blogCard -type-1 d-block"
              >
                <div className="blogCard__image destination_card_imageblock rounded-xl sm:rounded-lg md:rounded-xl">
                  <div className="">
                    <img
                      className="cover w-100 img-fluid destination_card_image"
                      src={item.img}
                      alt={`${item.city} – ${item.highlight}`}
                    />
                  </div>
                </div>
                <div className="pt-20 px-20 flex justify-between gap-2 md:gap-4">
                  <div>
                    <h4 className="text-dark-1 destinations_card_city">
                      {item.city}
                    </h4>
                    <div className="text-light-1 text-15 lh-14 mt-5">
                      <p>{item.highlight}</p>
                    </div>
                  </div>
                  {/* <button className="text-dark-1 hover:text-blue-500">
                    <IoShareOutline size={28} />
                  </button> */}

                  {/* <div className="flex justify-between items-center text-light-1 text-15 lh-14 mt-5">
                    <p className="mr-2">{item.highlight}</p>
                    <button className="text-dark-1 hover:text-blue-500">
                      <IoShareOutline size={28} />
                    </button>
                  </div> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End .row */}
      </div>
    </>
  );
};

export default DestinationsCards;
