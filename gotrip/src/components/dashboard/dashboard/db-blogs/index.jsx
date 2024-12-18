// import React from 'react'
import Sidebar from "../common/Sidebar";
import Header from "../../../header/dashboard-header";

import Footer from "../common/Footer";
import BlogsForm from "./components/BlogsForm";

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

            {/* <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-3xl font-semibold text-gray-800">
                  Add New FAQ
                </h1>
                <div className="text-lg text-gray-600 mb-6">
                  Use the form below to add a new frequently asked question to
                  the database.
                </div>
              </div>
            </div>

            <div className="faq-form">
              <h2 className="form-heading">FAQ Form</h2>
              <form className="faq-form-content">
                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select id="category" name="category" className="categoryDropdown form-input">
                    <option value="touristvisa">Tourist Visa</option>
                    <option value="entryrequirements">Entry Requirements</option>
                    <option value="generalinformation">General Information</option>
                    <option value="gccresidents">GCC Residents</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="question" className="form-label">
                    Question
                  </label>
                  <input
                    type="text"
                    id="question"
                    name="question"
                    className="form-input"
                    placeholder="Enter the question"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="answer" className="form-label">
                    Answer
                  </label>
                  <textarea
                    id="answer"
                    name="answer"
                    className="form-textarea"
                    placeholder="Enter the answer"
                    rows="6"
                  ></textarea>
                </div>

                <div className="form-group text-right">
                  <button type="submit" className="form-button">
                    Add FAQ
                  </button>
                </div>
              </form>
            </div> */}

            <BlogsForm />

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
