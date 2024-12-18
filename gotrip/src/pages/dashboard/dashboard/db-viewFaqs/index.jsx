// import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-viewFaqs";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "View FAQs || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBViewFaqs = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  )
}

export default DBViewFaqs
