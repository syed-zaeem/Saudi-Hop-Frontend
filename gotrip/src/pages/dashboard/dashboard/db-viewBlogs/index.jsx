// import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-viewBlogs";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "View Blogs || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBViewBlogs = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  )
}

export default DBViewBlogs
