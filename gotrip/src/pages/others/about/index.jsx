import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Block1 from "@/components/about/Block1";

import Counter from "@/components/counter/Counter";
import Team1 from "@/components/team/Team1";
import Testimonial from "@/components/testimonial/Testimonial";
import Counter2 from "@/components/counter/Counter2";
import Brand from "@/components/brand/Brand";

import MetaComponent from "@/components/common/MetaComponent";
import Header1 from "@/components/header/header-1";

const metadata = {
  title: "About Saudi Hop | Expert Umrah & Ramadan Travel Services",
  description:
    "Learn about Saudi Hop – a trusted travel partner specializing in Umrah and Ramadan tours. Providing affordable packages with flights, luxury hotels, and customized itineraries since 2009.",
  keywords:
    "About Saudi Hop, Umrah travel services, Ramadan tours, trusted Umrah partner, affordable Umrah packages, Umrah itinerary planning, Umrah and Hajj travel",
};

const About = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      {/* <div className="header-margin"></div> */}
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <main>
        <section className="masthead -type-1 z-5">
          <div className="masthead__bg">
            <img
              alt="Saudi Hop Umrah and Ramadan Tour Services"
              src="/img/pages/about/hero_section.avif"
              className="js-lazy"
            />
          </div>
          <div className="container">
            <div className="row justify-center md:w-[60%]">
              <div className="col-auto w-full">
                <div className="md:text-center text-left">
                  <h1
                    className="text-60 lg:text-40 md:text-30 text-white sm:mt-0 lg:mt-80"
                    data-aos="fade-up"
                  >
                    About Us
                  </h1>
                  <p
                    className="text-white lg:mt-20 lg:mb-20"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Saudi Hop is a leading travel service provider specialising
                    in Umrah and special Ramadan tours for fulfilling sacred
                    obligations. If you're seeking a trustworthy source for your
                    Islamic journey, you've come to the right place. Saudi Hop
                    offers the best options for performing your religious
                    duties.
                    {/* <span style={{backgroundColor: 'blue', color: 'white', fontWeight: 'bold', padding: '12px', borderRadius: '24px'}}>Price from £1169/pp</span> */}
                  </p>
                  <div className="flex justify-start md:justify-center">
                    <button
                      className="button px-24 h-50 -dark-1 bg-blue-1 text-white mt-20"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Request a Quote Now!
                    </button>
                  </div>
                </div>
                {/* End hero title */}
              </div>
            </div>
          </div>
        </section>
        {/* End About Banner Section */}

        <section className="layout-pt-md layout-pb-md">
          <div className="container mt-0 mb-0 sm:mt-40 sm:mb-28">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  {/* <h2 className="sectionTitle__title">Why Choose Us</h2> */}
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Saudi Hop is a fresh addition to a reputable travel agency
                    group headquartered in London, with a rich history dating
                    back to 2009. Over the years, we've garnered the trust of
                    tour customers by providing affordable and exceptional
                    travel services, specialising in Umrah packages and offering
                    special Ramadan packages for devout travelers. Our expertise
                    lies in crafting comprehensive packages that cover
                    everything from flight reservations to hotel bookings and
                    itinerary planning. We cater to travelers and tourists
                    worldwide, offering reliable Umrah services for their sacred
                    journeys.
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            {/* <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div> */}
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End Why Choose Us section */}

        <section className="container">
          <div className="row justify-between items-center">
            {/* <Block1 /> */}
            <div className="col-lg-12">
              <h2 className="sm:text-22 text-26 fw-600">
                Our Primary Services Earn Customers' Trust
              </h2>
              <p className="text-dark-1 mt-20">
                In a short period, Saudi Hop has successfully earned the trust
                and loyalty of customers with unbeatable travel services for
                sacred journeys. Our expert agents can customise itineraries for
                customers, ensuring they have an exceptional experience wherever
                they travel. Traveling with Saudi Hop allows travelers to
                enhance their desired itineraries and enjoy them without
                breaking the bank.
                <br />
              </p>
              <h2 className="sm:text-22 text-26 fw-600 mt-30">
                Why Customers Prefer Saudi Hop?
              </h2>
              <p className="text-dark-1 mt-20">
                Saudi Hop doesn't just offer air travel bookings but also
                facilitates hotel reservations and provides consultancy on
                itinerary planning for sacred travel. Our services extend beyond
                travel to sacred destinations; we also facilitate righteous
                tours for Umrah. Saudi Hop ensures that each traveler's
                itinerary is complete by providing all necessary services in one
                place, making us the top choice for every devout voyager.
                <br />
              </p>
              <h2 className="sm:text-22 text-26 fw-600 mt-30">
                Wide Range of Umrah Services:
              </h2>
              <p className="text-dark-1 mt-20">
                At Saudi Hop, customers can find a wide array of sacred travel
                and tour deals with special Umrah packages. Our affordable
                packages, featuring some of the finest hotel accommodations and
                cheapest airlines, are designed to suit the needs and budgets of
                sacred travelers. With our wide selection of Umrah packages,
                travelers can choose the one that best suits them and perform
                their sacred duties. Variations and customisations are also
                possible in these packages.
                <br />
              </p>
              <h2 className="sm:text-22 text-26 fw-600 mt-30">
                Our Customer Care Facilities:
              </h2>
              <p className="text-dark-1 mt-20">
                Our agents at Saudi Hop are always available to assist sacred
                travelers and address any issues they may encounter before or
                during their journey. Whether it's adjusting itineraries,
                guiding travelers during the tour, or providing consultancy on
                reducing travel costs, our agents ensure a friendly and helpful
                customer service experience for guests of sacred destinations.
                <br />
              </p>
            </div>
          </div>
        </section>
        {/* End about block section */}

        <section className="pt-60">
          <div className="container">
            <div className="border-bottom-light pb-40">
              <div className="row y-gap-30 justify-center text-center">
                {/* <Counter /> */}
              </div>
            </div>
          </div>
        </section>
        {/* End counter Section */}

        {/* <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Our Team</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>

          <div className=" pt-40 js-section-slider">
            <div className="item_gap-x30">
              <Team1 />
            </div>
          </div>
        </div>
      </section> */}
        {/* End team section */}

        <section className="section-bg layout-pt-lg layout-pb-lg">
          <div className="section-bg__item -mx-20 bg-light-2" />
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">
                    Overheard from travelers
                  </h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    These popular destinations have a lot to offer
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="overflow-hidden pt-80 js-section-slider">
              <div className="item_gap-x30">
                <Testimonial />
              </div>
            </div>
            {/* End .overflow-hidden */}

            <div className="row y-gap-30 items-center pt-40 sm:pt-20">
              <div className="col-xl-4">
                <Counter2 />
              </div>
              {/* End .col */}

              <div className="col-xl-8">
                <div className="row y-gap-30 justify-between items-center">
                  <Brand />
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End testimonial section */}
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default About;
