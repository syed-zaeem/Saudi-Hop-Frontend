import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import { hotelsData } from "../../data/hotels";
import { hotelsData } from "@/data/hotels";
import isTextMatched from "../../../utils/isTextMatched";
import { useSelector } from "react-redux";
import UploadFiles from "@/features/fileSlice";

// const HotelsSingleDestination = ({ destination }) => {
//   const [hotelImages, setHotelImages] = useState({})
//   const { hotels } = useSelector((state) => state.hotels);

//   // const requiredHotels = hotels.filter((hotel)=>hotel.destination===destination)
//   // const requiredHotels = hotels

//   // const requiredHotels = hotels.filter(
//   //   (hotel) => hotel.destination === destination
//   // );

//   // const requiredHotels = useMemo(
//   //   () => hotels.filter((hotel) => hotel.destination === destination),
//   //   [hotels, destination]
//   // );

//   useEffect(() => {
//     if (hotels.length > 0) {
//       fetchHotelImages(hotels);
//     }
//   }, [hotels]);

//   const fetchHotelImages = async (hotels) => {
//     const responseImages = await UploadFiles.getHotelSingleImage(hotels);
//     setHotelImages(responseImages);
//   };

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


//   return (
//     <>
//     {/* {console.log("The component is rendering with required hotels: " , requiredHotels)} */}
//       {hotels.length !== 0 && <Slider {...settings}>
//         {hotels.slice(0,4).map((item) => {
//           console.log(item.title, item.destination)
//           return (item.destination===destination && <div
//             className="col-xl-3 col-lg-3 col-sm-6"
//             key={item?._id}
//             data-aos="fade"
//             // data-aos-delay={item.delayAnimation}
//           >
//             <Link
//               to={`/hotel-single-v1/${item._id}`}
//               className="hotelsCard -type-1 hover-inside-slider"
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
//           </div>)
// })}
//       </Slider>}
//     </>
//   );
// };

// export default HotelsSingleDestination;

















const HotelsSingleDestination = ({ destination }) => {
  const [hotelImages, setHotelImages] = useState({});
  const { hotels } = useSelector((state) => state.hotels);

  // Filter hotels by destination and remove duplicates
  const requiredHotels = useMemo(() => {
    const filtered = hotels.filter((hotel) => hotel.destination === destination);
    // Remove duplicates based on _id
    const uniqueHotels = Array.from(
      new Map(filtered.map((hotel) => [hotel._id, hotel])).values()
    );
    console.log("Filtered and unique requiredHotels:", uniqueHotels);
    return uniqueHotels;
  }, [hotels, destination]);

  useEffect(() => {
    if (hotels.length > 0) {
      fetchHotelImages(hotels);
    }
  }, [hotels]);

  const fetchHotelImages = async (hotels) => {
    const responseImages = await UploadFiles.getHotelSingleImage(hotels);
    console.log("Fetched hotelImages:", responseImages);
    setHotelImages(responseImages);
  };

  var settings = {
    dots: true,
    infinite: false, // Changed to false to test if infinite loop causes duplication
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

  console.log("Rendering with requiredHotels:", requiredHotels);

  return (
    <>
      {requiredHotels.length !== 0 && (
        <Slider {...settings}>
          {requiredHotels.map((item) => (
            <div
              className="col-xl-3 col-lg-3 col-sm-6"
              key={item?._id} // Ensure unique key
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
                        src={hotelImages[item._id] || "placeholder-image-url"} // Fallback for missing images
                        alt={`${item?.title} in ${item?.location} – Starting from US$${item?.price}`}
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
                      <span className="text-blue-1">US${item?.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default HotelsSingleDestination;





















// import { useState, useEffect, useMemo, useRef } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import { useSelector } from "react-redux";
// import UploadFiles from "@/features/fileSlice";

// const HotelsSingleDestination = ({ destination }) => {
//   const [hotelImages, setHotelImages] = useState({});
//   const { hotels } = useSelector((state) => state.hotels);
//   const isRendered = useRef(false); // Flag to track initial render

//   const requiredHotels = useMemo(
//     () => hotels.filter((hotel) => hotel.destination === destination),
//     [hotels, destination]
//   );

//   useEffect(() => {
//     if (requiredHotels.length > 0 && !isRendered.current) {
//       fetchHotelImages(requiredHotels);
//       isRendered.current = true; // Set flag to true after first render
//     }
//   }, [requiredHotels]);

//   const fetchHotelImages = async (hotels) => {
//     const responseImages = await UploadFiles.getHotelSingleImage(hotels);
    
//     // Only update state if the data is different
//     setHotelImages((prevImages) => {
//       if (JSON.stringify(prevImages) !== JSON.stringify(responseImages)) {
//         return responseImages;
//       }
//       return prevImages;
//     });
//   };

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 992, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 520, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <>
//     {console.log("Rendering with hotels required: " , requiredHotels)}
//       {requiredHotels.length !== 0 && (
//         <Slider {...settings}>
//           {requiredHotels.map((item) => (
//             <div
//               className="col-xl-3 col-lg-3 col-sm-6"
//               key={item?._id}
//               data-aos="fade"
//             >
//               <Link
//                 to={`/hotel-single-v1/${item._id}`}
//                 className="hotelsCard -type-1 hover-inside-slider"
//               >
//                 <div className="hotelsCard__image">
//                   <div className="cardImage ratio ratio-1:1">
//                     <div className="cardImage__content ">
//                       <img
//                         className="rounded-4 col-12 js-lazy"
//                         src={hotelImages[item._id]}
//                         alt={`${item?.title} in ${item?.location} – Starting from US$${item?.price}`}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="hotelsCard__content mt-10">
//                   <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
//                     <span>{item?.title}</span>
//                   </h4>
//                   <p className="text-light-1 lh-14 text-14 mt-5">
//                     {item?.location}
//                   </p>
//                   <div className="mt-5">
//                     <div className="fw-500">
//                       Starting from{" "}
//                       <span className="text-blue-1">US${item?.price}</span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </Slider>
//       )}
//     </>
//   );
// };

// export default HotelsSingleDestination;
