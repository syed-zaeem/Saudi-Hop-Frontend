import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import LocationTopBar from "@/components/common/LocationTopBar";
import RelatedBlog from "@/components/blog/blog-details/RelatedBlog";
import { threeStarPackagesData } from "@/data/packages";
import DetailsContent from "@/components/blog/blog-details/DetailsContent";
import FormReply from "@/components/blog/blog-details/FormReply";
import TopComment from "@/components/blog/blog-details/TopComment";
import BlogNavigator from "@/components/blog/blog-details/BlogNavigator";
import Comments from "@/components/blog/blog-details/Comments";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// import MetaComponent from "@/components/common/MetaComponent";

// const metadata = {
//   title: "Blog Single || GoTrip - Travel & Tour ReactJs Template",
//   description: "GoTrip - Travel & Tour ReactJs Template",
// };

// const SinglePackage = () => {
//   let params = useParams();
//   const id = params.id;
//   const requiredPackage = threeStarPackagesData.find((item) => item.id == id);

//   if (!requiredPackage) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <MetaComponent meta={metadata} />
//       <div className="header-margin"></div>
//       {/* header top margin */}

//       <DefaultHeader />
//       {/* End Header 1 */}

//       {/* <LocationTopBar /> */}
//       {/* End location top bar section */}

//       <section className="layout-pt-md layout-pb-md">
//         <div className="container">
//           <div className="row y-gap-40 justify-center text-center">
//             <div className="col-auto">
//               <h1 className="text-30 fw-600">{requiredPackage?.title}</h1>
//               {/* <div className="text-15 text-light-1 mt-10">{blog?.date}</div> */}
//             </div>
//             <div className="col-12">
//               <img
//                 src={requiredPackage?.img}
//                 alt={requiredPackage?.title}
//                 className="col-12 rounded-8 w-100 img_large_details"
//               />
//             </div>
//           </div>
//           {/* End .row top bar image and title */}

//           <div className="row y-gap-30">
//             <div className="col-xl-8 col-lg-10 layout-pt-md">
//               {/* <DetailsContent /> */}
//               {/* Details content */}
//               <h3 className="text-20 fw-500">About this Package?</h3>

//               {/* <div className="row y-gap-30 pt-30">
//                      <div className="col-md-6">
//                        <img src="/img/blog/single/2.png" alt="image" className="rounded-4" />
//                        <div className="text-15 mt-10">
//                          Donec purus posuere nullam lacus aliquam.
//                        </div>
//                      </div>
//                      <div className="col-md-6">
//                        <img src="/img/blog/single/3.png" alt="image" className="rounded-4" />
//                        <div className="text-15 mt-10">
//                          Donec purus posuere nullam lacus aliquam.
//                        </div>
//                      </div>
//                 </div> */}

//               <div className="text-15 mt-20">{requiredPackage.description}</div>

//               <div className="border-top-light pt-40 mt-40" />

//               <div className="row">
//                 <div className="col-auto">
//                   <h3 className="text-22 fw-500">Share your thoughts to us</h3>
//                   <p className="text-15 text-dark-1 mt-5">
//                     Your email address will not be published.
//                   </p>
//                 </div>
//               </div>
//               {/* End Leave a repy title */}

//               <FormReply />
//             </div>
//             {/* End .col */}
//           </div>
//           {/* End .row */}
//         </div>
//         {/* End .container */}
//       </section>
//       {/* Details Blog Details Content */}

//       <section className="layout-pt-md layout-pb-lg">
//         <div className="container">
//           <div className="row justify-center text-center">
//             <div className="col-auto">
//               <div className="sectionTitle -md">
//                 <h2 className="sectionTitle__title">Related content</h2>
//                 <p className=" sectionTitle__text mt-5 sm:mt-0">
//                   Interdum et malesuada fames
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* End .row */}

//           <div className="row y-gap-30 pt-40">
//             <RelatedBlog />
//           </div>
//           {/* End .row */}
//         </div>
//         {/* End .container */}
//       </section>
//       {/* End Related Content */}

//       <CallToActions />
//       {/* End Call To Actions Section */}

