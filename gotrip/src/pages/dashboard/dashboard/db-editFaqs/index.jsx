// import React from 'react'
import DashboardPage from "../../../../components/dashboard/dashboard/db-editFaqs";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "FAQs || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const DBEditFaqs = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  )
}

export default DBEditFaqs
