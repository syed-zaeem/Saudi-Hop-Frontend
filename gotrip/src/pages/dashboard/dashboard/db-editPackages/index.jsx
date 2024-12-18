// import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-editPackages";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "FAQs || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBEditPackages = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  )
}

export default DBEditPackages
