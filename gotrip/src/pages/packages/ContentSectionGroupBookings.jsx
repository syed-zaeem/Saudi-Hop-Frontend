const ContentSectionGroupBookings = () => {
  const servicesContent = [
    {
      id: 1,
      title: "Tailored itineraries for family, friends, or community groups",
    },
    {
      id: 2,
      title: "Affordable group rates and discounts",
    },
    {
      id: 3,
      title: "Dedicated customer support for personalized assistance",
    },
    {
      id: 4,
      title: "Comfortable and convenient accommodations",
    },
    {
      id: 5,
      title: "Seamless travel logists from start to finish",
    },
  ];

  return (
    <>
      {/* <div className="-image col-5 md:mb-60 sm:mb-40">
          <img src="/img/masthead/hero_background/package_three_background.avif" alt="image" />
        </div>
  
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-7">
              <h2 className="text-30 fw-600">Why be a Local Expert</h2>
              <p className="mt-5">
                These popular destinations have a lot to offer
              </p>
              <div className="row y-gap-30 pt-60 md:pt-40">
                {expertContent.map((item) => (
                  <div className="col-12" key={item.id}>
                    <div className="d-flex pr-30">
                      <img className="size-50" src={item.icon} alt="image" />
                      <div className="ml-15">
                        <h4 className="text-18 fw-500">{item.title}</h4>
                        <p className="text-15 mt-10">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

      <section className="flex flex-col lg:flex-row bg-blue-2">
        <div className="col-md-12 col-lg-5 p-0">
          <div>
            <img
              src="/img/Main_Images/one.avif"
              style={{ width: "98%", marginLeft: "1%", height: "100%" }}
              alt="Unlock Exclusive Discount Offers"
            />
          </div>
          <div
            className="flex_left_col py-8 px-12"
            data-aos-delay="50"
          >
            <ul className="row gap-y-4">
              {servicesContent.map((item) => (
                <li
                  className="relative pl-20 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-600"
                  key={item.id}
                >
                  <h4 className="text-18 fw-500">{item.title}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* End col */}
        <div className="col-md-12 col-lg-7 px-[40px] md:px-[70px] py-60">
          <h2 className="sm:text-30 md:text-34 text-40">
            Why Choose Group Bookings with SaudiHop?
          </h2>
          <h4 className="text-28 mt-10">
            Customizable Packages for Every Group Type
          </h4>
          <p className="flex_right_col_paragraph">
            Whether you are organizing a pilgrimage for your family, friends, or
            a community group. SaudiHop ensures that your journey is tailored to
            meet your specific needs. Our expert team walks with you to
            customize every detail of your trip, from flights to accommodations
            and spiritual experiences. Let us take the stress out of organizing.
            so you can focus on what truly matters -- your scared journey.
          </p>
          <h4 className="text-28 mt-10">
            Let us help you plan your groups next pilgrimage. Speak to one of
            our experts today or check availability for your group trip
          </h4>
          <div className="flex flex-col sm:flex-row sm:justify-between w-[100%]">
            <button className="button mx-auto -dark-1 bg-blue-1 text-white flex_right_col_button_groupbooking">
              Speak with an Expert
            </button>
            <button className="button mx-auto -blue-1 bg-white text-dark-1 flex_right_col_button_groupbooking">
              Check Availability
            </button>
          </div>
        </div>
        {/* End container */}
      </section>
    </>
  );
};

export default ContentSectionGroupBookings;
