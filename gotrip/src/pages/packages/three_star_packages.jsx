import { useState, useEffect } from "react";
import Header1 from "@/components/header/header-1";
import HeroSectionPackages from "@/components/Packages/Hero_Section_Packages";
import Pagination from "@/components/hotel-list/common/Pagination";
// import HotelProperties from "@/components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";
import PackagesCards from "@/components/Packages/Packages_Cards";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import { threeStarPackagesData } from "@/data/packages";
import MetaComponent from "@/components/common/MetaComponent";
import { getAllPackages } from "@/features/packageSlice";
import { useDispatch } from "react-redux";
import { getAllHotels } from "@/features/hotelSlice";
import UploadFiles from "@/features/fileSlice";

const metadata = {
  title: "Affordable 3-Star Umrah Packages – Saudi Hop",
  description:
    "Discover affordable 3-star Umrah packages with comfortable stays in Makkah and Medina. Book your hassle-free Umrah journey with Saudi Hop today!",
  keywords:
    "3-star Umrah packages, affordable Umrah deals, budget-friendly Umrah, Makkah and Medina stays, Umrah booking Saudi Hop",
};

const ThreeStarPackages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetchAllPackages()
    dispatch(getAllPackages());
    dispatch(getAllHotels());
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />

      <Header1 />
      <HeroSectionPackages
        title="Economy Umrah Packages"
        paragraph="Experience unbeatable affordability and value with our budget-friendly 3 star Umrah packages."
        heroImage="/img/masthead/hero_background/package_one_background.avif"
      />

      <main>
        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="page_paragraph_heading">
            Experience unbeatable affordability and value with our
            budget-friendly Economy Umrah packages.
          </h3>
          <p className="page_paragraph_paragraph">
            Explore our thoughtfully curated range of Economy Umrah packages,
            designed to cater to a variety of preferences: from all-inclusive to
            budget-conscious options, romantic getaways to family-friendly
            choices. Each package ensures a seamless journey from inquiry to
            departure, providing access to the spiritual significance of the top
            Islamic destinations. Select the perfect Economy package and embark
            on a rejuvenating pilgrimage today.
          </p>
        </section>

        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="packages_page_paragraph_heading">
            Economy Umrah Package Deals: Choose from Affordable to
            Budget-Friendly Options!
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
                <PackagesCards
                  // imageMap={packageImages}
                  category="3 Star"
                  packagesData={threeStarPackagesData}
                />
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

export default ThreeStarPackages;
