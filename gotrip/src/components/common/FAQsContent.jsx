import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Faq from "../faq/Faq";
import { FaqsAccordion } from "../faq/FaqsAccordion";
import { useSelector } from "react-redux";

const FAQsContent = () => {
  const { faqs, loading, error } = useSelector((state) => state.faqs);

  const uniqueCategories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <>
      <div className="section-bg layout-pt-xl layout-pb-xl">
        <div className="section-bg__item col-12">
          <img
            src="/img/pages/FAQs/hero_section_2.jpeg"
            alt="Saudi Hop Frequently Asked Questions"
          />
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
                  {uniqueCategories.map((category) => (
                    <Tab
                      key={category}
                      className="col-12 tabs__button js-tabs-button"
                    >
                      {category}
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>
            {/* End .col-lg-3 */}

            <div className="col-lg-9">
              {uniqueCategories.map((category) => {
                return (
                  <TabPanel key={category}>
                    <div
                      className="row y-gap-30 justify-center"
                      data-aos="fade"
                    >
                      <div className="col-lg-10">
                        {/* <div className="accordion -simple row y-gap-20 js-accordion"> */}
                        <FaqsAccordion category={category} />
                        {/* </div> */}
                      </div>
                    </div>
                  </TabPanel>
                );
              })}
              {/* <TabPanel>
                <div className="row y-gap-30 justify-center" data-aos="fade">
                  <div className="col-lg-10">
                    <FaqsAccordion category="GCC Residents" />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row y-gap-30 justify-center" data-aos="fade">
                  <div className="col-lg-10">
                    <FaqsAccordion category="Tourist Visa" />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row y-gap-30 justify-center" data-aos="fade">
                  <div className="col-lg-10">
                    <FaqsAccordion category="Entry Requirements" />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row y-gap-30 justify-center" data-aos="fade">
                  <div className="col-lg-10">
                    <FaqsAccordion category="General Information" />
                  </div>
                </div>
              </TabPanel> */}
            </div>
            {/* End col-lg-9 */}
          </div>
        </Tabs>
      </section>
    </>
  );
};

export default FAQsContent;
