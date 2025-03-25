import { useEffect } from "react";
import AddBanner from "@/components/add-banner/AddBanner";
import PopularDestinations from "@/components/destinations/PopularDestinations";
import DefaultFooter from "@/components/footer/default";
import Header1 from "@/components/header/header-1";
import Hero1 from "@/components/hero/hero-1";
import BlockGuide from "@/components/block/BlockGuide";
import Blog from "@/components/blog/Blog3";
import CallToActions from "@/components/common/CallToActions";
import Destinations from "@/components/home/home-1/Destinations";
import Testimonial from "@/components/testimonial/Testimonial";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";
import Hotels from "@/components/hotels/Hotels";
import SelectFilter from "@/components/hotels/filter-tabs/SelectFilter";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import Three_Star_Packages from "@/components/Packages/Three_Star_Packages";
import Four_Star_Packages from "@/components/Packages/Four_Star_Packages";
import StarPackages from "@/components/Packages/Star_Packages";
// import { threeStarPackagesData, fourStarPackagesData } from "../../data/packages";
import {
  threeStarPackagesData,
  fourStarPackagesData,
  fiveStarPackagesData,
} from "@/data/packages";
import TripPairUpDestinations from "@/components/trip-pair-up/tripPairUpDestinations";
import { useDispatch } from "react-redux";
import { getAllPackages } from "@/features/packageSlice";

const metadata = {
  title: "Saudi Hop: Luxury Travel Packages & Top Saudi Arabia Destinations",
  description:
    "Explore exclusive Saudi Arabia travel packages with Saudi Hop. Book 3-star to ultra-luxury stays, discover top destinations, and enjoy seamless booking experiences.",
  keywords:
    "Saudi travel, Saudi Arabia packages, luxury stays, hotel deals, explore Saudi Arabia, travel booking, tourism in Saudi Arabia",
};

