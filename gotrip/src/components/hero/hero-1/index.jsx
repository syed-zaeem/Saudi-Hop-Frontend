import MainFilterSearchBox from "./MainFilterSearchBox";
import { FaWhatsapp } from "react-icons/fa";

const index = () => {
  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img
          alt="Discover Saudi Arabia"
          src="/img/masthead/hero_background/one.jpg"
          // src="/img/masthead/hero_background/khana_kaba.avif"
          className="js-lazy"
        />
      </div>
      <div className="container sm:mt-32 lg:mt-0">
        <div className="row justify-center">
          <div className="col-auto ">
            <div className="flex flex-row align-items-center gap-20">
              <div className="text-left lg:text-center md:mt-20 mt-0 lg:w-full w-2/3 ">
                <h1
                  className="text-60 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                >
                  Umrah & Dubai
                </h1>
                <p
                  className="text-white mt-6 md:mt-8"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Embark on a <strong>spiritual Umrah pilgrimage</strong> and
                  complement it with a{" "}
                  <strong>luxurious getaway in Dubai</strong>. Discover the
                  perfect blend of <strong>faith, comfort, and travel</strong>{" "}
                  with our exclusive Umrah and tourism packages.
                </p>
              </div>

              <div
                className="text-white lg:w-1/3 hidden lg:block"
                data-aos="fade-up"
              >
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <img
                      className="rounded-lg"
                      src="img/kabbah/Gaint-Clock.jpg"
                      width={200}
                      alt=""
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <img
                      className="rounded-lg w-auto h-auto min-w-[105px] min-h-[105px]"
                      src="img/kabbah/tour.jpeg"
                      // width={}
                      alt=""
                    />
                    <img
                      className="rounded-lg w-auto h-auto min-w-[105px] min-h-[105px]"
                      src="img/kabbah/jeddah.jpeg"
                      // width={200}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End hero title */}

            <div
              className="tabs -underline mt-60 mb-4 js-tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBox />
            </div>
            {/* End tab-filter */}

            {/* Floating WhatsApp Button */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
