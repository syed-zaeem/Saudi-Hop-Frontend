import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-packages";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Packages || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBPackages = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  )
}

export default DBPackages
