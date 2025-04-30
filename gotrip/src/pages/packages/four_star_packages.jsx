import { useEffect } from "react";
import Header1 from "@/components/header/header-1";
import HeroSectionPackages from "@/components/Packages/Hero_Section_Packages";
import Pagination from "@/components/hotel-list/common/Pagination";
// import HotelProperties from "@/components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";
import PackagesCards from "@/components/Packages/Packages_Cards";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import { fourStarPackagesData } from "@/data/packages";
import MetaComponent from "@/components/common/MetaComponent";
import { getAllPackages } from "@/features/packageSlice";
import { useDispatch } from "react-redux";
import { getAllHotels } from "@/features/hotelSlice";

const metadata = {
  title: "Premium 4-Star Umrah Packages – Comfortable Stays | Saudi Hop",
  description:
    "Explore premium 4-star Umrah packages with luxury stays near Haram in Makkah and Medina. Enjoy exclusive amenities and a seamless pilgrimage booking with Saudi Hop.",
  keywords:
    "4-star Umrah packages, premium Umrah deals, Makkah and Medina hotels, luxury Umrah stays, book Umrah Saudi Hop",
};

const FourStarPackages = () => {
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
        title="Premium Umrah Packages"
        paragraph="Discover elevated comfort and indulgence with our distinctive 4 star Umrah packages."
        heroImage="/img/masthead/hero_background/package_two_background.avif"
      />

      <main>
        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="page_paragraph_heading">
            Elevate your pilgrimage experience with our Premium Umrah packages,
            offering superior comfort and indulgence.
          </h3>
          <p className="page_paragraph_paragraph">
            Our Premium Umrah packages are carefully crafted to meet various
            traveler preferences, offering a range of choices from inclusive
            options to value-driven deals, perfect for couples or family
            adventures. Each journey is designed with a focus on comfort and
            spiritual connection, ensuring a smooth and enriching pilgrimage.
            Select from our exclusive Premium options and enjoy an unforgettable
            Umrah experience.
          </p>
        </section>

        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="packages_page_paragraph_heading">
          Premium Umrah Package Deals: Reserve Comfort and Value-Focused Options!
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
                  category="4 Star"
                  packagesData={fourStarPackagesData}
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

export default FourStarPackages;