const Home_1 = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPackages())
  }, [])

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header1 />
      {/* End Header 1 */}

      <Hero1 />
      {/* End Hero 1 */}
      <main>
        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="page_paragraph_heading">
            Discover exceptional Umrah Packages at unbeatable prices
          </h3>
          <p className="page_paragraph_paragraph">
            Experience the spiritual journey to Makkah and Medina with ease,
            tailored for our Muslim brothers and sisters in the United Kingdom.
            Our comprehensive packages include flights ,visa assistance, and
            accommodations. Embark on a memorable pilgrimage with Saudi Hop,
            your trusted travel partner.
          </p>
        </section>

        <section className="instant_enquiry" data-aos="fade-up">
          <h3 className="instant_enquiry_heading">
            Design & Personalise Your Umrah or Holiday Package with Us
          </h3>
          <p className="instant_enquiry_paragraph">Instant Enquiry Form</p>
          <form className="">
            <div className="instant_enquiry_form">
              <div className="form-input instant_enquiry_form_input">
                <input type="text" required />
                <label className="lh-1 text-14 text-light-1">Your Name</label>
              </div>
              <div className="form-input instant_enquiry_form_input">
                <input type="email" required />
                <label className="lh-1 text-14 text-light-1">Email</label>
              </div>
              <div className="form-input instant_enquiry_form_input">
                <input type="text" required />
                <label className="lh-1 text-14 text-light-1">Phone</label>
              </div>
              <div className="form-input instant_enquiry_form_input">
                <input type="number" required />
                <label className="lh-1 text-14 text-light-1">
                  No. of Passengers
                </label>
              </div>
            </div>

            <div className="page_paragraph_updated">
              <input
                type="checkbox"
                style={{ cursor: "pointer", width: "20px" }}
              />
              <p className="">
                Stay Updated: Sign Up for Exclusive Offers and Competitions!
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="button px-24 h-50 -dark-1 bg-blue-1 text-white enquiry_button"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        <section className="layout-pt-md layout-pb-md mt-20">
          <div className="container">
            <div className="row y-gap-10 justify-between items-end">
              <div className="col-auto" style={{ width: "100%" }}>
                <div className="sectionTitle -md">
                  <h2
                    className="sectionTitle__title"
                    style={{ textAlign: "center" }}
                  >
                    Featured Offers of the Week: Discover Exclusive Deals Now!
                  </h2>
                </div>
              </div>
              {/* <div className="col-sm-auto">
              <SelectFilter />
            </div> */}
            </div>
            {/* End .row */}

            <section>
              <h4
                className=" sectionTitle__text mt-5"
                style={{ textAlign: "center" }}
              >
                5 Star Umrah Package Deals: Choose from Luxurious to Deluxe
                Options!
              </h4>
              <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
                {/* <Hotels /> */}
                <StarPackages
                  // packagesData={fiveStarPackagesData}
                  category="5 Star"
                  title="Five Star"
                  uniqueId="five-star"
                />
              </div>
            </section>

            <section>
              <h4
                className=" sectionTitle__text mt-20"
                style={{ textAlign: "center" }}
              >
                4 Star Umrah Package Deals: Reserve Premium to Affordable
                Options!
              </h4>
              <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
                {/* <Hotels /> */}
                <StarPackages
                  // packagesData={fourStarPackagesData}
                  category="4 Star"
                  title="Four Star"
                  uniqueId="four-star"
                />
              </div>
            </section>

            <section>
              <h4
                className=" sectionTitle__text mt-20"
                style={{ textAlign: "center" }}
              >
                3 Star Umrah Package Deals: Choose from Economical to
                Budget-Friendly Options!
              </h4>
              <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
                {/* <Hotels /> */}
                <StarPackages
                  // packagesData={threeStarPackagesData}
                  category="3 Star"
                  title="Three Star"
                  uniqueId="three-star"
                />
              </div>
            </section>
            {/* End relative */}
          </div>
        </section>
        {/* Recommended Properties */}

        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-20 justify-between">
              <BlockGuide />
            </div>
          </div>
        </section>
        {/* Block Guide Section */}

        <section className="bg-blue-2" data-aos="fade-up">
          <div className="">
            <div className="row y-gap-40 justify-between">
              <div className="col-xl-6 col-lg-6 p-0">
                <img
                  src="/img/Main_Images/one.avif"
                  style={{ width: "98%", marginLeft: "1%", height: "100%" }}
                  alt="Unlock Exclusive Discount Offers"
                />
              </div>
              {/* End col */}

              <div className="col-lg-6">
                <div
                  className="overflow-hidden js-testimonials-slider-3 flex_right_col"
                  data-aos-delay="50"
                >
                  <h2 className="flex_right_col_heading">
                    Unlock Exclusive Discount Offers
                  </h2>
                  <p className="flex_right_col_paragraph">
                    Enjoy up to 15% off on all Umrah packages when you book with
                    Saudi Hop. We diligently compare hotel, flight, and
                    transportation prices to offer you the best rates in the
                    market.
                  </p>
                  <button className="button -dark-1 bg-blue-1 text-white flex_right_col_button">
                    Call Us Now
                  </button>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End container */}
        </section>

        <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">Popular Destinations</h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    These popular destinations have a lot to offer
                  </p>
                </div>
              </div>
              {/* End col-auto */}

              <div className="col-auto md:d-none">
                <Link
                  to="/destinations"
                  className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                >
                  View All Destinations
                  <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
              {/* End col-auto */}
            </div>
            {/* End .row */}

            <div className="relative pt-40 sm:pt-20">
              <PopularDestinations />
            </div>
          </div>
          {/* End .container */}
        </section>
        {/* End Popular Destinations */}

        <section className="layout-pt-md layout-pb-md">
          <div className="page_paragraph">
            <h3 className="trippairup_paragraph_heading">
              Enhance Your Umrah Experience: Pair Your Trip with a Stay at Our
              Handpicked Destinations!
            </h3>
            <p className="page_paragraph_paragraph">
              Explore destinations offering accommodations adhering to Islamic
              Shariah principles. Enjoy exclusive amenities such as halal food,
              alcohol-free properties, secluded beaches, private pools, and
              women-only spas, adding an extra touch of excitement to your Umrah
              trip.
            </p>
          </div>
          <div className="container">
            {/* End .row  */}
            <div className="row y-gap-30 pt-40">
              <TripPairUpDestinations />
            </div>
          </div>
          {/* End .container */}

          <div>
            <button className="button px-24 h-50 -dark-1 bg-blue-1 text-white enquiry_button">
              Get Quote
            </button>
          </div>
        </section>
        {/* End blog Section */}

        <section className="" data-aos="fade-up">
          <div className="">
            <div className="row y-gap-40 justify-between">
              <div className="col-xl-6 col-lg-6 p-0 bg-blue-2">
                <h1 className="content_left_col">
                  Saudi Hop: Your Premier Choice for Pilgrimage Travel Services
                  at Unbeatable Prices
                </h1>
              </div>
              {/* End col */}

              <div className="col-lg-6">
                <div
                  className="overflow-hidden js-testimonials-slider-3 content_right_col"
                  data-aos-delay="50"
                >
                  <h2 className="content_right_col_heading">
                    Saudi Hop Offers Best Umrah Packages at the Lowest Price
                  </h2>
                  <p className="content_right_col_paragraph">
                    Saudi Hop is your dedicated companion for Umrah services,
                    committed to serving Muslim brothers and sisters in the UK.
                    With years of experience, we provide comprehensive Umrah
                    packages that cover flight reservations, accommodations, and
                    transportation arrangements. Our knowledgeable agents assist
                    in selecting the best options for your pilgrimage, ensuring
                    a seamless journey to the holy cities of Makkah and Medina.
                    Committed to affordability and convenience, Saudi Hop makes
                    the sacred pilgrimage accessible to all. Trust Saudi Hop for
                    a memorable and fulfilling Umrah experience.
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End container */}
        </section>

        <section className="layout-pt-sm" data-aos="fade-up">
          <div className="">
            <div className="row y-gap-40 justify-between">
              <div
                className="col-xl-6 col-lg-6 mid_content_left_col"
                style={{ backgroundColor: "rgb(166, 207, 250)" }}
              >
                <h4 className="mid_content_left_col_text">
                  Unlock Up to 15% Discount on Our Packages!
                </h4>
                <button className="button -dark-1 bg-blue-1 text-white mid_content_left_col_button">
                  Get Quote
                </button>
              </div>
              {/* End col */}

              <div
                className="col-lg-6"
                style={{ backgroundColor: "rgb(199, 202, 203)" }}
              >
                <div
                  className="overflow-hidden js-testimonials-slider-3 mid_content_right_col"
                  data-aos-delay="50"
                >
                  <h4 className="mid_content_right_col_text">
                    Not Sure Where to Start? Let Us Guide You!
                  </h4>
                  <button className="button -dark-1 bg-blue-1 text-white mid_content_right_col_button">
                    Call Us Now
                  </button>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End container */}
        </section>

        <section
          className="layout-pt-md layout-pb-lg bg-light-2"
          style={{ marginTop: "52px" }}
        >
          <div className="section-bg__item" />
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title instant_enquiry_heading">
                    What Our Customers Say About Us
                  </h2>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="overflow-hidden pt-60 js-section-slider">
              <div className="item_gap-x30">
                <Testimonial />
              </div>
            </div>
            {/* End .overflow-hidden */}
          </div>
          {/* End .container */}
        </section>
      </main>

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Destinations we love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="tabs -pills pt-40 js-tabs">
            <Destinations />
          </div>
        </div>
      </section> */}
      {/* End Destination we love Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default Home_1;
