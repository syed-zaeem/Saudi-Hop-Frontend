import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-wishlist";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Wishlist || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

export default function DBWishlist() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
