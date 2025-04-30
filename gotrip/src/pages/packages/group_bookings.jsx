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
import WhyChooseGroupBookingsSection from "@/components/Packages/WhyChooseGroupBookingsSection";
import ContentSectionGroupBookings from "./ContentSectionGroupBookings";

const metadata = {
  title: "Luxury 5-Star Umrah Packages – Exclusive Pilgrimage | Saudi Hop",
  description:
    "Discover our exclusive 5-star Umrah packages with world-class hotels near Haram in Makkah and Medina. Book your luxury pilgrimage with Saudi Hop for an unforgettable experience.",
  keywords:
    "5-star Umrah packages, luxury Umrah deals, Makkah and Medina hotels, premium Umrah packages, book Umrah Saudi Hop",
};

const GroupBookings = () => {
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
        title="Group Bookings"
        paragraph="Plan your group pligrimage or cultural tour with ease, whether for families, friends, or community groups."
        heroImage="/img/masthead/hero_background/package_three_background.avif"
      />

      <main>
      <section className="page_paragraph" data-aos="fade-up">
          <h3 className="page_paragraph_heading">
            Why Choose Group Bookings with SaudiHop?
          </h3>
          <p className="page_paragraph_paragraph">
            Customizable Packages for Every Group Type
          </p>
          <div className="row y-gap-30 pt-40">
            <WhyChooseGroupBookingsSection />
          </div>
          <p className="page_paragraph_paragraph mt-40">
            Let us help you plan your group's next pilgrimage.
          </p>
          <div>
            <button className="button px-24 h-50 -dark-1 bg-blue-1 text-white whychooseusflights_button">
              Speak with an Expert
            </button>
          </div>
        </section>

        <section className="layout-pt-md">
          <ContentSectionGroupBookings />
        </section>

        <section className="layout-pt-md layout-pb-lg">
          
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

export default GroupBookings;
