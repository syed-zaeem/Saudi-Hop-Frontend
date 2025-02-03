import Header1 from "@/components/header/header-1";
import HeroSectionPackages from "@/components/Packages/Hero_Section_Packages";
import Pagination from "@/components/hotel-list/common/Pagination";
// import HotelProperties from "@/components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";
import PackagesCards from "@/components/Packages/Packages_Cards";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";

const FourStarPackages = () => {
  return (
    <>
      <Header1 />
      <HeroSectionPackages
        title="4 Star Umrah Packages"
        paragraph="Discover elevated comfort and indulgence with our distinctive 4 star Umrah packages."
        heroImage="/img/masthead/hero_background/package_two_background.avif"
      />

      <section className="page_paragraph" data-aos="fade-up">
        <h3 className="page_paragraph_heading">
          Embark on a journey of comfort and luxury with our distinguished
          4-star Umrah packages.
        </h3>
        <p className="page_paragraph_paragraph">
          Delve into our thoughtfully curated assortment of 4-star Umrah
          packages, catering to a variety of preferences: from inclusive options
          to economical choices, romantic escapes to family adventures.
          Meticulously crafted by our seasoned team, each package guarantees a
          seamless experience from inquiry to departure. Immerse yourself in the
          spiritual essence of our premier Islamic destinations. Select from our
          array of offerings and embark on a rejuvenating pilgrimage today.
        </p>
      </section>

      <section className="page_paragraph" data-aos="fade-up">
        <h3 className="packages_page_paragraph_heading">
          4 Star Umrah Package Deals: Reserve Premium to Affordable Options!
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

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default FourStarPackages;
