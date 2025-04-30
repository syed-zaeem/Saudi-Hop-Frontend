const features = [
  {
    id: 1,
    icon: "/img/booking-pages/icons/friends.png",
    title: "Tailored itineraries for families, friends, or community groups",
  },
  {
    id: 2,
    icon: "/img/booking-pages/icons/discount.png",
    title: "Affordable group rates and discounts",
  },
  {
    id: 3,
    icon: "/img/booking-pages/icons/male-telemarketer.png",
    title: "Dedicated Customer Support",
  },
  {
    id: 4,
    icon: "/img/booking-pages/icons/single-bed.png",
    title: "Comfortable Accommodations",
  },
  {
    id: 5,
    icon: "/img/booking-pages/icons/plane.png",
    title: "Seamless Travel Logistics",
  },
];

const WhyChooseGroupBookingsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-center space-x-6">
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-7 md:w-8 lg:w-9"
          />
          <span className="text-md text-start md:text-lg lg:text-[19px] font-medium">
            {feature.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseGroupBookingsSection;
