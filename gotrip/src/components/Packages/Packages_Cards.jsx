import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { threeStarPackagesData } from "../../data/packages";
import isTextMatched from "../../utils/isTextMatched";
import { useSelector } from "react-redux";
import UploadFiles from "@/features/fileSlice";

const PackagesCards = ({ category, packagesData }) => {
  const [packageImages, setPackageImages] = useState({});
  const [loadingImages, setLoadingImages] = useState({});

  const { packages } = useSelector((state) => state.packages);
  const requiredPackages = packages.filter(
    (pack) => pack.category === category && pack.isUmrahPlus === false
  );

  useEffect(() => {
    // console.log("Packages in useEffect:", packages);
    if (requiredPackages && requiredPackages.length > 0) {
      fetchPackageImages(requiredPackages);
    }
  }, [requiredPackages]);

  // const fetchAllPackages = async () =>{
  //   const response = await dispatch(getAllPackages())
  //   const allPackages = response.payload
  //   console.log("The all the packages after await is:", allPackages)
  //   fetchPackageImages(packages)
  // }

  const fetchPackageImages = async (packages) => {
    const responseImages = await UploadFiles.getPackageImages(packages)
    setPackageImages(responseImages)
  }

  // const fetchPackageImages = async (packages) => {
  //   const imageMap = {};
  //   const loadingState = {};

  //   for (const packageItem of packages) {
  //     if (packageItem.img) {
  //       loadingState[packageItem._id] = true;
  //       try {
  //         const blob = await UploadFiles.getFile(packageItem.img);
  //         if (blob) {
  //           const imageURL = URL.createObjectURL(blob);
  //           imageMap[packageItem._id] = imageURL;
  //         } else {
  //           imageMap[packageItem._id] = null;
  //         }
  //       } catch (error) {
  //         console.error(
  //           `Error fetching image for package ${packageItem._id}:`,
  //           error
  //         );
  //         imageMap[packageItem._id] = null;
  //       } finally {
  //         loadingState[packageItem._id] = false;
  //       }
  //     }
  //   }
  //   console.log("After fetching all the images of packages:", imageMap);
  //   setPackageImages(imageMap);
  //   setLoadingImages(loadingState);
  // };

  return (
    <>
      {requiredPackages.map((item) => (
        <div className="col-lg-3 col-sm-6" key={item?.id} data-aos="fade">
          <Link
            // to={`/hotel-single-v2/1`}
            to={`/package-details/${item._id}`}
            className="hotelsCard -type-1 hover-inside-slider"
          >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                <div className="cardImage ratio ratio-1:1">
                  <div className="cardImage__content ">
                    {packageImages && <img
                      className="rounded-4 col-12 js-lazy"
                      // src={item.img}
                      src={packageImages[item._id]}
                      alt={`${item.title} - ${item.highlights.join(", ")}`}
                    />}
                  </div>
                </div>

                <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                    <i className="icon-heart text-12" />
                  </button>
                </div>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                      isTextMatched(item?.tag, "breakfast included")
                        ? "bg-dark-1 text-white"
                        : ""
                    } ${
                      isTextMatched(item?.tag, "best seller")
                        ? "bg-blue-1 text-white"
                        : ""
                    } 
                    } ${
                      isTextMatched(item?.tag, "-25% today")
                        ? "bg-brown-1 text-white"
                        : ""
                    } 
                     ${
                       isTextMatched(item?.tag, "top rated")
                         ? "bg-yellow-1 text-dark-1"
                         : ""
                     }`}
                  >
                    {item?.tag}
                  </div>
                </div>
              </div>
            </div>
            <div className="hotelsCard__content mt-10">
              <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{item?.title}</span>
              </h4>
              <div className="mt-10">
                {/* <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                  {item?.rating}
                </div>
                <div className="text-14 text-dark-1 fw-500 ml-10">
                  Exceptional
                </div>
                <div className="text-14 text-light-1 ml-10">
                  {item?.numberOfReviews} reviews
                </div> */}
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="text-14 text-dark-1 fw-500 ml-0"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
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
    </>
  );
};

export default PackagesCards;
