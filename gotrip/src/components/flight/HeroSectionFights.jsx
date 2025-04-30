import MainFilterSearchBoxFlights from "./MainFilterSearchBoxFlights";

const HeroSectionFlights = () => {
  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img
          alt="Discover different Packages in Saudi Arabia"
          src="/img/masthead/hero_background/package_three_background.avif"
          className="js-lazy"
        />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto md:min-w-[95%] xl:min-w-[90%]">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                Book Your Flights with SaudiHop
              </h1>
              <p
                className="text-white mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Find the best-flights to Saudi Arabia for your lunngh or vacation. Our team is ready to assist you in booking your flights over the phone.
                {/* <span style={{backgroundColor: 'blue', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '24px'}}>Price from £1169/pp</span> */}
              </p>
            </div>
            {/* End hero title */}

            <div
              className="tabs -underline mt-60 js-tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBoxFlights />
            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFlights;
