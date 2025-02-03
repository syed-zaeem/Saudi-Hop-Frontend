const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/visa.svg",
      title: "Visa",
      text: `Hassle-free visa processing for your travels.`,
      // delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/flight.svg",
      title: "Flights",
      text: `Book your flights at the best prices.`,
      // delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/hotel.svg",
      title: "Hotel",
      text: `Find comfortable stays worldwide.`,
      // delayAnim: "300",
    },
  ];
  return (
    <>
      <h3 className="mb-10" style={{textAlign: "center"}}>All of Our Packages Include:</h3>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <img src={item.icon} style={{width: '52px'}} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
      <h5 className="mt-10" style={{textAlign: "center"}}>Ground Transfers Can Be Included</h5>
    </>
  );
};

export default BlockGuide;