//       <DefaultFooter />
//       {/* End Call To Actions Section */}
//     </>
//   );
// };

// export default SinglePackage;

import { useState, useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { hotelsData } from "@/data/hotels";
import Header11 from "@/components/header/header-11";
import Overview from "@/components/hotel-single/Overview";
import PopularFacilities from "@/components/hotel-single/PopularFacilities";
import PropertyHighlights from "@/components/hotel-single/PropertyHighlights";
import RatingTag from "@/components/hotel-single/RatingTag";
import StickyHeader from "@/components/hotel-single/StickyHeader";
import TopBreadCrumb from "@/components/hotel-single/TopBreadCrumb";
import SidebarRight from "@/components/hotel-single/SidebarRight";
import AvailableRooms from "@/components/hotel-single/AvailableRooms";
import ReviewProgress from "@/components/hotel-single/guest-reviews/ReviewProgress";
import DetailsReview from "@/components/hotel-single/guest-reviews/DetailsReview";
import ReplyForm from "@/components/hotel-single/ReplyForm";
import ReplyFormReview from "@/components/hotel-single/ReplyFormReview";
import Facilities from "@/components/hotel-single/Facilities";

import Surroundings from "@/components/hotel-single/Surroundings";
import HelpfulFacts from "@/components/hotel-single/HelpfulFacts";
import Faq from "@/components/faq/Faq";
import Hotels2 from "@/components/hotels/Hotels2";

import MetaComponent from "@/components/common/MetaComponent";
import Header1 from "@/components/header/default-header";
import SinglePackageHotels from "@/components/Packages/Single_Package_Hotels";
import UploadFiles from "@/features/fileSlice";

const SinglePackage = () => {
  const [packageImages, setPackageImages] = useState({})
  let params = useParams();
  const id = params.id;
  // const requiredPackage = threeStarPackagesData.find((item) => item.id == id);
  const hotel = hotelsData.find((item) => item.id == id) || hotelsData[0];

  const { packages } = useSelector((state) => state.packages);

  const requiredPackage = packages.find((item) => item._id == id);

  useEffect(() => {
    // console.log("Packages in useEffect:", packages);
    if (packages && packages.length > 0) {
      fetchPackageImages(packages);
    }
  }, [packages]);

  const fetchPackageImages = async (packages) => {
    const responseImages = await UploadFiles.getPackageImages(packages);
    setPackageImages(responseImages);
  };

  if (!requiredPackage) {
    return <p>Loading...</p>;
  }

  const metadata = {
    title: `${requiredPackage.title} – From GBP £${requiredPackage.price} | Saudi Hop`,
    description: `${
      requiredPackage.title
    } includes ${requiredPackage.highlights.join(
      ", "
    )}. Experience luxury, comfort, and hassle-free pilgrimage with Saudi Hop.`,
    keywords: `${requiredPackage.title}, ${requiredPackage.highlights.join(
      ", "
    )}, Umrah package, Saudi Hop travel, pilgrimage services`,
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <Header11 /> */}
      <Header1 />
      {/* End Header 1 */}

      {/* <TopBreadCrumb /> */}
      {/* End top breadcrumb */}

      <main>
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="y-gap-40">
              <div className="flex gap-x-8 sm:gap-x-0 justify-between items-center col-auto">
                <h1 className="sm:text-24 text-30 fw-600">
                  {requiredPackage?.title}
                </h1>
                <div className="text-lg">
                  From{" "}
                  <span className="text-2xl lg:text-3xl text-blue-1 fw-500">
                  GBP £{requiredPackage.price}
                  </span>
                </div>
              </div>
              <div className="col-12">
                <img
                  // src={requiredPackage?.img}
                  src={packageImages[requiredPackage._id]}
                  alt={requiredPackage?.title}
                  className="col-12 rounded-8 w-100 img_large_details"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-30 layout-pb-sm">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-md-7">
                <div className="row y-gap-40">
                  {/* <div className="col-12">
                  <h3 className="text-22 fw-500">Property highlights</h3>
                  <PropertyHighlights />
                </div> */}
                  {/* End .col-12 Property highlights */}

                  <div id="overview" className="col-12">
                    <h3 className="text-22 fw-500">Overview</h3>

                    {/* {requiredPackage.description.map((paragraph) => (
                      <p key={paragraph} className="text-dark-1 text-15 mt-20">
                        {paragraph}
                        <br />
                      </p>
                    ))} */}
                    <p className="text-dark-1 text-15 mt-20">
                      {requiredPackage.description}
                      <br />
                    </p>
                  </div>
                  {/* End .col-12  Overview */}

                  <div className="col-12">
                    <div className="px-24 py-20 rounded-4 bg-green-1">
                      <div className="row x-gap-20 y-gap-20 items-center">
                        <div className="flex gap-2 col-auto">
                          {Array.from({ length: requiredPackage.rating }).map(
                            (_, i) => (
                              <div
                                key={i}
                                className="flex-center size-60 rounded-full bg-white"
                              >
                                <i className="icon-star text-yellow-1 text-30"></i>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .col-12 This property is in high demand! */}
                </div>
                {/* End .row */}
              </div>
              {/* End .col-xl-8 */}

              <div className="col-md-5">
                {/* <SidebarRight hotel={hotel} /> */}
                <aside className="ml-50 lg:ml-0">
                  <div className="px-30 py-30 border-light rounded-4 shadow-4">
                    <div className="d-flex items-center justify-between">
                      <div>
                        From
                        <span className="text-20 fw-500 ml-2">
                        GBP £{requiredPackage?.price}
                        </span>
                      </div>
                      <div className="d-flex items-center">
                        <div className="text-14 text-right mr-10">
                          <div className="lh-15 fw-500">Exceptional</div>
                          <div className="lh-15 text-light-1">
                            {requiredPackage.rating} star ratings
                          </div>
                        </div>
                        <div className="size-40 flex-center bg-blue-1 rounded-4">
                          <div className="text-14 fw-600 text-white">
                            {requiredPackage.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End d-flex */}

                    <div className="row y-gap-20 pt-30">
                      <div className="col-12">
                        {requiredPackage.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar"
                          >
                            <h4 className="text-16 fw-500 ls-2 lh-16">
                              {highlight}
                            </h4>
                          </div>
                        ))}
                      </div>

                      <div className="col-12">
                        <div className="button-item h-full">
                          <button
                            className="button -dark-1 px-35 h-60 col-12 bg-blue-1 text-white"
                            style={{ fontSize: "16px" }}
                          >
                            Book Now
                          </button>
                        </div>
                        {/* End search button_item */}
                      </div>
                    </div>
                  </div>
                  {/* End px-30 FilterBox */}
                </aside>
              </div>
              {/* End .col-xl-4 */}
            </div>
            {/* End .row */}
          </div>
          {/* End container */}
        </section>
        {/* End single page content */}

        {/* <section className="pt-40" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Guest reviews</h3>
            </div>
          </div>

          <ReviewProgress />

          <div className="pt-40">
            <DetailsReview />
          </div>

          <div className="row pt-30">
            <div className="col-auto">
              <a href="#" className="button -md -outline-blue-1 text-blue-1">
                Show all 116 reviews{" "}
                <div className="icon-arrow-top-right ml-15"></div>
              </a>
            </div>
          </div>
        </div>
      </section> */}
        {/* End Review section */}

        <section className="layout-pt-md layout-pb-lg mt-0 md:mt-20">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">
                    Hotels in this Package
                  </h2>
                </div>
                {/* End sectionTitle */}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}

            <div className="pt-40 sm:pt-20 item_gap-x30">
              <SinglePackageHotels hotelIds={requiredPackage.hotels} />
            </div>
            {/* End slide hotel */}
          </div>
          {/* End .container */}
        </section>
        {/* End similar hotel */}

        <div className="container layout-pb-lg">
          <div className="button-item h-full col-8 col-md-5 col-sm-6 col-lg-4 mx-auto">
            <button
              className="button -dark-1 px-35 h-60 col-12 bg-blue-1 text-white"
              style={{ fontSize: "18px" }}
            >
              Book Now
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default SinglePackage;
