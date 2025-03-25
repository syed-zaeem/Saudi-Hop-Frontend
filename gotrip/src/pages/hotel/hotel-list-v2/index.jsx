import { useEffect } from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/hotel-list/hotel-list-v2/TopHeaderFilter";
import HotelProperties from "@/components/hotel-list/hotel-list-v2/HotelProperties";
import Pagination from "@/components/hotel-list/common/Pagination";
import Sidebar from "@/components/hotel-list/hotel-list-v2/Sidebar";

import MetaComponent from "@/components/common/MetaComponent";
import HeroSectionHotels from "@/components/hotel-list/hotel-list-v2/Hero_Section_Hotels";
import Header1 from "@/components/header/header-1";
import { useDispatch } from "react-redux";
import { getAllHotels } from "@/features/hotelSlice";

const metadata = {
  title:
    "Best Hotels in Saudi Arabia – Luxury & Budget Accommodation | Saudi Hop",
  description:
    "Find the best hotels in Saudi Arabia with Saudi Hop. Explore luxury resorts, affordable stays, and exclusive deals in Makkah, Medina, Riyadh, and more. Book your perfect stay today.",
  keywords:
    "hotels in Saudi Arabia, luxury hotels Saudi Arabia, budget hotels Saudi Arabia, Makkah hotels, Medina hotels, Saudi Arabia accommodation, hotel booking Saudi Arabia",
};

const HotelListPage2 = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllHotels())
  }, [])  

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      {/* <div className="header-margin"></div> */}
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <HeroSectionHotels />

      <main>
        <section className="layout-pt-lg layout-pb-lg">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-xl-3">
                <aside className="sidebar y-gap-40 xl:d-none">
                  <Sidebar />
                </aside>
                {/* End sidebar for desktop */}

                <div
                  className="offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="listingSidebar"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">
                      Filter Hotels
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* End offcanvas header */}

                  <div className="offcanvas-body">
                    <aside className="sidebar y-gap-40  xl:d-block">
                      <Sidebar />
                    </aside>
                  </div>
                  {/* End offcanvas body */}
                </div>
                {/* End mobile menu sidebar */}
              </div>
              {/* End col */}

              <div className="col-xl-9 ">
                <TopHeaderFilter />
                <div className="mt-30"></div>
                {/* End mt--30 */}
                <div className="row y-gap-30">
                  <HotelProperties />
                </div>
                {/* End .row */}
                {/* <Pagination /> */}
              </div>
              {/* End .col for right content */}
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
    </>
  );
};

export default HotelListPage2;
