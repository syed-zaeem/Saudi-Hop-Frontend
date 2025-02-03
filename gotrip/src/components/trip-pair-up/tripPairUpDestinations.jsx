import { Link } from "react-router-dom";
import pairUpDestinationsData from "../../data/pairUpDestinations";

const TripPairUpDestinations = () => {
//   const addContent = [
//     {
//       id: 1,
//       img: "/img/backgrounds/1.png",
//       title: (
//         <>
//           Things To Do On
//           <br /> From US ${pair}
//         </>
//       ),
//       routerPath: "/",
//     },
//     {
//       id: 2,
//       img: "/img/backgrounds/2.png",
//       title: "Up to 70% Discount!",
//       routerPath: "/",
//     },
//   ];

  return (
    <>
      {pairUpDestinationsData.map((item) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="ctaCard -type-1 rounded-4 ">
            <div className="ctaCard__image ratio ratio-63:55">
              <img
                className="img-ratio js-lazy loaded"
                src={item.img}
                alt="image"
              />
            </div>
            <div className="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">
              <h4 className="text-40 lg:text-26 text-white text-center">{item.title}</h4>
              <h3 className="text-32 lg:text-26 text-white text-center">From US ${item.price}</h3>
              <div className="" style={{display: "flex", justifyContent: "center"}}>
                <Link
                  to={item.routerPath}
                  className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                  style={{position: "absolute", bottom: "40px", fontSize: '17px'}}
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TripPairUpDestinations;
