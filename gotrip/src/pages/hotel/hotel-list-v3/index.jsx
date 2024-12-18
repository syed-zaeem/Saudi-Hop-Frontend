import Header11 from "@/components/header/header-11";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";
import MapPropertyFinder from "@/components/hotel-list/common/MapPropertyFinder";
import Pagination from "@/components/hotel-list/common/Pagination";
import HotelProperties from "@/components/hotel-list/hotel-list-v3/HotelProperties";
import MainFilterSearchBox from "@/components/hotel-list/hotel-list-v3/MainFilterSearchBox";
import TopHeaderFilter from "@/components/hotel-list/hotel-list-v3/TopHeaderFilter";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Hotel List v3 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const HotelListPage3 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="halfMap">
        <div className="halfMap__content">
          <MainFilterSearchBox />

          <div className="row x-gap-10 y-gap-10 pt-20">
            <DropdownSelelctBar />
          </div>
          {/* End .row */}

          <div className="row y-gap-10 justify-between items-center pt-20">
            <TopHeaderFilter />
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-20">
            <HotelProperties />
          </div>
          {/* End .row */}

          <Pagination />
          {/* End Pagination */}
        </div>
        {/* End .halfMap__content */}

        <div className="halfMap__map">
          <div className="map">
            <MapPropertyFinder />
          </div>
        </div>
        {/* End halfMap__map */}
      </section>
      {/* End halfMap content */}
    </>
  );
};

export default HotelListPage3;
