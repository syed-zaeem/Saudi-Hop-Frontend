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
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import GalleryOne from "@/components/hotel-single/GalleryOne";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import Header1 from "@/components/header/default-header";
import { useSelector } from "react-redux";
import UploadFiles from "@/features/fileSlice";

const HotelSingleV1Dynamic = () => {
  const [hotelImages, setHotelImages] = useState({})
  let params = useParams();
  const id = params.id;

  const { hotels } = useSelector((state) => state.hotels);

  const hotel = hotels.find((item) => item._id == id);

  useEffect(() => {
    if (hotels && hotels.length > 0) {
      fetchHotelImages(hotels);
    }
  }, [hotels]);

  const fetchHotelImages = async (hotels) => {
    const responseImages = await UploadFiles.getHotelImages(hotels);
    setHotelImages(responseImages);
  };

  const metadata = {
    title: `${hotel.title} – Luxury Stay in ${hotel.location} | Saudi Hop`,
    description: `Experience ${hotel.title} in ${hotel.location} – luxury amenities, prime location, and exclusive offers starting at US$${hotel.price} per night. Book your perfect stay with Saudi Hop today.`,
    keywords: `${hotel.title}, ${hotel.location} hotels, luxury stay in ${hotel.location}, best hotels in ${hotel.location}, ${hotel.title} rates, premium accommodation ${hotel.location}`,
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      {/* <TopBreadCrumb /> */}
      {/* End top breadcrumb */}

      {/* <StickyHeader hotel={hotel} /> */}
      {/* sticky single header for hotel single */}

      <GalleryOne hotel={hotel} />

      {/* End gallery grid wrapper */}

      <main>
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-xl-8">
                <div className="row y-gap-40">
                  {/* <div className="col-12">
                  <h3 className="text-22 fw-500">Property highlights</h3>
                  <PropertyHighlights />
                </div> */}
                  {/* End .col-12 Property highlights */}

                  <div id="overview" className="col-12">
                    {/* <Overview /> */}
                    <h3 className="text-22 fw-500 pt-40">Overview</h3>
                    {/* {hotel.description.map((paragraph) => ( */}
                    <p className="text-dark-1 text-15 mt-20">
                      {hotel.description}
                      <br />
                    </p>
                    {/* ))} */}
                  </div>
                  {/* End .col-12  Overview */}

                  <div className="col-12">
                    <h3 className="text-22 fw-500 pt-40 border-top-light">
                      Most Popular Facilities
                    </h3>
                    <div className="row y-gap-10 pt-20">
                      {/* <PopularFacilities /> */}
                      {hotel.facilities.map((facility) => (
                        <div key={facility} className="col-sm-6 col-md-5">
                          <div className="d-flex x-gap-15 y-gap-15 items-center">
                            {/* <i className="icon-no-smoke"></i> */}
                            <div className="text-16">{facility}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* End .col-12 Most Popular Facilities */}

                  {/* <div className="col-12">
                  <RatingTag />
                </div> */}
                  <div className="col-12">
                    <div className="px-24 py-20 rounded-4 bg-green-1">
                      <div className="row x-gap-20 y-gap-20 items-center">
                        <div className="flex gap-2 col-auto">
                          {Array.from({ length: hotel.rating }).map((_, i) => (
                            <div
                              key={i}
                              className="flex-center size-60 rounded-full bg-white"
                            >
                              <i className="icon-star text-yellow-1 text-30"></i>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .col-12 This property is in high demand! */}
                </div>
                {/* End .row */}
              </div>
              {/* End .col-xl-8 */}

              <div className="col-xl-4">
                {/* <SidebarRight hotel={hotel} /> */}
                <aside className="ml-50 lg:ml-0">
                  <div className="px-30 py-30 border-light rounded-4 shadow-4">
                    <div className="d-flex items-center justify-between">
                      <div>
                        <span className="text-20 fw-500">
                          US${hotel?.price}
                        </span>
                      </div>
                      <div className="d-flex items-center">
                        <div className="text-14 text-right mr-10">
                          <div className="lh-15 fw-500">Exceptional</div>
                          <div className="lh-15 text-light-1">
                            {hotel.rating} star ratings
                          </div>
                        </div>
                        <div className="size-40 flex-center bg-blue-1 rounded-4">
                          <div className="text-14 fw-600 text-white">
                            {hotel.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End d-flex */}

                    <div className="row y-gap-20 pt-30">
                      <div className="col-12 capitalize">
                        {hotel.tags.map((tag) => (
                          <div
                            key={tag}
                            className="px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar"
                          >
                            <h4 className="text-16 fw-500 ls-2 lh-16">{tag}</h4>
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

        {/* <section id="rooms" className="pt-30">
        <div className="container">
          <div className="row pb-20">
            <div className="col-auto">
              <h3 className="text-22 fw-500">Available Rooms</h3>
            </div>
          </div>
          <AvailableRooms hotel={hotel} />
        </div>
      </section> */}
        {/* End Available Rooms */}

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

        {/* <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>

              <ReplyFormReview />

              <ReplyForm />
            </div>
          </div>
        </div>
      </section> */}
        {/* End Reply Comment box section */}

        {/* <section className="mt-40" id="facilities">
        <div className="container">
          <div className="row x-gap-40 y-gap-40">
            <div className="col-12">
              <h3 className="text-22 fw-500">Facilities of this Hotel</h3>
              <div className="row x-gap-40 y-gap-40 pt-20">
                <Facilities />
              </div>
            </div>
          </div>
        </div>
      </section> */}
        {/* End facilites section */}

        {/* <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="px-24 py-20 rounded-4 bg-light-2">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <div className="flex-center size-60 rounded-full bg-white">
                      <img src="/img/icons/health.svg" alt="icon" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <h4 className="text-18 lh-15 fw-500">
                      Extra health &amp; safety measures
                    </h4>
                    <div className="text-15 lh-15">
                      This property has taken extra health and hygiene measures
                      to ensure that your safety is their priority
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        {/* End health &  safety measures section */}

        {/* <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Hotel surroundings</h3>
            </div>
          </div>

          <div className="row x-gap-50 y-gap-30 pt-20">
            <Surroundings />
          </div>
        </div>
      </section> */}
        {/* End hotel surroundings */}

        {/* <section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row">
              <div className="col-12">
                <h3 className="text-22 fw-500">Some helpful facts</h3>
              </div>
            </div>

            <div className="row x-gap-50 y-gap-30 pt-20">
              <HelpfulFacts />
            </div>
          </div>
        </div>
      </section> */}
        {/* End helpful facts surroundings */}

        {/* <section id="faq" className="pt-40 layout-pb-md">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-22 fw-500">
                  FAQs about
                  <br /> The Crown Hotel
                </h2>
              </div>

              <div className="col-lg-8">
                <div className="accordion -simple row y-gap-20 js-accordion">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        {/* End Faq about sections */}

        {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Popular properties similar to The Crown Hotel
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="pt-40 sm:pt-20 item_gap-x30">
            <Hotels2 />
          </div>
        </div>
      </section> */}
        {/* End similar hotel */}
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default HotelSingleV1Dynamic;
