import MainFilterSearchBoxHotels from "./MainFilterSearchBoxHotels";

const HeroSectionHotels = () => {
  return (
  //   <section className="masthead -type-1 z-5">
  //   <div className="masthead__bg">
  //     <img
  //       alt="image"
  //       src="/img/destinations/main_background.jpg"
  //       className="js-lazy"
  //     />
  //   </div>
  //   <div className="container">
  //     <div className="row justify-center">
  //       <div className="col-auto">
  //         <div className="text-center">
  //           <h1
  //             className="text-60 lg:text-40 md:text-30 text-white"
  //             data-aos="fade-up"
  //           >
  //             Destinations
  //           </h1>
  //         </div>

  //         <div
  //           className="tabs -underline mt-60 js-tabs"
  //           data-aos="fade-up"
  //           data-aos-delay="200"
  //         >
  //           <MainFilterSearchBoxDistinations />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>

  <section className="masthead -type-1 z-5">
  <div className="masthead__bg">
    <img
      alt="Disover Hotels in Saudi Arabia"
      src="/img/hotels/main_background.avif"
      className="js-lazy"
    />
  </div>
  <div className="container">
    <div className="row justify-center">
      <div className="col-auto min-w-[95%] lg:min-w-3">
        <div className="text-center">
          <h1
            className="text-60 lg:text-40 md:text-30 text-white"
            data-aos="fade-up"
          >
            Hotels
          </h1>
        </div>
        {/* End hero title */}

        <div
          className="tabs -underline mt-60 js-tabs"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <MainFilterSearchBoxHotels />
        </div>
        {/* End tab-filter */}
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroSectionHotels;
