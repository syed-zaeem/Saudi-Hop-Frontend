const OurFlightBookingServicesFlights = () => {
    const blockContent = [
      {
        id: 1,
        icon: "/img/flights/support.png",
        title: "Customer Support",
        // delayAnim: "100",
      },
      {
        id: 2,
        icon: "/img/flights/calendar.png",
        title: "Flexible Travel",
        // delayAnim: "200",
      },
      {
        id: 3,
        icon: "/img/flights/handshake.png",
        title: "Trusted Airline Partnerships",
        // delayAnim: "300",
      },
      {
        id: 4,
        icon: "/img/flights/online-booking.png",
        title: "Seemless Booking Experience"
      }
    ];
    return (
      <>
        {blockContent.map((item) => (
          <div
            className="col-lg-3 col-sm-6"
            data-aos="fade"
            data-aos-delay={item.delayAnim}
            key={item.id}>
            <div className="featureIcon -type-1">
              <div className="d-flex justify-center">
                <img
                  src={item.icon}
                //   style={{ width: "52px" }}
                  alt={item.title}
                  className="js-lazy w-10 sm:w-10 md:w-12 lg:w-13 sm:mt-10 mt-0"
                />
              </div>
              <div className="text-center mt-30">
                <h4 className="text-18 fw-500">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default OurFlightBookingServicesFlights;
  