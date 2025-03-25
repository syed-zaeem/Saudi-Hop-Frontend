import CallToActions from "@/components/common/CallToActions";
import Header1 from "@/components/header/header-1";
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

import MetaComponent from "@/components/common/MetaComponent";
import TopDestinations from "@/components/destinations/TopDestinations";
import DestinationsCards from "@/components/destinations/Destinations_Cards";
import HeroSectionDestinations from "@/components/destinations/Hero_Section_Destinations";

const metadata = {
  title: "Top Tourist Destinations in Saudi Arabia – Explore with Saudi Hop",
  description:
    "Explore the top tourist destinations in Saudi Arabia, including Al Ula, Riyadh, Jeddah, and more. Uncover historical sites, cultural landmarks, and adventure experiences with Saudi Hop.",
  keywords:
    "top Saudi Arabia destinations, tourist places in Saudi Arabia, visit Al Ula, Riyadh travel guide, Jeddah attractions, Saudi Hop tours",
};

const Destinations = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header1 />
      {/* End Header 1 */}

      <HeroSectionDestinations />

      <main>
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div
              className="row y-gap-20 justify-between items-end"
              style={{ marginTop: "40px" }}
            >
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">Saudi Destinations</h2>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 pt-20 sm:pt-20 item_gap-x30">
              {/* <Hotels /> */}
              {/* <TopDestinations /> */}
              <DestinationsCards />
            </div>
          </div>
        </section>
        {/* End  Hotel sections */}

        {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Car Hire</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            

            <div className="col-auto">
              <Link
                to="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cars />
          </div>
        </div>
        
      </section> */}
        {/* Popular Car Hire Sections */}

        {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top sights in London</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40">
            <Slights />
          </div>

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
        </div>
        
      </section> */}
        {/* End Top sights in London */}

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

export default Destinations;
