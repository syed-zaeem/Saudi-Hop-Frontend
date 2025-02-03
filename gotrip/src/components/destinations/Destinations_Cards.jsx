import { Link } from "react-router-dom";
import { allDestinations } from "../../data/desinations";
import BlogPagination from "../blog/BlogPagination";

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
                to={`/blog-details/${item.id}`}
                className="blogCard -type-1 d-block "
              >
                <div className="blogCard__image destination_card_imageblock">
                  <div className="rounded-8">
                    <img
                      className="cover w-100 img-fluid destination_card_image"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pt-20 px-20">
                  <h4 className="text-dark-1 destinations_card_city">{item.city}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">
                    {item.highlight}
                  </div>
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
