import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-booking";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Booking History || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

export default function DBBooking() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
