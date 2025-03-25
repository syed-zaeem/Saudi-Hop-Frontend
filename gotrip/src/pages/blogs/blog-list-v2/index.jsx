import React, { useState, useEffect } from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import LocationTopBar from "@/components/common/LocationTopBar";
import Blog2 from "@/components/blog/Blog2";
import BlogSidebar from "@/components/blog/blog-sidebar";
import BlogPagination from "@/components/blog/BlogPagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "@/features/blogSlice";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Latest Travel News, Tips & Updates – Saudi Hop Blogs",
  description:
    "Discover the latest travel news, exclusive Saudi Arabia updates, and expert travel tips on Saudi Hop Blogs. Stay informed about new destinations, industry trends, and helpful guides.",
  keywords:
    "Saudi Arabia travel news, latest travel updates, travel tips, Saudi Hop blogs, destination guides, industry insights, tourism news, travel guides",
};

const BlogListV2 = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("This is running the useEffect")
    dispatch(getAllBlogs())
  }, [])

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <main>
        <section className="layout-pt-md">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">Travel articles</h2>
                  {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum is placeholder text commonly used in site.
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End title */}

        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-30 justify-between">
              <div className="col-xl-8">
                <div className="row y-gap-30">
                  <Blog2 />
                </div>
                {/* End .row */}
                {/* <BlogPagination /> */}
              </div>
              {/* End .col */}

              <div className="col-xl-3">
                <BlogSidebar />
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogListV2;
