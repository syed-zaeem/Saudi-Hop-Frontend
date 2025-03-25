import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import ContactForm from "@/components/common/ContactForm";
import LocationTopBar from "@/components/common/LocationTopBar";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Contact Saudi Hop | Get In Touch for Umrah & Ramadan Tour Packages",
  description:
    "Reach out to Saudi Hop for customized Umrah and Ramadan travel services. Contact us for personalized packages, expert assistance, and seamless pilgrimage planning.",
  keywords:
    "Contact Saudi Hop, Umrah tour assistance, Ramadan travel packages, Umrah inquiry, customer support, Umrah booking, pilgrimage planning",
};

const Contact = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      {/* <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182586.0420340798!2d-73.99038430252834!3d40.749936548349346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1670824458615!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </div> */}
      {/* End map section */}

      <main>
        <section className="section-bg layout-pt-xl layout-pb-xl">
          <div className="section-bg__item col-12">
            <img
              src="/img/pages/contact/hero_section_2.jpeg"
              alt="Contact Saudi Hop – Trusted Umrah Services"
            />
          </div>
          {/* End section-bg__item */}

          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-lg-10 col-md-12 py-12 sm:py-0 lg:py-8">
                <h1 className="text-60 lg:text-40 md:text-30 text-white">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="container mb-80 mt-[70px] lg:mt-[130px] xl:mt-[160px]">
          <div className="row">
            <div className="col-lg-6">
              <div className="px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
                <div className="text-[22px] sm:text-2xl md:text-2xl lg:text-3xl fw-600">
                  Send a Message
                </div>
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/img/pages/contact/main_section.webp"
                className="h-full lg:mt-60 mt-0"
                alt="image"
              />
            </div>
          </div>
        </section>
        {/* End contact section form */}

        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row x-gap-80 y-gap-20 justify-between">
              <div className="col-12">
                <div className="text-30 sm:text-24 fw-600">Contact Us</div>
              </div>
              {/* End .col */}

              <Address />
              {/* End address com */}

              <div className="col-auto">
                <div className="text-14 text-light-1">
                  Follow us on social media
                </div>
                <div className="d-flex x-gap-20 items-center mt-10">
                  <Social />
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
        </section>
        {/* End Address Section */}

        {/* <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
        </div>
      </section> */}
        {/* End Why Choose Us section */}
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Contact;
