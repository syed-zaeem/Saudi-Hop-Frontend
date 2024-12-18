import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-settings";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Settings || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

export default function DBSettings() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
