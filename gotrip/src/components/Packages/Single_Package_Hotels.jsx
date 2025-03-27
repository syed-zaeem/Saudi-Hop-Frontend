// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import { hotelsData } from "../../data/hotels";
// import isTextMatched from "../../utils/isTextMatched";
// import { useSelector } from "react-redux";
// import { useMemo } from "react";
// import UploadFiles from "@/features/fileSlice";

// const SinglePackageHotels = ({ hotelIds }) => {
//   const [hotelImages, setHotelImages] = useState({});
//   const { hotels } = useSelector((state) => state.hotels);

//   const requiredHotels = hotels.filter((hotel) => hotelIds.includes(hotel._id));
//   // const requiredHotels = useMemo(
//   //   () => hotels.filter((hotel) => hotelIds.includes(hotel._id)),
//   //   [hotels, hotelIds]
//   // );

//   useEffect(() => {
//     if (requiredHotels && requiredHotels.length > 0) {
//       fetchHotelImages(requiredHotels);
//     }
//   }, [requiredHotels]);

//   const fetchHotelImages = async (hotels) => {
//     const responseImages = await UploadFiles.getHotelSingleImage(hotels);
//     setHotelImages(responseImages);
//   };

//   if (requiredHotels.length != 0) {
//     console.log(
//       "The required hotels are:",
//       requiredHotels.length,
//       hotels.length
//     );
//   }

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },

//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 520,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   var itemSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   // custom navigation
//   function ArrowSlick(props) {
//     let className =
//       props.type === "next"
//         ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
//         : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
//     className += " arrow";
//     const char =
//       props.type === "next" ? (
//         <>
//           <i className="icon icon-chevron-right text-12"></i>
//         </>
//       ) : (
//         <>
//           <span className="icon icon-chevron-left text-12"></span>
//         </>
//       );
//     return (
//       <button className={className} onClick={props.onClick}>
//         {char}
//       </button>
//     );
//   }

//   return (
//     <>
//       <Slider {...settings}>
//         {requiredHotels.map((item) => (
//           <div
//             className="col-xl-3 col-lg-3 col-sm-6"
//             key={item?._id}
//             data-aos="fade"
//           >
//             <Link
//               to={`/hotel-single-v1/${item._id}`}
//               className="hotelsCard -atype-1 hover-inside-slider"
//             >
//               <div className="hotelsCard__image">
//                 <div className="cardImage inside-slider">
//                   {/* <Slider
//                     {...itemSettings}
//                     arrows={true}
//                     nextArrow={<ArrowSlick type="next" />}
//                     prevArrow={<ArrowSlick type="prev" />}
//                   >
//                     {item?.slideImg?.map((slide, i) => (
//                       <div className="cardImage ratio ratio-1:1" key={i}>
//                         <div className="cardImage__content ">
//                           <img
//                             className="rounded-4 col-12 js-lazy"
//                             src={slide}
//                             alt="image"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </Slider> */}

//                   <div className="cardImage ratio ratio-1:1">
//                     <div className="cardImage__content ">
//                       <img
//                         className="rounded-4 col-12 js-lazy"
//                         // src={item.images[0]}
//                         src={hotelImages[item._id]}
//                         alt={`${item?.title} in ${item?.location} – Starting from US$${item?.price}`}
//                       />
//                     </div>
//                   </div>

//                   {/* <div className="cardImage__wishlist">
//                     <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
//                       <i className="icon-heart text-12" />
//                     </button>
//                   </div> */}

