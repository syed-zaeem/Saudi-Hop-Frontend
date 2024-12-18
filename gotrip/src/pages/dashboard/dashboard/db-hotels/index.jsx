import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-hotels";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Hotels || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBHotels = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  )
}

export default DBHotels
