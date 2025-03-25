import { useEffect } from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TopDestinations2 from "@/components/destinations/TopDestinations2";
import Faq from "@/components/faq/Faq";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";
import Testimonial from "@/components/home/home-1/Testimonial";
import { Link } from "react-router-dom";
import Slights from "@/components/block/Slights";
import Blog from "@/components/blog/Blog3";
import LocationTopBar from "@/components/common/LocationTopBar";
import Banner from "@/components/destinations/components/Banner";
import Categories from "@/components/destinations/components/Categories";
import IntroTown from "@/components/destinations/components/IntroTown";
import Weather from "@/components/destinations/components/Weather";
import GeneralInfo from "@/components/destinations/components/GeneralInfo";
import Cars from "@/components/cars/Cars";
import Tours from "@/components/tours/Tours";
import Activity from "@/components/activity/Activity";
import Rentals from "@/components/rentals/Rentals";
import Hotels from "@/components/hotels/Hotels2";
import { useParams } from "react-router-dom";
import { allDestinations } from "@/data/desinations";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels } from "@/features/hotelSlice";

import MetaComponent from "@/components/common/MetaComponent";
import HotelsSingleDestination from "@/components/destinations/components/HotelsSingleDestination";

const SingleDestination = () => {
  let params = useParams();
  const id = params.id;
  const destination = allDestinations.find((item) => item.id == id);

  // const { hotels } = useSelector((state) => state.hotels);

  // const requiredHotels = hotels.filter((hotel)=>hotel.destination===destination.city)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllHotels())
  }, [])

  if (!destination) {
    return <p>Loading...</p>;
  }

  const metadata = {
    title: `${destination.city} – Explore ${destination.city} in Saudi Arabia | Saudi Hop`,
    description: `${destination.city} offers ${
      destination.highlight ||
      "rich cultural experiences, iconic landmarks, and adventure."
    } Explore top attractions, travel tips, and exclusive packages with Saudi Hop.`,
    keywords: `${destination.city} travel guide, visit ${destination.city}, ${destination.city} tourist attractions, Saudi Arabia destinations, ${destination.city} packages`,
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <main>
        <section className="layout-pb-md">
          <div className="container">
            <div className="row">
              <Banner
                image={destination.img}
                city={destination.city}
                highlight={destination.highlight}
              />
            </div>
            {/* End .row */}

            <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
              <Categories />
            </div>
            {/* End .row */}

            <div className="y-gap-20 pt-40">
              <div className="col-auto">
                <h2>About {destination.city}</h2>
              </div>
              {/* End .col-auto */}

              <IntroTown paragraphs={destination.paragraphs} />
            </div>
            {/* End .row */}

            {/* <div className="pt-30 mt-30 border-top-light" /> */}
            {/* border separation */}

            {/* <div className="row y-gap-20">
              <div className="col-12">
                <h2 className="text-22 fw-500">Local weather</h2>
              </div>

              <Weather />
            </div> */}
            {/* End local weather */}

            {/* <div className="pt-30 mt-30 border-top-light" />
          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
            <GeneralInfo />
          </div> */}
            {/* End .row */}
            <div className="mt-30 border-top-light" />
            {/* border separation */}
          </div>
          {/* End .container */}
        </section>
        {/* End Top Banner,categorie,intro,weather, generic info section */}

        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">Recommended Hotels</h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Interdum et malesuada fames ac ante ipsum
                  </p>
                </div>
              </div>
              {/* End .col */}

              {/* <div className="col-auto">
              <Link
                to="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
            </div>

            <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
              <HotelsSingleDestination destination={destination.city} />
            </div>
          </div>
        </section>
        {/* End  Hotel sections */}

        {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
        </div>
      </section> */}
        {/* End Tours Sections */}

        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">
                    Top Places in {destination.city}
                  </h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    These popular destinations have a lot to offer
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row y-gap-30 pt-40">
              <Slights />
            </div>
            {/* End .row */}

            <div className="row justify-center mt-40">
              <div className="col-auto">
                <Link
                  to="#"
                  className="button h-50 w-250 -outline-blue-1 text-blue-1"
                >
                  Explore more <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End Top sights in London */}

        <section className="layout-pt-sm layout-pb-xl">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">
                    Get inspiration for your next trip
                  </h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Interdum et malesuada fames
                  </p>
                </div>
              </div>
            </div>
            {/* End .row  */}
            <div className="row y-gap-30 pt-40">
              <Blog />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End blog Section */}

        {/* <section className="layout-pt-lg layout-pb-lg bg-light-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}
        {/* End testimonial Section */}

        {/* <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                FAQs about
                <br />
                London
              </h2>
            </div>

            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </section> */}
        {/* End Faq Section */}

        {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Destinations near London
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="pt-40 relative">
            <TopDestinations2 />
          </div>
        </div>
      </section> */}
        {/* End top destinations */}
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default SingleDestination;
