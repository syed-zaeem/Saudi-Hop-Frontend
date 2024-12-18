// import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-viewHotels";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "View Hotels || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBViewHotels = () => {
  return (
    <>
     <MetaComponent meta={metadata} />
     <DashboardPage />
    </>
  )
}

export default DBViewHotels
