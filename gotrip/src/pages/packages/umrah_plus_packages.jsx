import { useEffect } from "react";
import Header1 from "@/components/header/header-1";
import HeroSectionPackages from "@/components/Packages/Hero_Section_Packages";
import Pagination from "@/components/hotel-list/common/Pagination";
// import HotelProperties from "@/components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";
import PackagesCards from "@/components/Packages/Packages_Cards";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import { fiveStarPackagesData } from "@/data/packages";
import MetaComponent from "@/components/common/MetaComponent";
import { getAllPackages } from "@/features/packageSlice";
import { useDispatch } from "react-redux";
import { getAllHotels } from "@/features/hotelSlice";
import UmrahPlusPackagesCards from "@/components/Packages/UmrahPlus_Packages_Cards";

const metadata = {
  title:
    "Exclusive Umrah+ Packages – Explore Umrah with Global Destinations | Saudi Hop",
  description:
    "Discover premium Umrah+ packages that combine your pilgrimage with top destinations like Abu Dhabi, Qatar, Dubai, Oman, Turkey, and Pakistan. Enjoy seamless travel, luxury accommodations, and hassle-free bookings with Saudi Hop.",
  keywords:
    "Umrah+ packages, Umrah with Abu Dhabi, Umrah with Qatar, Umrah with Dubai, Umrah with Oman, Umrah with Turkey, Umrah with Pakistan, premium Umrah deals, multi-destination Umrah, Saudi Hop travel",
};

const UmrahPlusPackages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPackages());
    dispatch(getAllHotels());
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <HeroSectionPackages
        title="Umrah + Packages"
        paragraph="Combine your Umrah journey with top destinations like Qatar, Dubai, and more for a seamless travel experience."
        heroImage="/img/masthead/hero_background/umrah+package_background.avif"
      />

      <main>
        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="page_paragraph_heading">
            Elevate Your Umrah Journey with Exclusive Umrah+ Packages
          </h3>
          <p className="page_paragraph_paragraph">
            Explore our carefully curated Umrah+ packages, combining the
            spiritual journey of Umrah with top destinations like Abu Dhabi,
            Qatar, Dubai, Oman, Turkey, and more. Whether you seek luxury,
            budget-friendly options, or family-friendly experiences, our
            expertly designed packages ensure a seamless and enriching
            pilgrimage. Begin your transformative journey today.
          </p>
        </section>

        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="packages_page_paragraph_heading">
            Umrah+ Package Deals: Spirituality Meets Exploration!
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
                <UmrahPlusPackagesCards />
              </div>
              {/* End .row */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End layout for listing sidebar and content */}
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default UmrahPlusPackages;
