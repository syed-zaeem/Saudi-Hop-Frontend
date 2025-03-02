import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Faq from "../faq/Faq";
import { FaqsAccordion } from "../faq/FaqsAccordion";

const FAQsContent = () => {
  return (
    <>
      <div className="section-bg layout-pt-xl layout-pb-xl">
        <div className="section-bg__item col-12">
          <img src="/img/pages/FAQs/hero_section_2.jpeg" alt="image" />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-lg-10 col-md-12 py-12 sm:py-0 lg:py-8">
              <h1 className="text-60 lg:text-40 md:text-30 text-white">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="container pt-10 my-20 md:my-28">
        <Tabs>
          <div className="row y-gap-30">
            <div className="col-lg-3">
              <div className="px-30 py-30 rounded-4 border-light">
                <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
                  <Tab className="col-12 tabs__button js-tabs-button">
                    Tourist Visa
                  </Tab>
                  <Tab className="col-12 tabs__button js-tabs-button">
                    Entry Requirements
                  </Tab>
                  <Tab className="col-12 tabs__button js-tabs-button">
                    General Information
                  </Tab>
                  <Tab className="col-12 tabs__button js-tabs-button">
                    GCC Residents
                  </Tab>
                </TabList>
              </div>
            </div>
            {/* End .col-lg-3 */}

            <div className="col-lg-9">
              <TabPanel>
                <div className="row y-gap-30 justify-center" data-aos="fade">
                  <div className="col-lg-10">
                    {/* <div className="accordion -simple row y-gap-20 js-accordion"> */}
                    <FaqsAccordion />
                    {/* </div> */}
                  </div>
                </div>
              </TabPanel>
              {/* End  General Terms of Use */}

              <TabPanel>
              <div className="row y-gap-30 justify-center" data-aos="fade">
                  <div className="col-lg-10">
                    {/* <div className="accordion -simple row y-gap-20 js-accordion"> */}
                    <FaqsAccordion />
                    {/* </div> */}
                  </div>
                </div>
              </TabPanel>
              {/* End  Privacy policy */}

              <TabPanel>
              <div className="row y-gap-30 justify-center" data-aos="fade">
                  <div className="col-lg-10">
                    {/* <div className="accordion -simple row y-gap-20 js-accordion"> */}
                    <FaqsAccordion />
                    {/* </div> */}
                  </div>
                </div>
              </TabPanel>
              {/* End  Cookie Policy */}

              <TabPanel>
              <div className="row y-gap-30 justify-center" data-aos="fade">
                  <div className="col-lg-10">
                    {/* <div className="accordion -simple row y-gap-20 js-accordion"> */}
                    <FaqsAccordion />
                    {/* </div> */}
                  </div>
                </div>
              </TabPanel>
              {/* End  Best Price Guarantee */}
            </div>
            {/* End col-lg-9 */}
          </div>
        </Tabs>
      </section>
    </>
  );
};

export default FAQsContent;
