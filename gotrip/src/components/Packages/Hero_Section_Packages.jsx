import MainFilterSearchBoxPackages from "./MainFilterSearchBoxPackages";

const HeroSectionPackages = ({ title, paragraph, heroImage }) => {
  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img
          alt="Discover different Packages in Saudi Arabia"
          src={heroImage}
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
                {title}
              </h1>
              <p
                className="text-white mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {paragraph}
                {/* <span style={{backgroundColor: 'blue', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '24px'}}>Price from £1169/pp</span> */}
              </p>
            </div>
            {/* End hero title */}

            <div
              className="tabs -underline mt-60 js-tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBoxPackages />
            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPackages;
