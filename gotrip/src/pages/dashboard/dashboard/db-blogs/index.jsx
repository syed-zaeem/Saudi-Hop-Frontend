import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-blogs";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Blogs || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};


const DBBlogs = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  )
}

export default DBBlogs
