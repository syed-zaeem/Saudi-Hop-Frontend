import Header1 from "@/components/header/header-1";
import HeroSectionPackages from "@/components/Packages/Hero_Section_Packages";
import Pagination from "@/components/hotel-list/common/Pagination";
// import HotelProperties from "@/components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";
import PackagesCards from "@/components/Packages/Packages_Cards";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";

const UltraLuxuryPackages = () => {
  return (
    <>
      <Header1 />
      <HeroSectionPackages
        title="Ultra Luxury Umrah Packages"
        paragraph="Experience unparalleled opulence and extravagance with our premier ultra-luxury Umrah packages, featuring the finest hotels and impeccable luxury services"
        heroImage="/img/masthead/hero_background/package_four_background.avif"
      />

      <section className="page_paragraph" data-aos="fade-up">
        <h3 className="page_paragraph_heading">
          Experience unparalleled opulence and comfort with our exclusive
          ultra-luxury Umrah packages.
        </h3>
        <p className="page_paragraph_paragraph">
          Each of our ultra-luxury packages offer 5-star accommodations at
          prestigious hotels in Mecca and Madinah, luxury transfers, visa
          processing services, and the option for flights in Business or First
          Class. All packages are customisable to suit your specific needs and
          preferences.
        </p>
      </section>

      <section className="page_paragraph" data-aos="fade-up">
        <h3 className="packages_page_paragraph_heading">
          Ultra-Luxury Umrah Package deals
        </h3>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            {/* <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center">
                <div className="col-auto">
                  <div className="text-18 fw-500">Filter</div>
                </div>
                <div className="col-auto">
                  <div className="row x-gap-15 y-gap-15">
                    <DropdownSelelctBar />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                <i className="icon-up-down text-14 mr-10"></i>
                Top picks for your search
              </button>
            </div> */}

            {/* <div className="border-top-light mt-30 mb-30"></div> */}

            <div className="row y-gap-30">
              <PackagesCards />
            </div>
            {/* End .row */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <section className="bg-blue-2" data-aos="fade-up">
        <div className="">
          <div className="row y-gap-40 justify-between">
            <div className="col-lg-5">
              <div
                className="overflow-hidden js-testimonials-slider-3 luxury_flex_left_col"
                data-aos-delay="50"
              >
                <h2 className="luxury_flex_left_col_heading">
                  Each of our ultra-luxury packages includes luxurious
                  transfers, ensuring your seamless journey to and from the
                  airport
                </h2>
                <p className="luxury_flex_left_col_paragraph">
                  Enjoy up to 15% off on all Umrah packages when you book with
                  Saudi Hop. We diligently compare hotel, flight, and
                  transportation prices to offer you the best rates in the
                  market.
                </p>
                <button className="button -dark-1 bg-blue-1 text-white luxury_flex_left_col_button">
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 p-0">
              <img
                src="/img/cars/two.jpg"
                style={{ width: "98%", marginLeft: "1%", height: "100%" }}
                alt="image"
              />
            </div>
            {/* End col */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default UltraLuxuryPackages;
