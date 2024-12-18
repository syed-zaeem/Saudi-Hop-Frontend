import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/hotels";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Vendor Hotels || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

export default function BVVendorHotel() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
