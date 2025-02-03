import Header1 from "@/components/header/header-1";
import HeroSectionPackages from "@/components/Packages/Hero_Section_Packages";
import Pagination from "@/components/hotel-list/common/Pagination";
// import HotelProperties from "@/components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";
import PackagesCards from "@/components/Packages/Packages_Cards";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";

const ThreeStarPackages = () => {
  return (
    <>
      <Header1 />
      <HeroSectionPackages
        title="3 Star Umrah Packages"
        paragraph="Experience unbeatable affordability and value with our budget-friendly 3 star Umrah packages."
        heroImage="/img/masthead/hero_background/package_one_background.avif"
      />

      <section className="page_paragraph" data-aos="fade-up">
        <h3 className="page_paragraph_heading">
          Delve into the unmatched comfort and value of our economy 3-star Umrah
          packages.
        </h3>
        <p className="page_paragraph_paragraph">
          Discover our carefully selected array of 3-star Umrah packages,
          tailored to suit various preferences: from comprehensive to
          budget-conscious, romantic escapes to family-friendly options.
          Designed by our skilled team, each package guarantees a seamless
          journey from inquiry to departure. Immerse yourself in the spiritual
          significance of our top Islamic destinations. Select from our
          offerings and embark on a rejuvenating pilgrimage today.
        </p>
      </section>

      <section className="page_paragraph" data-aos="fade-up">
      <h3 className="packages_page_paragraph_heading">
        3 Star Umrah Package Deals: Choose from Economical to Budget-Friendly
        Options!
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

export default ThreeStarPackages;
