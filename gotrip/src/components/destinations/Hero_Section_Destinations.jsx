import MainFilterSearchBoxDistinations from "./MainFilterSearchBoxDestinations";

const HeroSectionDestinations = () => {
  return (
    <section className="masthead -type-1 z-5">
    <div className="masthead__bg">
      <img
        alt="image"
        src="/img/destinations/main_background.jpg"
        // src="/img/masthead/hero_background/khana_kaba.avif"
        className="js-lazy"
      />
    </div>
    <div className="container">
      <div className="row justify-center">
        <div className="col-auto">
          <div className="text-center">
            <h1
              className="text-60 lg:text-40 md:text-30 text-white"
              data-aos="fade-up"
            >
              Destinations
            </h1>
          </div>
          {/* End hero title */}

          <div
            className="tabs -underline mt-60 js-tabs"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <MainFilterSearchBoxDistinations />
          </div>
          {/* End tab-filter */}
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSectionDestinations;
