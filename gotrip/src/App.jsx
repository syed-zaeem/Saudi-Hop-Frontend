import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "./components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import Home from "./pages";
import Home_1 from "./pages/homes/home_1";
import Home_2 from "./pages/homes/home_2";
import Home_3 from "./pages/homes/home_3";
import Home_4 from "./pages/homes/home_4";
import Home_5 from "./pages/homes/home_5";
import Home_6 from "./pages/homes/home_6";
import Home_7 from "./pages/homes/home_7";
import Home_8 from "./pages/homes/home_8";
import Home_9 from "./pages/homes/home_9";
import Home_10 from "./pages/homes/home_10";
import BlogListV1 from "./pages/blogs/blog-list-v1";
import BlogListV2 from "./pages/blogs/blog-list-v2";
import BlogSingleDynamic from "./pages/blogs/blog-details";
import NotFoundPage from "./pages/not-found";
import About from "./pages/others/about";
import BecomeExpert from "./pages/others/become-expert";
import HelpCenter from "./pages/others/help-center";
import LogIn from "./pages/others/login";
import SignUp from "./pages/others/signup";
import Terms from "./pages/others/terms";
import Invoice from "./pages/others/invoice";
import DBDashboard from "./pages/dashboard/dashboard/db-dashboard";
import DBBooking from "./pages/dashboard/dashboard/db-booking";
import DBWishlist from "./pages/dashboard/dashboard/db-wishlist";
import DBSettings from "./pages/dashboard/dashboard/db-settings";
import VendorAddHotel from "./pages/dashboard/vendor-dashboard/add-hotel";
import VendorBooking from "./pages/dashboard/vendor-dashboard/booking";
import BVVendorHotel from "./pages/dashboard/vendor-dashboard/hotels";
import BDVendorRecovery from "./pages/dashboard/vendor-dashboard/recovery";
import VendorDashboard from "./pages/dashboard/vendor-dashboard/dashboard";
import HotelListPage1 from "./pages/hotel/hotel-list-v1";
import HotelListPage2 from "./pages/hotel/hotel-list-v2";
import HotelListPage3 from "./pages/hotel/hotel-list-v3";
import HotelListPage4 from "./pages/hotel/hotel-list-v4";
import HotelListPage5 from "./pages/hotel/hotel-list-v5";
import HotelSingleV1Dynamic from "./pages/hotel/hotel-single-v1";
import HotelSingleV2Dynamic from "./pages/hotel/hotel-single-v2";
import BookingPage from "./pages/hotel/booking-page";
import TourListPage1 from "./pages/tour/tour-list-v1";
import TourListPage2 from "./pages/tour/tour-list-v2";
import TourListPage3 from "./pages/tour/tour-list-v3";
import TourSingleV1Dynamic from "./pages/tour/tour-single";
import ActivityListPage1 from "./pages/activity/activity-list-v1";
import ActivityListPage2 from "./pages/activity/activity-list-v2";
import ActivityListPage3 from "./pages/activity/activity-list-v3";
import ActivitySingleV1Dynamic from "./pages/activity/activity-single";
import RentalListPage1 from "./pages/rental/rental-list-v1";
import RentalListPage2 from "./pages/rental/rental-list-v2";
import RentalListPage3 from "./pages/rental/rental-list-v3";
import RentalSingleV1Dynamic from "./pages/rental/rental-single";
import CarListPage1 from "./pages/car/car-list-v1";
import CarListPage2 from "./pages/car/car-list-v2";
import CarListPage3 from "./pages/car/car-list-v3";
import CarSingleV1Dynamic from "./pages/car/car-single";
import CruiseListPage1 from "./pages/cruise/cruise-list-v1";
import CruiseListPage2 from "./pages/cruise/cruise-list-v2";
import CruiseListPage3 from "./pages/cruise/cruise-list-v3";
import CruiseSingleV1Dynamic from "./pages/cruise/cruise-single";
import FlightListPage1 from "./pages/flight/flight-list-v1";
import Contact from "./pages/others/contact";
import Destinations from "./pages/others/destinations";
import DBBlogs from "./pages/dashboard/dashboard/db-blogs";
import DBFaqs from "./pages/dashboard/dashboard/db-faqs";
import DBPackages from "./pages/dashboard/dashboard/db-packages";
import DBHotels from "./pages/dashboard/dashboard/db-hotels";
import DBViewBlogs from "./pages/dashboard/dashboard/db-viewBlogs";
import DBViewFaqs from "./pages/dashboard/dashboard/db-viewFaqs";
import DBViewPackages from "./pages/dashboard/dashboard/db-viewPackages";
import DBViewHotels from "./pages/dashboard/dashboard/db-viewHotels";
import DBEditBlogs from "./pages/dashboard/dashboard/db-editBlogs";
import DBEditFaqs from "./pages/dashboard/dashboard/db-editFaqs";
import DBEditPackages from "./pages/dashboard/dashboard/db-editPackages";
import DBEditHotels from "./pages/dashboard/dashboard/db-editHotels";
import Three_Star_Packages from "./components/Packages/Three_Star_Packages";
import ThreeStarPackages from "./pages/packages/three_star_packages";
import Four_Star_Packages from "./components/Packages/Four_Star_Packages";
import FourStarPackages from "./pages/packages/four_star_packages";
import FiveStarPackages from "./pages/packages/five_star_packages";
import UltraLuxuryPackages from "./pages/packages/ultra_luxury_packages";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home_1" element={<Home_1 />} />
              <Route path="home_2" element={<Home_2 />} />
              <Route path="home_3" element={<Home_3 />} />
              <Route path="home_4" element={<Home_4 />} />
              <Route path="home_5" element={<Home_5 />} />
              <Route path="home_6" element={<Home_6 />} />
              <Route path="home_7" element={<Home_7 />} />
              <Route path="home_8" element={<Home_8 />} />
              <Route path="home_9" element={<Home_9 />} />
              <Route path="home_10" element={<Home_10 />} />

              <Route path="blog-list-v1" element={<BlogListV1 />} />
              <Route path="blog-list-v2" element={<BlogListV2 />} />
              <Route path="blog-details/:id" element={<BlogSingleDynamic />} />

              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />

              <Route path="about" element={<About />} />
              <Route path="become-expert" element={<BecomeExpert />} />
              <Route path="help-center" element={<HelpCenter />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
              <Route path="terms" element={<Terms />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="contact" element={<Contact />} />
              <Route path="destinations" element={<Destinations />} />
              <Route
                path="three-star-packages"
                element={<ThreeStarPackages />}
              />
              <Route path="four-star-packages" element={<FourStarPackages />} />
              <Route path="five-star-packages" element={<FiveStarPackages />} />
              <Route
                path="ultra-luxury-packages"
                element={<UltraLuxuryPackages />}
              />

              <Route path="dashboard">
                <Route path="db-dashboard" element={<DBDashboard />} />
                <Route path="db-booking" element={<DBBooking />} />
                <Route path="db-wishlist" element={<DBWishlist />} />
                <Route path="db-settings" element={<DBSettings />} />
                <Route path="db-blogs" element={<DBViewBlogs />} />
                <Route path="db-faqs" element={<DBViewFaqs />} />
                <Route path="db-packages" element={<DBViewPackages />} />
                <Route path="db-hotels" element={<DBViewHotels />} />
                <Route path="db-addBlogs" element={<DBBlogs />} />
                <Route path="db-addFaqs" element={<DBFaqs />} />
                <Route path="db-addPackages" element={<DBPackages />} />
                <Route path="db-addHotels" element={<DBHotels />} />
                <Route path="db-editBlogs" element={<DBEditBlogs />} />
                <Route path="db-editFaqs/:id" element={<DBEditFaqs />} />
                <Route path="db-editPackages" element={<DBEditPackages />} />
                <Route path="db-editHotels" element={<DBEditHotels />} />
              </Route>

              <Route path="vendor-dashboard">
                <Route path="dashboard" element={<VendorDashboard />} />
                <Route path="add-hotel" element={<VendorAddHotel />} />
                <Route path="booking" element={<VendorBooking />} />
                <Route path="hotels" element={<BVVendorHotel />} />
                <Route path="recovery" element={<BDVendorRecovery />} />
              </Route>

              <Route path="hotel-list-v1" element={<HotelListPage1 />} />
              <Route path="hotel-list-v2" element={<HotelListPage2 />} />
              <Route path="hotel-list-v3" element={<HotelListPage3 />} />
              <Route path="hotel-list-v4" element={<HotelListPage4 />} />
              <Route path="hotel-list-v5" element={<HotelListPage5 />} />
              <Route
                path="hotel-single-v1/:id"
                element={<HotelSingleV1Dynamic />}
              />
              <Route
                path="hotel-single-v2/:id"
                element={<HotelSingleV2Dynamic />}
              />
              <Route path="booking-page" element={<BookingPage />} />

              <Route path="tour-list-v1" element={<TourListPage1 />} />
              <Route path="tour-list-v2" element={<TourListPage2 />} />
              <Route path="tour-list-v3" element={<TourListPage3 />} />
              <Route path="tour-single/:id" element={<TourSingleV1Dynamic />} />

              <Route path="activity-list-v1" element={<ActivityListPage1 />} />
              <Route path="activity-list-v2" element={<ActivityListPage2 />} />
              <Route path="activity-list-v3" element={<ActivityListPage3 />} />
              <Route
                path="activity-single/:id"
                element={<ActivitySingleV1Dynamic />}
              />

              <Route path="rental-list-v1" element={<RentalListPage1 />} />
              <Route path="rental-list-v2" element={<RentalListPage2 />} />
              <Route path="rental-list-v3" element={<RentalListPage3 />} />
              <Route
                path="rental-single/:id"
                element={<RentalSingleV1Dynamic />}
              />

              <Route path="car-list-v1" element={<CarListPage1 />} />
              <Route path="car-list-v2" element={<CarListPage2 />} />
              <Route path="car-list-v3" element={<CarListPage3 />} />
              <Route path="car-single/:id" element={<CarSingleV1Dynamic />} />

              <Route path="cruise-list-v1" element={<CruiseListPage1 />} />
              <Route path="cruise-list-v2" element={<CruiseListPage2 />} />
              <Route path="cruise-list-v3" element={<CruiseListPage3 />} />
              <Route
                path="cruise-single/:id"
                element={<CruiseSingleV1Dynamic />}
              />

              <Route path="flight-list-v1" element={<FlightListPage1 />} />
            </Route>
          </Routes>
          <ScrollTopBehaviour />
        </BrowserRouter>

        <SrollTop />
      </Provider>
    </main>
  );
}

export default App;
