const features = [
    {
      id: 1,
      icon: "/img/flights/phone-receiver-silhouette.png",
      title: "Call or Request",
    },
    {
      id: 2,
      icon: "/img/flights/clipboard.png",
      title: "Expert Presents Flight Options",
    },
    {
      id: 3,
      icon: "/img/flights/plane.png",
      title: "Confirm Your Flight",
    },
  ];
  
  const HowToBookFlightFlights = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center bg-white rounded-xl shadow-sm p-4 space-x-4 hover:shadow-md transition"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-8 sm:w-9 md:w-10 lg:w-12 object-contain"
            />
            <span className="text-md md:text-[17px] font-medium text-gray-800 leading-snug">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  export default HowToBookFlightFlights;
  