//                   {/* <div className="cardImage__leftBadge">
//                     <div
//                       className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
//                         isTextMatched(item?.tag, "breakfast included")
//                           ? "bg-dark-1 text-white"
//                           : ""
//                       } ${
//                         isTextMatched(item?.tag, "best seller")
//                           ? "bg-blue-1 text-white"
//                           : ""
//                       }  ${
//                         isTextMatched(item?.tag, "top rated")
//                           ? "bg-yellow-1 text-dark-1"
//                           : ""
//                       }`}
//                     >
//                       {item?.tag}
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
//               <div className="hotelsCard__content mt-10">
//                 <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
//                   <span>{item?.title}</span>
//                 </h4>
//                 <p className="text-light-1 lh-14 text-14 mt-5">
//                   {item?.location}
//                 </p>
//                 {/* <div className="d-flex items-center mt-20">
//                   <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
//                     {item?.rating}
//                   </div>
//                   <div className="text-14 text-dark-1 fw-500 ml-10">
//                     Exceptional
//                   </div>
//                   <div className="text-14 text-light-1 ml-10">
//                     {item?.numberOfReviews} reviews
//                   </div>
//                 </div> */}
//                 <div className="mt-5">
//                   <div className="fw-500">
//                     Starting from{" "}
//                     <span className="text-blue-1">US${item?.price}</span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </>
//   );
// };

// export default SinglePackageHotels;




import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import UploadFiles from "@/features/fileSlice";

const SinglePackageHotels = ({ hotelIds }) => {
  const [hotelImages, setHotelImages] = useState({});
  const { hotels } = useSelector((state) => state.hotels);

  // Memoize requiredHotels and remove duplicates
  const requiredHotels = useMemo(() => {
    const filtered = hotels.filter((hotel) => hotelIds.includes(hotel._id));
    // Remove duplicates based on _id
    const uniqueHotels = Array.from(
      new Map(filtered.map((hotel) => [hotel._id, hotel])).values()
    );
    console.log("Unique requiredHotels after filtering:", uniqueHotels);
    return uniqueHotels;
  }, [hotels, hotelIds]);

  useEffect(() => {
    if (requiredHotels && requiredHotels.length > 0) {
      fetchHotelImages(requiredHotels);
    }
  }, [requiredHotels]);

  const fetchHotelImages = async (hotels) => {
    try {
      const responseImages = await UploadFiles.getHotelSingleImage(hotels);
      console.log("Fetched hotelImages:", responseImages);
      setHotelImages((prevImages) => ({
        ...prevImages,
        ...responseImages,
      }));
    } catch (error) {
      console.error("Error fetching hotel images:", error);
    }
  };

  // Log hotelImages changes
  useEffect(() => {
    console.log("Current hotelImages state:", hotelImages);
  }, [hotelImages]);

  // Log input data for debugging
  useEffect(() => {
    console.log("Input hotels:", hotels);
    console.log("Input hotelIds:", hotelIds);
    console.log("Computed requiredHotels:", requiredHotels);
  }, [hotels, hotelIds, requiredHotels]);

  var settings = {
    dots: true,
    infinite: false, // Set to false to test duplication
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <i className="icon icon-chevron-right text-12"></i>
      ) : (
        <span className="icon icon-chevron-left text-12"></span>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  if (requiredHotels.length === 0) {
    return <div>No hotels found for the provided IDs.</div>;
  }

  return (
    <>
      <Slider {...settings}>
        {requiredHotels.map((item, index) => (
          <div
            className="col-xl-3 col-lg-3 col-sm-6"
            key={`${item?._id}-${index}`} // Ensure unique key
            data-aos="fade"
          >
            <Link
              to={`/hotel-single-v1/${item._id}`}
              className="hotelsCard -type-1 hover-inside-slider"
            >
              <div className="hotelsCard__image">
                <div className="cardImage ratio ratio-1:1">
                  <div className="cardImage__content">
                    <img
                      className="rounded-4 col-12 js-lazy"
                      src={
                        hotelImages[item._id] || "https://via.placeholder.com/150"
                      }
                      alt={`${item?.title} in ${item?.location} – Starting from £${item?.price}`}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150";
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="hotelsCard__content mt-10">
                <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item?.title}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5">
                  {item?.location}
                </p>
                <div className="mt-5">
                  <div className="fw-500">
                    Starting from{" "}
                    <span className="text-blue-1">£{item?.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SinglePackageHotels;