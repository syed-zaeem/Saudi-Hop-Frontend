const features = [
  {
    id: 1,
    icon: "/img/flights/technical-support.png",
    title: "Personalized Service",
  },
  {
    id: 2,
    icon: "/img/flights/calendar.png", // replace with your icon path
    title: "Flexible Travel Plans",
  },
  {
    id: 3,
    icon: "/img/flights/handshake.png", // replace with your icon path
    title: "Exclusive Deals",
  },
  {
    id: 4,
    icon: "/img/flights/check-box.png", // replace with your icon path
    title: "Seamless Experience",
  },
];

const WhyChooseSectionFlights = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-center space-x-6">
          <img src={feature.icon} alt={feature.title} className="w-7 md:w-8 lg:w-9" />
          <span className="text-md md:text-lg lg:text-[19px] font-medium">{feature.title}</span>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseSectionFlights;
