import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import PropTypes from "prop-types";

const StarPackages = ({ packagesData, title, uniqueId }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.js-hotels-next-${uniqueId}`,
          prevEl: `.js-hotels-prev-${uniqueId}`,
        }}
        pagination={{
          el: `.js-hotels-pag-${uniqueId}`,
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}>
        {packagesData.slice(0, 8).map((item) => (
          <SwiperSlide key={item?.id}>
            <div
              className="hotelsCard -type-1 hover-inside-slider"
              data-aos="fade">
              <div className="hotelsCard__image">
                <div className="cardImage ratio ratio-1:1">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{ clickable: true }}
                        navigation={true}>
                        <img
                          className="rounded-4 col-12 js-lazy"
                          src={item.img}
                          alt="hotel"
                        />
                      </Swiper>
                    </div>
                  </div>
                </div>

                {/* <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                    <i className="icon-heart text-12" />
                  </button>
                </div> */}
              </div>

              <div className="hotelsCard__content mt-10">
                <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item?.title}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5">
                  {item?.location}
                </p>
                <div className="d-flex items-center mt-20">
                  {/* <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                    {item?.ratings}
                  </div> */}
                  {/* <div className="text-14 text-dark-1 fw-500 ml-10">
                    Exceptional
                  </div>
                  <div className="text-14 text-light-1 ml-10">
                    {item?.numberOfReviews} reviews
                  </div> */}
                </div>
                <div className="mt-5">
                  <div className="fw-500">
                    Starting from{" "}
                    <span className="text-blue-1">US ${item?.price}</span>
                  </div>
                </div>
              </div>
              <button
                className="button px-24 h-50-dark-1 bg-blue-1 text-white book_now_button"
                onClick={() => alert("Booking initiated!")}
                style={{ transition: "background-color 0.3s ease-in-out" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#ff5722")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }>
                Book Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center sm:justify-start pt-40 sm:pt-20">
        <div className="col-auto">
          <button
            className={`d-flex items-center text-24 arrow-left-hover js-hotels-prev-${uniqueId}`}>
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        <div className="col-auto">
          <div
            className={`pagination -dots text-border js-hotels-pag-${uniqueId}`}
          />
        </div>
        <div className="col-auto">
          <button
            className={`d-flex items-center text-24 arrow-right-hover js-hotels-next-${uniqueId}`}>
            <i className="icon icon-arrow-right" />
          </button>
        </div>
      </div>
    </>
  );
};

// PropTypes validation
StarPackages.propTypes = {
  packagesData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
};

export default StarPackages;
