import React from 'react'
import Sidebar from "../common/Sidebar";
import Header from "../../../header/dashboard-header";

import Footer from "../common/Footer";
import BlogsEditForm from './components/BlogsEditForm';

const index = () => {
  return (
    <>
      <div className="header-margin"></div>
      <Header />
      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">

            
            <BlogsEditForm />

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
    </>
  )
}

export default index
