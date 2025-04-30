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

const metadata = {
  title: "Luxury 5-Star Umrah Packages – Exclusive Pilgrimage | Saudi Hop",
  description:
    "Discover our exclusive 5-star Umrah packages with world-class hotels near Haram in Makkah and Medina. Book your luxury pilgrimage with Saudi Hop for an unforgettable experience.",
  keywords:
    "5-star Umrah packages, luxury Umrah deals, Makkah and Medina hotels, premium Umrah packages, book Umrah Saudi Hop",
};

const FiveStarPackages = () => {
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
        title="Luxury Umrah Packages"
        paragraph="Indulge in unmatched luxury and comfort with our exclusive 5-star Umrah packages."
        heroImage="/img/masthead/hero_background/package_three_background.avif"
      />

      <main>
        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="page_paragraph_heading">
            Indulge in luxury and comfort with our exclusive Luxury Umrah
            packages, providing an exceptional travel experience.
          </h3>
          <p className="page_paragraph_paragraph">
            Explore our meticulously crafted Luxury Umrah packages, with options
            ranging from all inclusive luxurious stays to tailored packages for
            those seeking comfort and style. Whether you're traveling solo, as a
            couple, or with family, each package is designed to offer the
            highest level of service and convenience, ensuring a peaceful and
            enriching pilgrimage. Choose the perfect Luxury package and immerse
            yourself in the serenity of your journey.
          </p>
        </section>

        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="packages_page_paragraph_heading">
          Luxury Umrah Package Deals: Choose from Premium to Elite Options!
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
                  category="5 Star"
                  packagesData={fiveStarPackagesData}
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

export default FiveStarPackages;
