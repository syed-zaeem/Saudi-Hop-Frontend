import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";

import MetaComponent from "@/components/common/MetaComponent";
import EnquireForm from "@/components/common/EnquireForm";

const metadata = {
  title: "Get a Personalized Travel Quote | Enquire Now – Saudi Hop",
  description:
    "Request a customized travel quote from Saudi Hop. Fill out our enquiry form for tailored Umrah packages, flight bookings, luxury accommodations, and personalized travel services.",
  keywords:
    "Saudi Hop travel quote, Umrah enquiry, customized travel packages, flight booking, accommodation request, tailored travel services",
};

const Enquire = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <main>
        <div className="section-bg layout-pt-xl layout-pb-xl">
          <div className="section-bg__item col-12">
            <img
              src="/img/pages/enquire/hero_section_3.jpeg"
              alt="Request a personalized travel quote - Saudi Hop Enquiry Form"
            />
          </div>
          {/* End section-bg__item */}

          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-lg-10 col-md-12 py-12 sm:py-0 lg:py-8">
                <h1 className="text-60 lg:text-40 md:text-30 text-white">
                  Enquire
                </h1>
              </div>
            </div>
          </div>
        </div>

        <section className="container mb-80 mt-[70px] lg:mt-[100px] xl:mt-[120px]">
          <EnquireForm />
        </section>
        {/* End enquire section form */}
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Enquire;
