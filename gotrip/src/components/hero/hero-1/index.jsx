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
      <div className="container sm:mt-32 md:mt-0 lg:-mt-20 xl:-mt-16">
        <div className="row justify-center">
          <div className="col-auto ">
            <div className="flex flex-row align-items-center gap-20">
              <div className="text-left lg:text-center md:mt-20 mt-0 lg:w-full w-2/3 ">
                <h1
                  className="text-40 md:text-30 lg:text-30 text-white"
                  data-aos="fade-up"
                >
                  Discover Saudi Arabia — Faith, Culture, and Adventure Await
                </h1>
                <p
                  className="text-white mt-6 md:mt-8"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Explore the spiritual journey of Umrah and the rich landscapes
                  of Saudi Arabia with exclusive packages for every traveller.
                  Whether for pilgrimage or leisure, we handle everything —
                  flights, hotels, tours, and more.
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
              className="tabs -underline mt-40 mb-4 js-tabs"
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
