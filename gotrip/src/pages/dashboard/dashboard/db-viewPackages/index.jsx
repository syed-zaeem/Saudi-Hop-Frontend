// import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-viewPackages";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "View Packages || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBViewPackages = () => {
  return (
    <>
     <MetaComponent meta={metadata} />
     <DashboardPage />
    </>
  )
}

export default DBViewPackages
