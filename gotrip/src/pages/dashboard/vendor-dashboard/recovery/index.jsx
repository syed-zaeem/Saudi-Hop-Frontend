import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/recovery";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Vendor Recovery || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

export default function BDVendorRecovery() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
