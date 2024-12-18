// import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-faqs";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "FAQs || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBFaqs = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  )
}

export default DBFaqs
