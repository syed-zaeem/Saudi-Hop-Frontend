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
import HeroSectionFlights from "@/components/flight/HeroSectionFights";
import WhyChooseSectionFlights from "@/components/flight/WhyChooseSectionFlights";
import HowToBookFlightFlights from "@/components/flight/HowToBookFlightFlights";
import OurFlightBookingServicesFlights from "@/components/flight/OurFlightBookingServicesFlights";

const metadata = {
  title: "Luxury 5-Star Umrah Packages – Exclusive Pilgrimage | Saudi Hop",
  description:
    "Discover our exclusive 5-star Umrah packages with world-class hotels near Haram in Makkah and Medina. Book your luxury pilgrimage with Saudi Hop for an unforgettable experience.",
  keywords:
    "5-star Umrah packages, luxury Umrah deals, Makkah and Medina hotels, premium Umrah packages, book Umrah Saudi Hop",
};

const Flights = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPackages());
    dispatch(getAllHotels());
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <HeroSectionFlights />

      <main>
        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="page_paragraph_heading">
            Why Choose SaudiHop for Your Flight Booking?
          </h3>
          <p className="page_paragraph_paragraph">
            Let our experts guide you to the best flight options for your
            journey.
          </p>
          <div className="row y-gap-30 pt-40">
            <WhyChooseSectionFlights />
          </div>
          <div>
            <button className="button px-24 h-50 -dark-1 bg-blue-1 text-white whychooseusflights_button">
              Talk to an Expert Now!
            </button>
          </div>
        </section>

        <section className="page_paragraph" data-aos="fade-up">
          <h3 className="page_paragraph_heading">How to Book Your Flight?</h3>
          <div className="row y-gap-30 pt-40">
            <HowToBookFlightFlights />
          </div>
        </section>

        <section className="mt-[80px] layout-pb-lg">
          <div className="container">
          <h3 className="page_paragraph_heading text-center mb-40">Our Flight Booking Services</h3>
            <div className="row y-gap-20 justify-between">
              <OurFlightBookingServicesFlights />
            </div>
          </div>
          <div>
            <button className="button px-12 h-50 -dark-1 bg-blue-1 text-white ourflightsservices_button">
              Call Now to Book Your Flight
            </button>
          </div>
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

export default Flights;
